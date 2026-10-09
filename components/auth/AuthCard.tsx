import Link from "next/link";
import Card from "@/components/ui/Card";
import type { ReactNode } from "react";

export default function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <Card className="w-full max-w-md bg-surface/80 p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-2 text-sm leading-6 text-muted">{subtitle}</p>
      <div className="mt-8">{children}</div>
      <p className="mt-6 text-center text-sm text-muted">{footer}</p>
      <p className="mt-6 border-t border-border pt-6 text-center text-xs text-muted">
        <Link href="/" className="hover:text-foreground">
          ← Back to home
        </Link>
      </p>
    </Card>
  );
}
