import Link from "next/link";
import { LogoMark } from "@/components/marketing/Logo";
import { SITE_NAME } from "@/lib/site";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]"
      />
      <div className="relative flex flex-1 w-full max-w-md flex-col items-center justify-center">
        <Link
          href="/"
          className="mb-8 inline-flex flex-col items-center gap-3 text-foreground"
        >
          <LogoMark className="h-10 w-10" />
          <span className="text-lg font-semibold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
}
