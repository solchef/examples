# Resend example jobs

This folder contains example jobs using Trigger.dev and Resend. You can use these Jobs as a starting point for your own Jobs.

## **Step 1:** Create accounts

You will need to create a free account on [Trigger.dev](https://cloud.trigger.dev) and [Resend](https://resend.com) to use these examples.

## **Step 2:** Create a project and get a Trigger.dev API key

[Sign up](https://cloud.trigger.dev) to Trigger.dev, create an Organization and Project. Then get your API key from the "Environments & API Keys" page in your Project.

## **Step 3:** Run the CLI `init` command

Run the Trigger.dev CLI to add your API key to your environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4:** Get a Resend API key

[Sign up](https://resend.com/signup) to Resend and get your API key.

Add your Resend API key to your .env.local file:

```bash
RESEND_API_KEY=your-api-key
```

## **Step 5:** Install dependencies

```bash
npm install
```

## **Step 6:** Run the Next.js project

```bash
npm run dev
```

## **Step 7:** Run the CLI `dev` command

```bash
npx @trigger.dev/cli@latest dev
```
