export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold text-slate-50">Privacy Policy</h1>

        <p className="text-slate-400">
          At Scheddy, we take your privacy seriously. This Privacy Policy
          explains what information we collect, how we use it, and the choices
          you have regarding your information when you use our website and
          application (collectively, the &quot;Service&quot;).
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Information We Collect
        </h2>
        <p className="text-slate-400">
          We may collect information you provide directly to us, such as your
          name, email address, mobile phone number, and account details. We may
          also collect usage and device information when you interact with the
          Service (for example, pages viewed and features used).
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          How We Use Your Information
        </h2>
        <p className="text-slate-400">
          We use your information to provide and improve Scheddy, including to
          deliver booking tools, appointment confirmations and reminders, account
          notifications, customer support, and communications you choose to
          receive.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          SMS & Mobile Messaging
        </h2>
        <p className="text-slate-400">
          If you provide your mobile number and opt in, Scheddy may send you SMS
          messages related to appointments, booking confirmations, reminders,
          account updates, and customer care. Message frequency varies. Message
          and data rates may apply. You can opt out at any time by replying STOP
          to any message. For help, reply HELP or contact{" "}
          <span className="text-slate-200">support@scheddy.us</span>.
        </p>
        <p className="text-slate-400">
          <span className="text-slate-200">No mobile information</span> will be
          shared with third parties or affiliates for{" "}
          <span className="text-slate-200">marketing or promotional</span>{" "}
          purposes. We may share limited information with service providers (for
          example, messaging vendors and carriers/aggregators) only as necessary
          to deliver SMS messages and operate the Service.
        </p>
        <p className="text-slate-400">
          For more details, please review our{" "}
          <a
            href="/sms-terms"
            className="text-slate-200 underline hover:text-white"
          >
            SMS Terms &amp; Conditions
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          How We Protect Data
        </h2>
        <p className="text-slate-400">
          We use reasonable administrative, technical, and physical safeguards
          designed to protect your information, including encryption and access
          controls where appropriate. However, no method of transmission or
          storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">
          Sharing of Information
        </h2>
        <p className="text-slate-400">
          We do not sell your personal information. We may share information with
          trusted service providers who help us operate Scheddy (for example,
          hosting, analytics, customer support, and messaging delivery). These
          providers are permitted to use your information only to perform
          services on our behalf.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Your Choices</h2>
        <p className="text-slate-400">
          You may opt out of SMS messages at any time by replying STOP. You may
          also contact us to request access to, correction of, or deletion of
          certain information, subject to applicable law and legitimate business
          needs.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Contact Us</h2>
        <p className="text-slate-400">
          If you have questions about this Privacy Policy, email us at{" "}
          <span className="text-slate-200">support@scheddy.us</span>.
        </p>
      </div>
    </div>
  );
}