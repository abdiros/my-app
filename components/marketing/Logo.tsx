import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

/**
 * The mark is an aperture: overlapping lens blades suggest "seeing an image,
 * resolving it into words". Drawn inline so it inherits the brand gradient
 * defined in globals.css.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label={`${SITE_NAME} mark`}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="var(--brand)" />
          <stop offset="1" stopColor="var(--brand-2)" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="8"
        fill="none"
        stroke="url(#logo-grad)"
        strokeWidth="2"
      />
      <path
        d="M16 7l6.5 3.75v8.5L16 23l-6.5-3.75v-8.5L16 7z"
        fill="none"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="2.6" fill="url(#logo-grad)" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-foreground ${className}`}
    >
      <LogoMark className="h-7 w-7" />
      <span className="text-[15px] font-semibold tracking-tight">
        {SITE_NAME}
      </span>
    </Link>
  );
}
