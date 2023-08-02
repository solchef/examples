import { client } from "@/trigger";
import { Github, events } from "@trigger.dev/github";
import { Slack } from "@trigger.dev/slack";

// create GitHub client using a token
const githubAccessToken = new Github({
  // This ID should match your GitHub integration ID on the 'Your connected integrations' dashboard.
  id: "githubAccessToken",
  token: process.env.GITHUB_TOKEN!,
});

const slack = new Slack({
  // This ID should match your Slack integration ID on the 'Your connected integrations' dashboard.
  id: "slack",
});

// newStarToSlack
// This Job will run when a star is added or removed from the triggerdotdev/trigger.dev repo
client.defineJob({
  id: "github-new-star-to-slack",
  name: "GitHub - New Star to Slack",
  version: "0.1.0",
  //When a GitHub star is added on the triggerdotdev/trigger.dev repo
  trigger: githubAccessToken.triggers.repo({
    event: events.onStar,
    owner: "triggerdotdev",
    repo: "trigger.dev",
  }),
  integrations: {
    slack,
  },
  //this function gets executed when the webhook is received
  run: async (payload, io, ctx) => {
    // This will post a message to the Slack channel you specify.
    await io.slack.postMessage("post message", {
      // This needs to be the Slack channel ID, not the name.
      channel: "",
      text: `New GitHub star from ${payload.sender.html_url}, ${payload.sender.name}. Your new GitHub star count is ${payload.repository.stargazers_count}.`,
    });
  },
});
