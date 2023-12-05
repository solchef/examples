import { addMiddleware } from '@trigger.dev/hono';
import { TriggerClient, invokeTrigger } from '@trigger.dev/sdk';
import { OpenAI } from '@trigger.dev/openai';
import { Hono } from 'hono';

type Bindings = {
	TRIGGER_API_KEY: string;
	TRIGGER_API_URL: string;
	OPENAI_API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

addMiddleware(app, (env) => {
	const openai = new OpenAI({
		id: 'openai',
		apiKey: env.OPENAI_API_KEY,
	});

	const client = new TriggerClient({
		id: 'worker-client',
		apiKey: env.TRIGGER_API_KEY,
		apiUrl: env.TRIGGER_API_URL,
	});

	client.defineJob({
		id: 'openai-completion',
		name: 'OpenAI Completion',
		version: '1.0.0',
		trigger: invokeTrigger(),
		integrations: { openai },
		run: async (payload, io, ctx) => {
			await io.openai.chat.completions.create('completion', {
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'user',
						content: "Write a really funny joke but it's only funny to robots, not humans.",
					},
				],
			});
		},
	});

	return client;
});

export default app;
