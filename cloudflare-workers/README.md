# Cloudflare Workers & Hono with Trigger.dev

This example is a [Hono](https://hono.dev/) application deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) that uses [Trigger.dev](https://trigger.dev) to provide the ability to perform long-running jobs across multiple function invocations.

## Getting started

Clone this repository

```bash
git clone git@github.com:triggerdotdev/examples.git
cd examples/cloudflare-workers
```

Install the required node modules:

```bash
npm install
```

Create a `.dev.vars` file and add the following environment variables:

```
TRIGGER_API_KEY=<dev server key>
TRIGGER_API_URL="https://api.trigger.dev"
OPENAI_API_KEY=<openai API key>
```

Run the local worker server with wrangler:

```bash
npm run dev
```

This will start a local server on port `8787`.

Now, in a separate terminal window, run the Trigger.dev CLI dev command:

```bash
npm run dev:trigger
```

## Deploy

To deploy, first put the env var secrets

```bash
npx wrangler secret put TRIGGER_API_KEY # this should be your production server api key
npx wrangler secret put TRIGGER_API_URL
npx wrangler secret put OPENAI_API_KEY
```

Then run `wrangler deploy`:

```bash
npm run deploy
```

Copy the resulting url (should be something like https://trigger-cloudflare-workers.bobby1234.workers.dev) and configure your production endpoint to be `https://trigger-cloudflare-workers.bobby1234.workers.dev/api/trigger`, making sure to replace the URL with the one logged to the terminal during deployment. For more info read our [deployment docs](https://trigger.dev/docs/documentation/guides/deployment-setup)
