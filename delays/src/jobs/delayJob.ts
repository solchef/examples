import { client } from "@/trigger";
import { eventTrigger } from "@trigger.dev/sdk";

// delayJob
// this Job will be triggered by an event, and will wait 5 minutes before logging a reply
client.defineJob({
  id: "interval-scheduled-job-prod-test",
  name: "Scheduled job 10 every minutes",
  version: "0.1.1",
  enabled: false,
  trigger: eventTrigger({
    name: "example.event",
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info("Delay Job started");

    // the second parameter is the number of seconds to wait, you can add delays of up to a year
    await io.wait("Wait 5 minutes", 5 * 60);

    await io.logger.info("Delay Job complete!");
  },
});
