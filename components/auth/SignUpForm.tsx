"use client";

import { useState, type FormEvent } from "react";
import { AuthField, SubmitButton, inputClass } from "@/components/auth/AuthField";

type Errors = { name?: string; email?: string; password?: string };

export default function SignUpForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    const next: Errors = {};
    if (!name) next.name = "Enter a name we can greet you by.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That doesn't look like an email address.";
    if (!password) next.password = "Choose a password.";
    else if (password.length < 8)
      next.password = "Use at least 8 characters.";

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
          Account creation isn&apos;t connected yet in this preview. Head to the
          generator to try it right away.
        </p>
      )}

      <AuthField label="Name" htmlFor="name" error={errors.name}>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Ada Okonkwo"
          className={inputClass}
        />
      </AuthField>

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

      <AuthField
        label="Password"
        htmlFor="password"
        error={errors.password}
        hint="At least 8 characters."
      >
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          className={inputClass}
        />
      </AuthField>

      <SubmitButton pending={pending}>Create account</SubmitButton>
    </form>
  );
}
