import Image from "next/image";
import { sendEmail } from "./_actions";
import SendEmailForm from "./components/SendEmailForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-2xl mb-8">Send Resend email</h1>
      <SendEmailForm />
    </main>
  );
}
