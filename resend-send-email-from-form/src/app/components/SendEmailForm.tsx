"use client";

import { useState } from "react";
import { sendEmail } from "../_actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SendEmailForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const router = useRouter();
  const handleRefresh = () => {
    router.refresh();
  };

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

    //send the event to trigger the email.
    //You can use the returned event with the @trigger.dev/react package if you want more detailed Job progress in your UI
    const event = await sendEmail(to, subject, name, text, from);
    setIsSubmitted(true);
  }

  return (
    <form
      action={action}
      className="flex flex-col gap-y-4 sm:w-96 pb-4 px-4 sm:px-0"
    >
      <input
        type="text"
        name="to"
        placeholder="Enter a 'to' email address"
        className="text-slate-800 rounded p-1.5"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        name="subject"
        placeholder="Enter a subject"
        className="text-slate-800 rounded p-1.5"
      />
      <input
        type="text"
        name="name"
        placeholder="Enter the name of the recipient"
        className="text-slate-800 rounded p-1.5"
      />
      <textarea
        name="text"
        placeholder="Enter email text"
        className="text-slate-800 rounded p-1.5"
      />
      <input
        type="text"
        name="from"
        placeholder="Enter a 'from' email address"
        className="text-slate-800 rounded p-1.5"
        onChange={(e) => setFrom(e.target.value)}
      />
      <p className="text-sm text-gray-500">
        ⚠️ The &quot;from&quot; email address must be a verified domain in your
        Resend account to work.
      </p>
      {!isSubmitted ? (
        <button
          type="submit"
          disabled={!isValidEmail(to) || !isValidEmail(from)}
          className="w-full rounded transition bg-indigo-600 hover:bg-indigo-500 h-10 font-bold mt-2 disabled:opacity-20"
        >
          ✉️ Send email
        </button>
      ) : (
        <p>
          ✅ Email sent! -{" "}
          <button
            onClick={handleRefresh}
            className="underline underline-offset-2 hover:text-slate-100 transition text-slate-300"
          >
            Send another
          </button>
        </p>
      )}
    </form>
  );
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default SendEmailForm;
