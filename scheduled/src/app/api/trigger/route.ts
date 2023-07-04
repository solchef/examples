import { createAppRoute } from "@trigger.dev/nextjs";
import {
  Job,
  TriggerClient,
  cronTrigger,
  intervalTrigger,
} from "@trigger.dev/sdk";

//used to send data to Trigger.dev and register jobs
export const client = new TriggerClient({
  id: "scheduled",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

//Interval
// This job will run every 60 seconds, starting 60 seconds after this Job is first indexed.
// Note that it does not run at the top of every minute, but rather 60 seconds after the Job is first indexed.

new Job(client, {
  id: "interval-scheduled-job-1",
  name: "Interval scheduled Job 1",
  version: "0.1.1",
  trigger: intervalTrigger({
    seconds: 60,
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("Received the scheduled event", {
      payload,
    });

    return { foo: "bar" };
  },
});

//Using CRON syntax
// If you want a Job to run at a specific time or on a specific day of the week, you can use a CRON expression.
new Job(client, {
  id: "cron-scheduled-job-1",
  name: "CRON Scheduled Job-1",
  version: "0.1.1",
  trigger: cronTrigger({
    // This job will run at 2:30pm every Monday.
    // Note that the time is in UTC.
    cron: "30 14 * * 1",
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("Received the scheduled event", {
      payload,
    });

    return { foo: "bar" };
  },
});

//this route is used to send and receive data with Trigger.dev
export const { POST, dynamic } = createAppRoute(client);
