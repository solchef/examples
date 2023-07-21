# GitHub issue reminder Job

This folder contains a Job that subscribes to new GitHub issues and if the issues haven't been dealt with after 24 hours a Slack reminder is sent and they're assigned to someone. It uses [Trigger.dev](https://trigger.dev) with the [GitHub](https://trigger.dev/docs/integrations/apis/github) and [Slack](https://trigger.dev/docs/integrations/apis/slack) integrations.

## Video walkthrough

There is a YouTube walkthrough:

[![YouTube Video walkthrough](https://img.youtube.com/vi/uocBQt2HeQo/0.jpg)](https://www.youtube.com/watch?v=uocBQt2HeQo)

The Job is located in `jobs/githubIssue.ts`.

## **Step 1:** Create an account for Trigger.dev

Create accounts for [Trigger.dev](https://trigger.dev) before moving to the next step.

## **Step 2:** Set up your Project

Create or select an Organization and Project in the Trigger.dev app. Then copy your API key from the "Environments & API Keys" page in your Project.

## **Step 3:** Run the CLI `init` command

In a new terminal window, run the Trigger.dev CLI and add your API key to your Trigger.dev environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4:** Add your GitHub access token to the env.local file

Go to your GitHub profile, select 'Settings', then 'Developer settings', then 'Personal access tokens'.

Create a new fine-grained token with the following permissions:

- **Repository permissions:** Read and Write access to repository hooks, Read access to repository metadata
- **Organization permissions:** Read and Write access to organization hooks

Then add your token to the bottom of the `.env.local` file:

```bash
GITHUB_TOKEN=your-token-here
```

## **Step 5:** Set up your Slack OAuth using the Trigger.dev Slack integration

Navigate to the 'Integrations' tab inside your project in the [Trigger.dev app](https://trigger.dev).

Select the Slack integration and follow the instructions to set up your Slack OAuth. Make sure to call your Slack OAuth ID `slack` so that it matches the ID in your `jobs/githubIssue.ts` file.

_NB: The default selected scopes will work for these examples._

## **Step 6:** Install the dependencies

```bash
npm install
```

## **Step 7:** Run the Next.js project

Run the Next.js project:

```bash
npm run dev
```

## **Step 8:** Run the CLI `dev` command

With the Next.js project still running, open another terminal window and run the Trigger.dev CLI `dev` command:

```bash
npx @trigger.dev/cli@latest dev
```

## **Step 9:** Test the Job

### **Job onIssueOpened:**

This Job will run when a new issue is added in the `triggerdotdev/empty` repo.

To test this Job, create an issue in the [triggerdotdev/empty](https://github.com/triggerdotdev/empty) repository. An assignee is added when the Job has run successfully.

---

You can learn more about [testing](https://trigger.dev/docs/documentation/guides/testing-jobs), [viewing runs](https://trigger.dev/docs/documentation/guides/viewing-runs), and much more in our [docs](https://trigger.dev/docs).
