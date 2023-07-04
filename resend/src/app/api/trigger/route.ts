import { createAppRoute } from "@trigger.dev/nextjs";
import { Resend } from "@trigger.dev/resend";
import { Job, TriggerClient, eventTrigger } from "@trigger.dev/sdk";
import { z } from "zod";

export const client = new TriggerClient({
  id: "resend",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

const resend = new Resend({
  // This ID should match your Resend integration ID on the 'Your connected integrations' dashboard.
  id: "resend",
  apiKey: process.env.RESEND_API_KEY!,
});

//This job sends a basic email to a 'to' email address, a 'subject', a 'text' field and a 'from' email address.
new Job(client, {
  id: "send-resend-email",
  name: "Send Resend Email",
  version: "0.1.0",
  trigger: eventTrigger({
    name: "send.email",
    schema: z.object({
      to: z.union([z.string(), z.array(z.string())]),
      subject: z.string(),
      text: z.string(),
      // The 'from' email address must be a verified domain in your Resend account.
      from: z.string(),
    }),
  }),
  integrations: {
    resend,
  },
  run: async (payload, io, ctx) => {
    await io.resend.sendEmail("send-email", {
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      from: payload.from,
    });
  },
});

export const { POST, dynamic } = createAppRoute(client);
