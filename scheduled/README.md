# Scheduled example Jobs

This folder contains example scheduled Jobs using [Trigger.dev](https://trigger.dev).

The Jobs are located in `src/jobs` and include:

- interval: This Job will run every 60 seconds, starting 60 seconds after this Job is first indexed.

- cronScheduled: Using CRON syntax: this Job will run at 2:30pm every Monday.

## **Step 1:** Create and account for Trigger.dev

Create an account at [Trigger.dev](https://trigger.dev).

## **Step 2:** Set up your Project

Create or select an Organization and Project in the Trigger.dev app. Then copy your API key from the "Environments & API Keys" page in your Project.

## **Step 3:** Run the CLI `init` command

In a new terminal window, run the Trigger.dev CLI and add your API key to your Trigger.dev environment variables:

```bash
npx @trigger.dev/cli@latest init
```

## **Step 4:** Install the dependencies

```bash
npm install
```

## **Step 5:** Run the Next.js project

Run the Next.js project:

```bash
npm run dev
```

## **Step 6:** Run the CLI `dev` command

With the Next.js project running, open another terminal window and run the Trigger.dev CLI `dev` command:

```bash
npx @trigger.dev/cli@latest dev
```

## **Step 8:** Test the Jobs

Scheduled Jobs will not run in development, so to test they are connected you will need to trigger them manually.

To do this, please navigate to the [Trigger.dev](https://trigger.dev) app and select your Project. Then select the 'Jobs' tab, click into the Job you'd like to test (either `Interval scheduled Job` or `Cron scheduled Job`) and click on the 'Test' tab. To run the test, follow [these steps](https://trigger.dev/docs/documentation/guides/testing-jobs).

---

You can learn more about [testing](https://trigger.dev/docs/documentation/guides/testing-jobs), [viewing runs](https://trigger.dev/docs/documentation/guides/viewing-runs), and much more in our [docs](https://trigger.dev/docs).
