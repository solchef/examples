import { client } from "@/trigger";
import { intervalTrigger } from "@trigger.dev/sdk";

// interval
// This Job will run every 60 seconds, starting 60 seconds after this Job is first indexed.
// Note that it does not run at the top of every minute, but rather 60 seconds after the Job is first indexed.
client.defineJob({
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
