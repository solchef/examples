import { Job, eventTrigger } from "@trigger.dev/sdk";
import { client } from "@/trigger";
import { OpenAI } from "@trigger.dev/openai";
import { z } from "zod";

const openai = new OpenAI({
  id: "openai",
  apiKey: process.env.OPENAI_API_KEY!,
});

// generateHedgehogImages
new Job(client, {
  id: "openai-images",
  name: "OpenAI – Generate hedgehog images",
  version: "0.0.1",
  trigger: eventTrigger({
    name: "openai.images",
    schema: z.object({}),
  }),
  integrations: {
    openai,
  },
  run: async (payload, io, ctx) => {
    await io.openai.createImage("image", {
      prompt: "A hedgehog wearing a party hat",
      n: 2,
      size: "256x256",
      response_format: "url",
    });
  },
});
