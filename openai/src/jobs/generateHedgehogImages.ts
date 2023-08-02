import { client } from "@/trigger";
import { OpenAI } from "@trigger.dev/openai";
import { eventTrigger } from "@trigger.dev/sdk";
import { z } from "zod";

const openai = new OpenAI({
  id: "openai",
  apiKey: process.env.OPENAI_API_KEY!,
});

// generateHedgehogImages
client.defineJob({
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
    const imageResults = await io.openai.createImage("image", {
      prompt: "A hedgehog wearing a party hat",
      n: 2,
      size: "256x256",
      response_format: "url",
    });

    return {
      images: imageResults.data?.map((image) => image.url),
    };
  },
});
