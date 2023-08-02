import { client } from "@/trigger";
import { Github, events } from "@trigger.dev/github";

// create GitHub client using a token
const githubAccessToken = new Github({
  // This ID should match your GitHub integration ID on the 'Your connected integrations' dashboard.
  id: "githubAccessToken",
  token: process.env.GITHUB_TOKEN!,
});

// newStarAlert
// This Job will run when a star is added or removed from the triggerdotdev/trigger.dev repo
client.defineJob({
  id: "github-new-star-alert",
  name: "GitHub - New Star Alert",
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
