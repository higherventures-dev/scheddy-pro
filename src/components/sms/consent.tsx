// components/Consent.tsx
'use client';
import { useState } from 'react';

export default function Consent({ phoneE164 }: { phoneE164: string }) {
  const [checked, setChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  async function submit() {
    setSubmitting(true);
    await fetch('/api/sms/consent', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ phoneE164, consent: checked, sourcePath: window.location.pathname })
    });
    setSubmitting(false);
  }
  return (
    <div className="space-y-2">
      <label className="flex items-start gap-2">
        <input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)} />
        <span>
          By checking this box, you agree to receive SMS messages from Scheddy regarding appointments, booking confirmations, reminders, account updates, and related customer care notifications. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Consent is not a condition of purchase.
          <br/>View our <a href="https://www.scheddy.us/terms" className="underline">Terms of Service</a> · <a href="/https://www.scheddy.us/privacy" className="underline">Privacy</a> · <a href="/https://www.scheddy.us/sms" className="underline">SMS Terms & Conditions</a>
        </span>
      </label>
      <button className="btn" disabled={!checked || submitting} onClick={submit}>
        Save SMS Preferences
      </button>
      <p className="text-sm text-gray-500">Frequency: up to 8 msgs/month depending on activity.</p>
    </div>
  );
}
