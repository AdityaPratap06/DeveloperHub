"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type AdPlacementType = "hero" | "sidebar" | "content" | "footer";

interface AdPlacementProps {
  type: AdPlacementType;
  className?: string;
}

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

const placementStyles: Record<AdPlacementType, string> = {
  hero: "w-full max-w-4xl mx-auto min-h-[90px] my-6",
  sidebar: "w-full min-h-[250px] sticky top-24",
  content: "w-full max-w-3xl mx-auto min-h-[90px] my-8",
  footer: "w-full max-w-5xl mx-auto min-h-[90px] mt-8",
};

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export function AdPlacement({
  type,
  className,
}: AdPlacementProps) {
  const adRef = useRef<HTMLModElement>(null);

  const [adLoaded, setAdLoaded] = useState(false);
  const [adUnfilled, setAdUnfilled] = useState(false);

  useEffect(() => {
    if (!ADS_ENABLED) return;

    let observer: MutationObserver | null = null;

    const loadAd = () => {
      const adElement = adRef.current;

      if (!adElement) {
        requestAnimationFrame(loadAd);
        return;
      }

      // Wait until element has width
      if (adElement.offsetWidth === 0) {
        requestAnimationFrame(loadAd);
        return;
      }

      try {
        // Prevent duplicate pushes
        if (
          !adElement.getAttribute(
            "data-adsbygoogle-status"
          )
        ) {
          window.adsbygoogle =
            window.adsbygoogle || [];

          window.adsbygoogle.push({});
        }

        observer = new MutationObserver(() => {
          const status =
            adElement.getAttribute("data-ad-status");

          if (status === "filled") {
            setAdLoaded(true);
            setAdUnfilled(false);
          }

          if (status === "unfilled") {
            setAdLoaded(false);
            setAdUnfilled(true);
          }
        });

        observer.observe(adElement, {
          attributes: true,
          attributeFilter: ["data-ad-status"],
        });
      } catch (error) {
        console.error("AdSense Error:", error);
      }
    };

    loadAd();

    return () => {
      observer?.disconnect();
    };
  }, []);

  if (!ADS_ENABLED) return null;

  // Hide completely if AdSense returned no ad
  if (adUnfilled) return null;

  const adSlotMap = {
    hero: "1111111111",
    sidebar: "2222222222",
    content: "3333333333",
    footer: "4444444444",
  };

  return (
    <div
      className={cn(
        placementStyles[type],
        className
      )}
      style={{
        visibility: adLoaded ? "visible" : "hidden",
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
        }}
        data-ad-client="ca-pub-1025324546614550"
        data-ad-slot={adSlotMap[type]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}