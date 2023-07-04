# GitHub example Jobs

This folder contains example Jobs using [Trigger.dev](https://trigger.dev) and [GitHub](https://GitHub.com). You can use these Jobs as a starting point for creating your own Jobs.

The Jobs are located in `src/app/trigger` and include:

- Job 1: This Job will run when a new issue is created on the `triggerdotdev` / `empty` repository. Once created it will then add a 'Bug' label to the issue.

- Job 2: This Job will run when a new star is added or removed from the triggerdotdev/trigger.dev repository

## **Step 1:** Create accounts for Trigger.dev and GitHub

Create accounts for [Trigger.dev](https://trigger.dev) and [GitHub](https://GitHub.com) before moving to the next step.

## **Step 2:** Setup your Project

Create an Organization and Project in the Trigger.dev app. Then copy your API key from the "Environments & API Keys" page in your Project.

## **Step 3:** Run the CLI `init` command

In a new terminal window, run the Trigger.dev CLI and add your API key to your Trigger.dev environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4:** Set up your GitHub OAuth using the Trigger.dev GitHub integration or use your own GitHub token

_Both authentication methods are used in this example._

### **Option 1:** Use the Trigger.dev GitHub integration

Navigate to the 'Integrations' tab inside your project in the [Trigger.dev app](https://trigger.dev).

Select the GitHub integration and follow the instructions to set up your GitHub OAuth. Make sure to call your GitHub OAuth ID `GitHub` so that it matches the ID in your `src/app/api/trigger/route.ts` file.

_NB: Select `repo` and `admin:repo_hook` scopes._

### **Option 2:** Use your own GitHub token

Go to your GitHub profile, select 'Settings', then 'Developer settings', then 'Personal access tokens'.

Create a new token with the following permissions:

**Repository permissions:** Read and Write access to repository hooks, Read access to repository metadata

**Organization permissions:** Read and Write access to organization hooks

Then add your token to your environment variables:

```bash
GITHUB_TOKEN=your-token-here
```

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

### **Job 1:**

This Job will run when a new issue is created on the `triggerdotdev` / `empty` repository. Once created it will then add a 'Bug' label to the issue.

To test this Job, create a new issue on the [triggerdotdev/empty](https://github.com/triggerdotdev/empty) repository.

### **Job 2:**

This Job will run when a new star is added or removed from the `triggerdotdev/trigger.dev` repo.

To test this Job, star or unstar the [triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev) repository.

---

You can learn more about [testing](https://trigger.dev/docs/documentation/guides/testing-jobs), [viewing runs](https://trigger.dev/docs/documentation/guides/viewing-runs), and much more in our [docs](https://trigger.dev/docs).
