# Resend example Jobs

This folder contains example Jobs using [Trigger.dev](https://trigger.dev) and [Resend](https://resend.com). You can use these Jobs as a starting point for creating your own Jobs.

The Jobs are located in `src/app/trigger` and include:

- Send an email to a 'to' email address with a 'subject', a 'text' field and a 'from' email address.

## **Step 1.** Create accounts for Trigger.dev and Resend

Create accounts for [Trigger.dev](https://trigger.dev) and [Resend](https://resend.com) before moving to the next step.

## **Step 2.** Setup your Project

Create an Organization and Project on Trigger.dev. Then copy your API key from the "Environments & API Keys" page in your Project.

## **Step 3.** Run the CLI `init` command

In a new termainal window, run the Trigger.dev CLI and add your API key to your environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4.** Get your Resend API key

[Sign up](https://resend.com/signup) to Resend and get your API key.

Add your Resend API key to your .env.local file:

```bash
RESEND_API_KEY=your-api-key
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

You can send an email by running the app and filling in the form. Alternatively, you can send a test email from the Trigger.dev test feature. You can Learn more about running tests from the [docs](https://trigger.dev/docs/documentation/guides/testing-jobs).
