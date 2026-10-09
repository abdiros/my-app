import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StatCards from "@/components/app/StatCards";
import { DASHBOARD_STATS, RECENT_ACTIVITY } from "@/lib/mock";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your usage, plan and recent activity.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            Your generation activity at a glance.
          </p>
        </div>
        <Button href="/generator">New prompt</Button>
      </div>

      <StatCards stats={DASHBOARD_STATS} />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card className="p-6">
          <h2 className="text-base font-medium text-foreground">
            Recent activity
          </h2>
          <ul className="mt-4 divide-y divide-border">
            {RECENT_ACTIVITY.map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between gap-4 py-3"
              >
                <span className="text-sm text-foreground/90">
                  {entry.action}
                </span>
                <span className="shrink-0 text-xs text-muted">
                  {entry.when}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex flex-col p-6">
          <h2 className="text-base font-medium text-foreground">
            Quick actions
          </h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">
            Pick up where you left off, or browse prompts the community has
            shared.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <Button href="/generator">Generate a prompt</Button>
            <Button href="/history" variant="secondary">
              Review history
            </Button>
            <Link
              href="/gallery"
              className="mt-1 text-center text-sm text-muted transition-colors hover:text-foreground"
            >
              Browse the public gallery
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
