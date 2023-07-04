# Resend example Jobs

This folder contains example Jobs using [Trigger.dev](https://trigger.dev) and [OpenAI](https://openai.com). You can use these Jobs as a starting point for creating your own Jobs.

The Jobs are located in `src/app/trigger` and include:

- Tell me a joke
- Generate hedgehog images

## **Step 1.** Create accounts for Trigger.dev and Resend

Create accounts for [Trigger.dev](https://trigger.dev) and [OpenAI](https://openai.com) before moving to the next step.

## **Step 2.** Setup your Project

Create an Organization and Project on Trigger.dev. Then copy your API key from the "Environments & API Keys" page in your Project.

## **Step 3.** Run the CLI `init` command

In a new termainal window, run the Trigger.dev CLI and add your API key to your environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4.** Get your Resend API key

[Sign up](https://openai.com) to OpenAI and get your API key.

Add your OpenAI API key to your .env.local file:

```bash
OPENAI_API_KEY=your-api-key
```

## **Step 5.** Install the dependencies

```bash
npm install
```

## **Step 6.** Run the Next.js project

```bash
npm run dev
```

## **Step 7.** Run the CLI `dev` command

```bash
npx @trigger.dev/cli@latest dev
```

## **Step 8.** Test the Job

To test the Open AI "Tell me a joke" Job use the Test feature in the Trigger.dev dashboard and input a prompt like:

`"jokePrompt" : "Tell me a joke that's guaranteed to make me laugh."`

To use the "Generate hedgehog images" Job, simply click the "Run test" button on the Test page of the Trigger.dev dashboard. This will generate 2 URLs which you can follow to view the images.

You can Learn more about running tests from the [docs](https://trigger.dev/docs/documentation/guides/testing-jobs).
