import Card from "@/components/ui/Card";
import type { DashboardStat } from "@/lib/mock";

export default function StatCards({ stats }: { stats: DashboardStat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-5">
          <p className="text-sm text-muted">{stat.label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {stat.value}
          </p>
          {stat.delta && (
            <p className="mt-1 text-xs text-muted">{stat.delta}</p>
          )}
        </Card>
      ))}
    </div>
  );
}
