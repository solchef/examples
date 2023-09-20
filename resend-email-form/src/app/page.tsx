import {
  ResendLightIcon,
  TriggerDotDevLightIcon,
} from "@trigger.dev/companyicons";
import SendEmailForm from "./components/SendEmailForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20 sm:px-8 px- bg-gradient-to-b from-slate-700 to-slate-950">
      <div className="flex gap-x-4 mb-2">
        <TriggerDotDevLightIcon className="w-8 h-8" />
        <p>+</p>
        <ResendLightIcon className="w-8 h-8" />
      </div>
      <h1
        className="font-bold text-xl mb-4 text-center sm:w-96 
      p-4"
      >
        Send an email built using React with Trigger.dev and Resend
      </h1>

      <SendEmailForm />
      <p className="text-center mb-8 flex gap-x-4 text-slate-500 ">
        <a
          href="https://trigger.dev/docs/integrations/apis/resend"
          target="_blank"
          className="underline hover:text-slate-400 transition"
        >
          Trigger.dev docs
        </a>
        <a
          href="https://resend.com/docs/introduction"
          target="_blank"
          className="underline hover:text-slate-400 transition"
        >
          Resend docs
        </a>
      </p>
    </main>
  );
}
