import {
  ResendLightIcon,
  SupabaseIcon,
  TriggerDotDevLightIcon,
} from "@trigger.dev/companyicons";
import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full items-center sm:pt-24 pt-16 px-4">
      <div className="max-w-xl flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <SupabaseIcon className="sm:w-12 sm:h-12 h-8 w-8" />
          <p>+</p>
          <TriggerDotDevLightIcon className="sm:w-12 sm:h-12 h-8 w-8" />
          <p>+</p>
          <ResendLightIcon className="sm:w-12 sm:h-12 h-8 w-8" />
        </div>

        <div className="flex flex-col items-center w-full gap-4">
          <h1 className="header font-bold sm:text-3xl text-lg text-center text-slate-200">
            Login with Supabase Auth, receive onboarding emails & update your
            profile
          </h1>
          <p className="text-center text-slate-400">
            Confirm your email below to login and trigger an onboarding email
            drip campaign powered by Resend. Once logged in, you can update your
            profile picture and details, which are all stored in a Supabase
            database.
          </p>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
