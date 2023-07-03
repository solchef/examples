"use client";

import { sendEmail } from "../_actions";

const SendEmailForm = () => {
  async function action(data: FormData) {
    const to = data.get("to");
    if (typeof to !== "string" || !to) return;
    const subject = data.get("subject");
    if (typeof subject !== "string" || !subject) return;
    const text = data.get("text");
    if (typeof text !== "string" || !text) return;
    const from = data.get("from");
    if (typeof from !== "string" || !from) return;

    await sendEmail(to, subject, text, from);
  }
  return (
    <form action={action} className="flex flex-col gap-y-4 w-96">
      <textarea
        rows={1}
        name="to"
        placeholder="Enter an email address"
        className="text-black rounded p-1.5"
      />
      <textarea
        rows={1}
        name="subject"
        placeholder="Enter a subject"
        className="text-black rounded p-1.5"
      />
      <textarea
        rows={1}
        name="text"
        placeholder="Enter a message"
        className="text-black rounded p-1.5"
      />
      <textarea
        rows={1}
        name="from"
        placeholder="Enter a from address"
        className="text-black rounded p-1.5"
      />

      <button className="w-full rounded bg-indigo-500 hover:bg-indigo-600 h-8 font-bold mt-2">
        Send test email
      </button>
    </form>
  );
};

export default SendEmailForm;
