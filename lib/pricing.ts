export type Tier = {
  name: string;
  price: { monthly: number; annual: number };
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

/** Plan data for the pricing page. Prices are placeholders, billed per seat. */
export const TIERS: Tier[] = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    blurb: "For trying the generator on a handful of images.",
    features: [
      "10 generations per month",
      "JPG, PNG and WebP up to 5MB",
      "Copy-ready prompt output",
      "Community gallery access",
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: { monthly: 19, annual: 15 },
    blurb: "For working artists and prompt engineers.",
    features: [
      "1,000 generations per month",
      "Style presets and custom directives",
      "Full generation history",
      "Priority model queue",
      "Export to Midjourney and SD formats",
    ],
    cta: "Choose Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: { monthly: 49, annual: 39 },
    blurb: "For studios producing prompts together.",
    features: [
      "Unlimited generations",
      "Shared team history and presets",
      "Role-based access",
      "Usage analytics",
      "Email support",
    ],
    cta: "Choose Team",
  },
];

/** Short answers surfaced under the pricing table. */
export const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "Can I switch plans later?",
    a: "Yes. Upgrades take effect immediately and downgrades apply at the end of your current billing period.",
  },
  {
    q: "What happens when I run out of generations?",
    a: "Generation stops until the next cycle or you upgrade. Your history and presets stay available.",
  },
  {
    q: "Do you store the images I upload?",
    a: "Images are processed to produce a prompt and are not kept after the request completes.",
  },
];
