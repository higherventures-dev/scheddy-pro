// app/auth/sign-in/LoginClient.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { SubmitButton } from '@/components/submit-button'
import { signInAction } from '@/app/actions'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginClient({
  successMessage,
  nextPath = '/dashboard',
}: {
  errorMessage?: string
  successMessage?: string
  nextPath?: string
}) {
  const [ok] = useState(successMessage)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="shadow-lg dark:shadow-xl border dark:border-gray-700 justify-center w-full flex py-24">
      <form
        id="login-form"
        action={signInAction}
        className="flex flex-col min-w-64 max-w-64 mx-auto border rounded-xl p-10 w-full max-w-md shadow"
        style={{ backgroundColor: '#1c1c1c' }}
        noValidate
      >
        {/* Brand */}
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/assets/images/logo.svg"
            alt="Scheddy logo"
            width={28}
            height={28}
            priority
            className="h-7 w-7"
          />
          <h1 className="text-xl font-medium text-white">scheddy</h1>
        </div>

        {ok && (
          <div className="mb-4 rounded-md border border-green-300 bg-green-50 p-3 text-sm text-green-800">
            {ok}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-8">
          {/* Email */}
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
            aria-describedby="email-error"
          />
          <p id="email-error" className="text-[11px] text-red-400 mt-1 hidden" />

          {/* Password */}
          <Label htmlFor="password" className="mt-2">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              placeholder="Your password"
              required
              type={showPassword ? 'text' : 'password'}
              className="pr-10"
              aria-describedby="password-error"
            />

            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <p id="password-error" className="text-[11px] text-red-400 mt-1 hidden" />

          {/* carry next */}
          <input type="hidden" name="next" value={nextPath} />

          <Link className="text-xs text-foreground underline mt-2" href="/auth/forgot-password">
            Forgot Password?
          </Link>

          <p className="text-xs text-foreground">
            Don&apos;t have an account?{' '}
            <Link className="text-foreground font-medium underline" href="/auth/sign-up">
              Sign up
            </Link>
            <br />
            <br />
          </p>

          <SubmitButton className="mt-3 !h-10 w-1/2 mx-auto">
            Log in
          </SubmitButton>
        </div>
      </form>

      {/* Inline validation script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(() => {
  const $ = (id) => document.getElementById(id);
  const form = $('login-form');
  if (!form) return;

  const email = $('email');
  const pass = $('password');

  const err = {
    email: $('email-error'),
    password: $('password-error'),
  };

  const show = (el, msg) => {
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('hidden', !msg);
  };

  const validate = () => {
    let ok = true;

    show(err.email, '');
    show(err.password, '');

    if (!email.value.trim()) {
      show(err.email, 'Email is required');
      ok = false;
    } else if (!email.checkValidity()) {
      show(err.email, 'Invalid email address');
      ok = false;
    }

    if (!pass.value) {
      show(err.password, 'Password is required');
      ok = false;
    }

    return ok;
  };

  // Block Enter submits
  form.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.preventDefault();
        if (validate()) form.requestSubmit();
      }
    },
    true
  );

  // Block invalid submit
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
    </div>
  )
}
