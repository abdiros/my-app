"use client";

import { useState, type FormEvent } from "react";
import { AuthField, SubmitButton, inputClass } from "@/components/auth/AuthField";

type Errors = { email?: string; password?: string };

export default function SignInForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    const next: Errors = {};
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That doesn't look like an email address.";
    if (!password) next.password = "Enter your password.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No auth provider is wired yet — acknowledge the attempt honestly.
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setNotice(true);
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {notice && (
        <p
          role="status"
          className="rounded-lg border border-brand/40 bg-raised px-4 py-3 text-sm text-muted"
        >
          Accounts aren&apos;t connected yet in this preview. Continue to the
          generator to try it without signing in.
        </p>
      )}

      <AuthField label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </AuthField>

      <AuthField label="Password" htmlFor="password" error={errors.password}>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className={inputClass}
        />
      </AuthField>

      <div className="flex justify-end">
        <a href="#" className="text-sm text-brand hover:underline">
          Forgot password?
        </a>
      </div>

      <SubmitButton pending={pending}>Sign in</SubmitButton>
    </form>
  );
}
