import { Github, events } from "@trigger.dev/github";
import { createAppRoute } from "@trigger.dev/nextjs";
import { Job, TriggerClient } from "@trigger.dev/sdk";

//used to send data to Trigger.dev and register jobs
export const client = new TriggerClient({
  id: "github",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

//create GitHub client using OAuth
const githubOAuth = new Github({
  // This ID should match your GitHub integration ID on the 'Your connected integrations' dashboard.
  id: "githubOAuth",
});

// Job 1
// This Job will run when a new issue is opened on a repo you have admin rights to
// Once created, it will add a 'Bug' label to the issue
new Job(client, {
  id: "github-integration-on-issue-opened",
  name: "GitHub Integration - On Issue Opened",
  version: "0.1.0",
  integrations: { github: githubOAuth },
  trigger: githubOAuth.triggers.repo({
    event: events.onIssueOpened,
    // IMPORTANT: change the 'owner' from "triggerdotdev" to your GitHub username, or an organization you have admin rights to
    owner: "triggerdotdev",
    // IMPORTANT: change the repo from "empty" to a repo you have admin rights to
    repo: "empty",
  }),
  //this function gets executed when the webhook is received
  run: async (payload, io, ctx) => {
    await io.github.addIssueLabels("add label", {
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issueNumber: payload.issue.number,
      labels: ["bug"],
    });

    return { payload, ctx };
  },
});

// create GitHub client using a token
const githubAccessToken = new Github({
  // This ID should match your GitHub integration ID on the 'Your connected integrations' dashboard.
  id: "githubAccessToken",
  token: process.env.GITHUB_TOKEN!,
});

// Job 2
// This Job will run when a new star is added or removed from the triggerdotdev/trigger.dev repo
new Job(client, {
  id: "github-new-star-alert",
  name: "GitHub New Star Alert",
  version: "0.1.0",
  //When a GitHub star is added on the triggerdotdev/trigger.dev repo
  trigger: githubAccessToken.triggers.repo({
    event: events.onStar,
    owner: "triggerdotdev",
    repo: "trigger.dev",
  }),
  //this function gets executed when the webhook is received
  run: async (payload, io, ctx) => {
    await io.logger.info(
      `Total stars are now ${payload.repository.stargazers_count}`
    );
  },
});

//this route is used to send and receive data with Trigger.dev
export const { POST, dynamic } = createAppRoute(client);
