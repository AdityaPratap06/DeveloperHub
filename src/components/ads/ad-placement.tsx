"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";

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

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export function AdPlacement({ type, className }: AdPlacementProps) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  if (!ADS_ENABLED) return null;

  return (
    <div className={cn(placementStyles[type], className)}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={
          type === "hero"
            ? "1111111111"
            : type === "sidebar"
              ? "2222222222"
              : type === "content"
                ? "3333333333"
                : "4444444444"
        }
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}