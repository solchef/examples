import { client } from "@/trigger";
import { Github, events } from "@trigger.dev/github";
import { Slack } from "@trigger.dev/slack";

const github = new Github({
  id: "github",
  token: process.env.GITHUB_TOKEN,
});

const slack = new Slack({
  id: "slack",
});

// your first job
client.defineJob({
  id: "new-github-issue-reminder",
  name: "New GitHub Issue reminder",
  version: "0.0.1",
  trigger: github.triggers.repo({
    event: events.onIssueOpened,
    owner: "triggerdotdev",
    repo: "empty",
  }),
  integrations: {
    github,
    slack,
  },
  run: async (payload, io, ctx) => {
    const delayDuration =
      ctx.environment.type === "DEVELOPMENT" ? 3 : 60 * 60 * 24;
    await io.wait("wait 24 hours", delayDuration);

    const issue = await io.github.getIssue("get issue", {
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issueNumber: payload.issue.number,
    });

    if (issue.updated_at === payload.issue.updated_at) {
      const assigneeResult = await io.github.addIssueAssignees("add assignee", {
        owner: payload.repository.owner.login,
        repo: payload.repository.name,
        issueNumber: payload.issue.number,
        assignees: [payload.sender.login],
      });

      await io.slack.postMessage("send reminder", {
        //you'll need to put your Slack channel ID in here
        channel: "<your channel ID>",
        text: `Issue ${payload.issue.title} is still open. I've assigned it to ${payload.sender.login}.\n${issue.html_url}`,
      });
    }
  },
});
