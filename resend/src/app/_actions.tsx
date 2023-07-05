"use server";

import { client } from "@/trigger";

export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  from: string
) {
  await client.sendEvent({
    name: "send.email",
    payload: {
      to,
      subject,
      text,
      from,
    },
  });
}
