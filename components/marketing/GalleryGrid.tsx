import Card from "@/components/ui/Card";
import CopyButton from "@/components/marketing/CopyButton";
import { GALLERY_ITEMS, gradientFor } from "@/lib/mock";

export default function GalleryGrid({
  items = GALLERY_ITEMS,
}: {
  items?: typeof GALLERY_ITEMS;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="flex flex-col overflow-hidden">
          <div
            className="relative h-44 w-full"
            style={{ background: gradientFor(item.palette) }}
            role="img"
            aria-label={`Placeholder swatch for ${item.niche}`}
          >
            <span className="absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              {item.niche}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="flex-1 text-sm leading-6 text-foreground/90">
              {item.prompt}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted">{item.author}</span>
              <CopyButton value={item.prompt} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
