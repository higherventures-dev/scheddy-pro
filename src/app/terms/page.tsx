export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold text-slate-50">
          Terms of Service
        </h1>

        <p className="text-slate-400">
          These Terms of Service ("Terms") govern your access to and use of
          Scheddy’s website, application, and related services (collectively,
          the "Service"). By accessing or using Scheddy, you agree to be bound
          by these Terms.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Use of the Service
        </h2>
        <p className="text-slate-400">
          Scheddy provides scheduling and communication tools for artists and
          studios. You agree to use the Service only for lawful purposes and in
          compliance with all applicable local, state, and federal laws.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          User Accounts
        </h2>
        <p className="text-slate-400">
          You are responsible for maintaining the confidentiality of your login
          credentials and for all activities that occur under your account.
          You agree to notify us immediately of any unauthorized use of your
          account.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Payments & Subscriptions
        </h2>
        <p className="text-slate-400">
          Certain features of Scheddy may require payment. If you subscribe to
          a paid plan, you agree to recurring billing as disclosed at the time
          of purchase. You may cancel your subscription at any time, but fees
          already paid are non-refundable unless otherwise stated.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          SMS Communications
        </h2>
        <p className="text-slate-400">
          By providing your mobile number and opting in, you agree to receive
          SMS messages from Scheddy related to appointments, booking
          confirmations, reminders, account updates, and customer support.
          Message frequency varies. Message and data rates may apply. You may
          opt out at any time by replying STOP. For assistance, reply HELP or
          contact us at{" "}
          <span className="text-slate-200">support@scheddy.us</span>.
        </p>
        <p className="text-slate-400">
          SMS communications are governed by our separate{" "}
          <a
            href="/sms-terms"
            className="text-slate-200 underline hover:text-white"
          >
            SMS Terms & Conditions
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Privacy
        </h2>
        <p className="text-slate-400">
          Your use of the Service is also governed by our{" "}
          <a
            href="/privacy"
            className="text-slate-200 underline hover:text-white"
          >
            Privacy Policy
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Service Availability
        </h2>
        <p className="text-slate-400">
          We strive to maintain reliable service but do not guarantee that the
          Service will be uninterrupted, secure, or error-free. We may modify
          or discontinue features at any time without notice.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Limitation of Liability
        </h2>
        <p className="text-slate-400">
          To the maximum extent permitted by law, Scheddy shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of the Service.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Governing Law
        </h2>
        <p className="text-slate-400">
          These Terms shall be governed by and construed in accordance with the
          laws of the applicable jurisdiction in which Scheddy operates,
          without regard to conflict of law principles.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Contact Us
        </h2>
        <p className="text-slate-400">
          If you have any questions about these Terms, please contact us at{" "}
          <span className="text-slate-200">support@scheddy.us</span>.
        </p>
      </div>
    </div>
  );
}