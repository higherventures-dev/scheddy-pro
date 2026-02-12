import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import SmsConsentInline from "@/components/sms/consentinline";
import { PasswordInput } from "@/components/ui/password-input";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 py-36">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <br />
      <br />
      <form
        id="signup-form"
        noValidate
        className="
          flex flex-col min-w-64 border border-bg-[#1c1c1c] rounded-xl p-8 w-full max-w-md mx-auto shadow text-xs
          bg-black
          [&_label]:text-xs
          [&_input]:bg-[#1C1C1C]
          [&_input]:text-sm
          [&_input::placeholder]:text-xs
          [&_input]:text-white
          [&_input::placeholder]:text-white/60
          [&_input]:border-0
          [&_input]:ring-0
          [&_input]:focus-visible:ring-2
          [&_input]:focus-visible:ring-primary/40
          [&_input]:rounded-lg
          [&_input]:px-2.5
          [&_input]:py-1
        "
      >
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/assets/images/logo.svg"
            alt="Scheddy logo"
            width={56}
            height={56}
            priority
            className="h-7 w-7"
          />
          <h1 className="text-xl font-medium text-white">scheddy</h1>
        </div>

        <h4 className="text-[11px] text-center text-white/80 mt-1">
          Create your account below.
        </h4>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex gap-3">
            <div className="w-1/2 space-y-1">
              <Label htmlFor="firstname" className="text-white/90">
                First Name
              </Label>
              <Input id="firstname" name="firstname" required aria-describedby="firstname-error" />
              <p id="firstname-error" className="text-[11px] text-red-400 mt-1 hidden" />
            </div>

            <div className="w-1/2 space-y-1">
              <Label htmlFor="lastname" className="text-white/90">
                Last Name
              </Label>
              <Input id="lastname" name="lastname" required aria-describedby="lastname-error" />
              <p id="lastname-error" className="text-[11px] text-red-400 mt-1 hidden" />
            </div>
          </div>

          <div className="w-full space-y-1">
            <Label htmlFor="phone" className="text-white/90">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(xxx) xxx-xxxx"
              required
              aria-describedby="phone-error"
            />
            <input id="phone_e164" name="phone_e164" type="hidden" />
            <p id="phone-error" className="text-[11px] text-red-400 mt-1 hidden" />
          </div>

          <div className="w-full space-y-1">
            <Label htmlFor="email" className="text-white/90">
              Email
            </Label>
            <Input id="email" name="email" type="email" required aria-describedby="email-error" />
            <p id="email-error" className="text-[11px] text-red-400 mt-1 hidden" />
          </div>

          <div className="w-full space-y-1">
            <Label htmlFor="password" className="text-white/90">
              Password
            </Label>
            <PasswordInput
              id="password"
              name="password"
              minLength={6}
              required
              aria-describedby="password-error"
            />
            <p id="password-error" className="text-[11px] text-red-400 mt-1 hidden" />
          </div>

          <SmsConsentInline />

          <SubmitButton
            formAction={signUpAction}
            pendingText="Signing up..."
            className="mt-3 !h-10 w-1/2 mx-auto"
          >
            Sign up
          </SubmitButton>

          <p className="text-xs text-center text-white/80">
            Already have an account?{" "}
            <Link className="text-primary font-medium underline" href="/auth/sign-in">
              Sign in
            </Link>
          </p>

          {/* <FormMessage message={searchParams} /> */}
        </div>
      </form>

      <SmtpMessage />

      <script
        dangerouslySetInnerHTML={{
          __html: `
(() => {
  const $ = (id) => document.getElementById(id);
  const form = $('signup-form');
  if (!form) return;

  const first = $('firstname');
  const last = $('lastname');
  const email = $('email');
  const pass = $('password');
  const phone = $('phone');
  const phoneE = $('phone_e164');

  const err = {
    firstname: $('firstname-error'),
    lastname: $('lastname-error'),
    email: $('email-error'),
    password: $('password-error'),
    phone: $('phone-error'),
  };

  const show = (el, msg) => {
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('hidden', !msg);
  };

  const onlyDigits = (s) => (s || '').replace(/\\D/g, '');
  const syncPhone = () => {
    const d = onlyDigits(phone.value).slice(0, 10);
    phone.value =
      d.length < 4
        ? d
        : d.length < 7
        ? '(' + d.slice(0, 3) + ') ' + d.slice(3)
        : '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
    phoneE.value = d.length === 10 ? '+1' + d : '';
  };

  phone.addEventListener('input', syncPhone);
  syncPhone();

  const validate = () => {
    let ok = true;

    show(err.firstname, '');
    show(err.lastname, '');
    show(err.email, '');
    show(err.password, '');
    show(err.phone, '');

    if (!first.value.trim()) {
      show(err.firstname, 'Required');
      ok = false;
    }

    if (!last.value.trim()) {
      show(err.lastname, 'Required');
      ok = false;
    }

    if (!email.checkValidity()) {
      show(err.email, 'Invalid email');
      ok = false;
    }

    if (pass.value.length < 6) {
      show(err.password, 'Min 6 characters');
      ok = false;
    }

    if (!/^\\+1\\d{10}$/.test(phoneE.value)) {
      show(err.phone, 'Invalid phone - Must be in the format (xxx) xxx-xxxx');
      ok = false;
    }

    return ok;
  };

  form.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.preventDefault();
        e.stopPropagation();
        if (validate()) form.requestSubmit();
      }
    },
    true
  );

  form.addEventListener(
    'submit',
    (e) => {
      if (!validate()) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    true
  );
})();
          `,
        }}
      />
    </>
  );
}
