import { Job, TriggerClient, eventTrigger } from "@trigger.dev/sdk";
import { createAppRoute } from "@trigger.dev/nextjs";
import { Slack } from "@trigger.dev/slack";
import { z } from "zod";

const client = new TriggerClient({
  id: "slack",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

const slack = new Slack({
  // This ID should match your Slack integration ID on the 'Your connected integrations' dashboard.
  id: "slack",
});

// This job sends a basic message to a Slack channel.
new Job(client, {
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

export const { POST, dynamic } = createAppRoute(client);
