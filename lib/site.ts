/**
 * Single source of truth for the product name and site-wide link data.
 * Every surface (header, footer, metadata, legal pages) reads from here, so
 * renaming the product is a one-line edit.
 */

export const SITE_NAME = "your-Saas-name";

/** Canonical origin, used for metadata and sitemap/robots. Placeholder for now. */
export const SITE_URL = "https://your-saas-name.example";

export const SITE_TAGLINE = "Turn any image into a ready-to-paste art prompt.";

export const SITE_DESCRIPTION =
  "Upload an image and get a detailed Midjourney, Stable Diffusion or DALL·E prompt that recreates it. Describe the style, palette, mood and lighting in one pass.";

export type NavLink = { href: string; label: string };

/** Primary navigation, shown in the marketing header. */
export const NAV_LINKS: NavLink[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** In-app navigation for the signed-in surface. */
export const APP_NAV_LINKS: NavLink[] = [
  { href: "/generator", label: "Generator" },
  { href: "/history", label: "History" },
  { href: "/dashboard", label: "Dashboard" },
];

/** Footer columns. */
export const FOOTER_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/generator", label: "Generator" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];
