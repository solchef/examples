import { client } from "@/trigger";
import { Github, events } from "@trigger.dev/github";
import { Job } from "@trigger.dev/sdk";

//create GitHub client using OAuth
const githubOAuth = new Github({
  // This ID should match your GitHub integration ID on the 'Your connected integrations' dashboard.
  id: "githubOAuth",
});

// onIssueOpened
// This Job will run when a new issue is opened on a repo you have admin rights to
// Once created, it will add a 'Bug' label to the issue
new Job(client, {
  id: "github-on-issue-opened",
  name: "GitHub - On Issue Opened",
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
