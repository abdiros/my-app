import Card from "@/components/ui/Card";

export default function AppLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <div className="mb-6 space-y-3">
        <div className="h-7 w-48 animate-pulse rounded bg-raised" />
        <div className="h-4 w-80 animate-pulse rounded bg-raised" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="h-64 animate-pulse" />
        <Card className="h-64 animate-pulse" />
      </div>
    </div>
  );
}
