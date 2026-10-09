import type { Metadata } from "next";
import HistoryList from "@/components/app/HistoryList";

export const metadata: Metadata = {
  title: "History",
  description: "Every prompt you have generated.",
};

export default function HistoryPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          History
        </h1>
        <p className="mt-1.5 text-sm text-muted">
          Prompts you have generated, newest first. Copy one again or take it
          back to the generator.
        </p>
      </div>
      <HistoryList />
    </div>
  );
}
