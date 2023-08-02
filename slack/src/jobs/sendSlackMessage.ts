import { client } from "@/trigger";
import { eventTrigger } from "@trigger.dev/sdk";
import { Slack } from "@trigger.dev/slack";
import { z } from "zod";

const slack = new Slack({
  // This ID should match your Slack integration ID on the 'Your connected integrations' dashboard.
  id: "slack",
});

// Job 1
// This job sends a basic message to a Slack channel.
client.defineJob({
  id: "post-slack-message",
  name: "Post Slack Message",
  version: "0.0.1",
  trigger: eventTrigger({
    name: "slack.test",
    schema: z.object({
      channel: z.string(),
      text: z.string(),
    }),
  }),
  integrations: {
    slack,
  },
  run: async (payload, io, ctx) => {
    const response = await io.slack.postMessage("post message", {
      // This should be your channel ID, not the channel name.
      // You can find this at the bottom of the channel settings page.
      channel: payload.channel,
      text: payload.text,
    });
  },
});
