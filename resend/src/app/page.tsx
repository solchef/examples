import Image from "next/image";
import { sendEmail } from "./_actions";
import SendEmailForm from "./components/SendEmailForm";
import { TriggerDotDevLightIcon, ResendIcon } from "@trigger.dev/companyicons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-x-4 mb-4">
        <TriggerDotDevLightIcon className="w-8 h-8" />
        <ResendIcon className="w-8 h-8" />
      </div>
      <h1 className="font-bold text-2xl mb-8">Send an email with Resend</h1>
      <SendEmailForm />
    </main>
  );
}
