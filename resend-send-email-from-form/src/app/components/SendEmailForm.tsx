"use client";

import { sendEmail } from "../_actions";

const SendEmailForm = () => {
  async function action(data: FormData) {
    const to = data.get("to");
    if (typeof to !== "string" || !to) return;
    const subject = data.get("subject");
    if (typeof subject !== "string" || !subject) return;
    const name = data.get("name");
    if (typeof name !== "string" || !name) return;
    const text = data.get("text");
    if (typeof text !== "string" || !text) return;
    const from = data.get("from");
    if (typeof from !== "string" || !from) return;

    await sendEmail(to, subject, name, text, from);
  }
  return (
    <form
      action={action}
      className="flex flex-col gap-y-4 sm:w-96 pb-4 px-4 sm:px-0"
    >
      <textarea
        rows={1}
        name="to"
        placeholder="Enter a 'to' email address"
        className="text-slate-800 rounded p-1.5"
      />
      <textarea
        rows={1}
        name="subject"
        placeholder="Enter a subject"
        className="text-slate-800 rounded p-1.5"
      />
      <textarea
        rows={1}
        name="name"
        placeholder="Enter the name of the recipient"
        className="text-slate-800 rounded p-1.5"
      />
      <textarea
        name="text"
        placeholder="Enter email text"
        className="text-slate-800 rounded p-1.5"
      />
      <textarea
        rows={1}
        name="from"
        placeholder="Enter a 'from' email address"
        className="text-slate-800 rounded p-1.5"
      />
      <p className="text-sm text-gray-500">
        ⚠️ The &quot;from&quot; email address must be a verified domain in your
        Resend account to work.
      </p>
      <button
        type="submit"
        className="w-full rounded transition bg-indigo-600 hover:bg-indigo-500 h-10 font-bold mt-2"
      >
        Send email
      </button>
    </form>
  );
};

export default SendEmailForm;
