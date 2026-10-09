"use client";

import { useState, type FormEvent } from "react";

type Errors = { name?: string; email?: string; message?: string };

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Tell us your name.";
    if (!email) next.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That doesn't look like an email address.";
    if (!message) next.message = "Add a short message.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brand/40 bg-raised p-8 text-center"
      >
        <h2 className="text-lg font-medium text-foreground">
          Message received
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Thanks — we reply to messages within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Name" error={errors.name} htmlFor="name">
        <input id="name" name="name" className={inputClass} />
      </Field>
      <Field label="Email" error={errors.email} htmlFor="email">
        <input id="email" name="email" type="email" className={inputClass} />
      </Field>
      <Field label="Message" error={errors.message} htmlFor="message">
        <textarea id="message" name="message" rows={5} className={inputClass} />
      </Field>
      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-brand to-brand-2 px-6 text-sm font-medium text-brand-foreground transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
