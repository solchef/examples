import { Job, TriggerClient, eventTrigger } from "@trigger.dev/sdk";
import { createAppRoute } from "@trigger.dev/nextjs";
import { OpenAI } from "@trigger.dev/openai";
import { z } from "zod";

export const client = new TriggerClient({
  id: "jobs-test-app",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

const openai = new OpenAI({
  id: "openai",
  apiKey: process.env.OPENAI_API_KEY!,
});

new Job(client, {
  id: "openai-tasks",
  name: "OpenAI – Tell me a joke",
  version: "0.0.1",
  trigger: eventTrigger({
    name: "openai.tasks",
    schema: z.object({
      jokePrompt: z.string(),
    }),
  }),
  integrations: {
    openai,
  },
  run: async (payload, io, ctx) => {
    await io.openai.retrieveModel("get-model", {
      model: "gpt-3.5-turbo",
    });

    const models = await io.openai.listModels("list-models");

    await io.openai.backgroundCreateChatCompletion(
      "background-chat-completion",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: payload.jokePrompt,
          },
        ],
      }
    );
  },
});

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

export const { POST, dynamic } = createAppRoute(client);
