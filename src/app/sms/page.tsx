export const metadata = {
  title: "Scheddy SMS Terms & Conditions",
  description: "Scheddy SMS program details, opt-in/opt-out instructions, and messaging terms."
};

export default function SmsPage() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <main className="min-h-screen bg-black text-slate-200 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-50">
            SMS Terms &amp; Conditions
          </h1>
          <p className="text-slate-400">Last updated: {lastUpdated}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Program Description
          </h2>
          <p className="text-slate-400">
            Scheddy’s SMS messaging program provides transactional messages to
            users who have opted in, including appointment reminders, booking
            confirmations, scheduling updates, account notifications, and
            customer care messages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            How You Opt In
          </h2>
          <p className="text-slate-400">
            You opt in by providing your mobile phone number and checking an
            unchecked SMS consent box during sign-up and/or when booking an
            appointment on the Scheddy platform. Opting in is not a condition of
            purchase.
          </p>
          <p className="text-slate-400">
            At the point of opt-in, users are presented with a disclosure that
            includes message frequency, message and data rate information, and
            opt-out instructions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Message Frequency
          </h2>
          <p className="text-slate-400">
            Message frequency varies based on your activity, bookings, and
            account interactions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Message &amp; Data Rates
          </h2>
          <p className="text-slate-400">
            Message and data rates may apply depending on your mobile carrier
            and plan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Opt-Out Instructions
          </h2>
          <p className="text-slate-400">
            You can opt out at any time by replying <span className="text-slate-200">STOP</span> to any
            message. After you opt out, you will receive a confirmation message
            and will no longer receive SMS messages from Scheddy unless you opt
            back in.
          </p>
          <p className="text-slate-400">
            If you want to re-subscribe after opting out, reply{" "}
            <span className="text-slate-200">START</span> (or{" "}
            <span className="text-slate-200">UNSTOP</span>) to begin receiving
            messages again.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Help &amp; Support
          </h2>
          <p className="text-slate-400">
            For help, reply <span className="text-slate-200">HELP</span> to any
            message. You can also contact us at{" "}
            <a
              href="mailto:support@scheddy.us"
              className="text-slate-200 underline hover:text-white"
            >
              support@scheddy.us
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Carrier Disclaimer
          </h2>
          <p className="text-slate-400">
            Carriers are not liable for delayed or undelivered messages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Privacy
          </h2>
          <p className="text-slate-400">
            Your privacy matters. No mobile information will be shared with
            third parties or affiliates for marketing or promotional purposes.
            We may share limited information with service providers (for example,
            messaging vendors and carriers/aggregators) only as necessary to
            deliver SMS messages and operate the Service.
          </p>
          <p className="text-slate-400">
            See our full{" "}
            <a
              href="/privacy"
              className="text-slate-200 underline hover:text-white"
            >
              Privacy Policy
            </a>{" "}
            for more details on how we handle and protect your information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Terms
          </h2>
          <p className="text-slate-400">
            Your use of the Scheddy Service is also governed by our{" "}
            <a
              href="/terms"
              className="text-slate-200 underline hover:text-white"
            >
              Terms of Service
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">
            Contact
          </h2>
          <p className="text-slate-400">
            Scheddy Support<br />
            <a
              href="mailto:support@scheddy.us"
              className="text-slate-200 underline hover:text-white"
            >
              support@scheddy.us
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}