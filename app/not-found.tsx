import Link from "next/link";
import Button from "@/components/ui/Button";
import { LogoMark } from "@/components/marketing/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-24 text-center">
      <LogoMark className="h-10 w-10" />
      <p className="mt-8 font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 max-w-md text-base leading-7 text-muted">
        The link may be old, or the page may have moved. The generator is still
        where you left it.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/generator">Open the generator</Button>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
      <Link
        href="/gallery"
        className="mt-6 text-sm text-muted transition-colors hover:text-foreground"
      >
        Or browse the gallery
      </Link>
    </div>
  );
}
