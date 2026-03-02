'use client';

import { useEffect, useId, useState } from 'react';

type Props = {
  consentCheckboxName?: string;     // default: "sms_opt_in"
  termsHref?: string;               // default: "/terms"
  privacyHref?: string;             // default: "/privacy"
};

export default function SmsConsentInline({
  consentCheckboxName = 'sms_opt_in',
  termsHref = '/terms',
  privacyHref = '/privacy'
}: Props) {
  const consentId = useId();
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);


  return (
    <div className="space-y-2 mt-4">
      <label htmlFor={consentId} className="flex items-start gap-2 text-sm">
        <input
          id={consentId}
          name={consentCheckboxName}
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-1"
        />
        <span className="text-xs">
             By checking this box, you agree to receive SMS messages from Scheddy regarding appointments, booking confirmations, reminders, account updates, and related customer care notifications. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Consent is not a condition of purchase.
          <br/>View our <a href="https://www.scheddy.us/terms" className="underline">Terms of Service</a> · <a href="/https://www.scheddy.us/privacy" className="underline">Privacy</a> · <a href="/https://www.scheddy.us/sms" className="underline">SMS Terms & Conditions</a>

        </span>
      </label>
    
      <input type="hidden" name={`${consentCheckboxName}_boolean`} value={checked ? 'true' : 'false'} />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
