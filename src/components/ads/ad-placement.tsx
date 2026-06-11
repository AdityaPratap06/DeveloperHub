import { cn } from "@/lib/utils";

export type AdPlacementType = "hero" | "sidebar" | "content" | "footer";

interface AdPlacementProps {
  type: AdPlacementType;
  className?: string;
}

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

const placementStyles: Record<AdPlacementType, string> = {
  hero: "w-full max-w-4xl mx-auto h-[90px] my-6",
  sidebar: "w-full h-[250px] sticky top-24",
  content: "w-full max-w-3xl mx-auto h-[90px] my-8",
  footer: "w-full max-w-5xl mx-auto h-[90px] mt-8",
};

const placementLabels: Record<AdPlacementType, string> = {
  hero: "Advertisement — Below Hero",
  sidebar: "Advertisement — Sidebar",
  content: "Advertisement — Between Content",
  footer: "Advertisement — Footer",
};

export function AdPlacement({ type, className }: AdPlacementProps) {
  if (!ADS_ENABLED) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 text-xs text-muted-foreground",
        placementStyles[type],
        className
      )}
      data-ad-placement={type}
      aria-label={placementLabels[type]}
    >
      {placementLabels[type]}
    </div>
  );
}
