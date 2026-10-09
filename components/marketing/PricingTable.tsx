import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { TIERS } from "@/lib/pricing";

export default function PricingTable() {
  return (
    <div>
      <p className="mb-8 text-sm text-muted">
        Annual billing saves roughly 20%. Switch or cancel at any time.
      </p>
      <div className="grid items-start gap-5 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <Card
            key={tier.name}
            className={`relative flex h-full flex-col p-6 ${
              tier.highlight ? "border-brand/60 bg-raised" : ""
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-xs font-medium text-brand-foreground">
                Most popular
              </span>
            )}
            <h3 className="text-base font-medium text-foreground">
              {tier.name}
            </h3>
            <p className="mt-2 min-h-10 text-sm leading-6 text-muted">
              {tier.blurb}
            </p>
            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                ${tier.price.monthly}
              </span>
              <span className="text-sm text-muted">/ month</span>
            </p>
            <p className="mt-1 text-xs text-muted">
              {tier.price.annual > 0
                ? `or $${tier.price.annual}/mo billed annually`
                : "Free forever"}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-muted">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href="/sign-up"
              variant={tier.highlight ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {tier.cta}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
