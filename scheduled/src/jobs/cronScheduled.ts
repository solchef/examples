import { client } from "@/trigger";
import { Job, cronTrigger } from "@trigger.dev/sdk";

// cronScheduled
// If you want a Job to run at a specific time or on a specific day of the week, you can use a CRON expression.
new Job(client, {
  id: "cron-scheduled-job-1",
  name: "CRON Scheduled Job 1",
  version: "0.1.1",
  trigger: cronTrigger({
    // This Job will run at 2:30pm every Monday.
    // Minutes: 30, Hours: 14, Day of month: *, Month: *, Day of week: 1
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
