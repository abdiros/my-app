import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/marketing/Logo";
import { FOOTER_GROUPS, SITE_NAME } from "@/lib/site";

// Evaluated once at build time; computing it during render is an unstable
// value under cacheComponents.
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Describe any image well enough to recreate it — in the prompt
              formats your tools already understand.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-medium text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <p>Built with Next.js. Prompts are yours to keep.</p>
        </div>
      </Container>
    </footer>
  );
}
