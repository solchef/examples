# Slack example Jobs

This folder contains example Jobs using [Trigger.dev](https://trigger.dev) and [Slack](https://Slack.com). You can use these Jobs as a starting point for creating your own Jobs.

The Jobs are located in `src/app/trigger` and include:

- Job 1: This job sends a basic message to a Slack channel.

## **Step 1:** Create accounts for Trigger.dev and Slack

Create accounts for [Trigger.dev](https://trigger.dev) and [Slack](https://Slack.com) before moving to the next step.

## **Step 2:** Setup your Project

Create or select an Organization and Project in the Trigger.dev app. Then copy your API key from the "Environments & API Keys" page in your Project.

## **Step 3:** Run the CLI `init` command

In a new terminal window, run the Trigger.dev CLI and add your API key to your Trigger.dev environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4:** Set up your Slack OAuth using the Trigger.dev Slack integration

Navigate to the 'Integrations' tab inside your project in the [Trigger.dev app](https://trigger.dev).

Select the Slack integration and follow the instructions to set up your Slack OAuth. Make sure to call your Slack OAuth ID `slack` so that it matches the ID in your `src/app/api/trigger/route.ts` file.

_NB: The default selected scopes will work for these examples._

## **Step 5:** Install the dependencies

```bash
npm install
```

## **Step 6:** Run the Next.js project

Run the Next.js project:

```bash
npm run dev
```

## **Step 7:** Run the CLI `dev` command

With the Next.js project running, open another terminal window and run the Trigger.dev CLI `dev` command:

```bash
npx @trigger.dev/cli@latest dev
```

## **Step 8:** Test the Jobs

### Job 1:

This job sends a basic message to a Slack channel.

You can test this job using the Trigger.dev [test feature](https://trigger.dev/docs/documentation/guides/testing-jobs). That can be found on the Slack Job page in the [Trigger.dev app](https://trigger.dev).

The schema you need to use for the test is:

```ts
...

{
 channel: z.string(),
 text: z.string(),
}

...
```

To test this Job you need to enter a 'channel', which is a channel ID (which can be found at the bottom of the 'about' section of any Slack channel), and a message - 'text'. Replace the values below with your own:

```json
...

{
 "channel": "Your_Channel_ID_Here",
 "text": "Your message here"
}

...
```

When you run the test, you should see your message appear in your Slack channel!

---

You can learn more about [testing](https://trigger.dev/docs/documentation/guides/testing-jobs), [viewing runs](https://trigger.dev/docs/documentation/guides/viewing-runs), and much more in our [docs](https://trigger.dev/docs).
