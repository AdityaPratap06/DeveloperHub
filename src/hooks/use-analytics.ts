"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function useAnalytics() {
  const trackEvent = useCallback(
    (eventName: string, params?: Record<string, string | number | boolean>) => {
      if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;

      if (window.gtag) {
        window.gtag("event", eventName, params);
      }
    },
    []
  );

  const trackPageView = useCallback((url: string) => {
    if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;

    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
    }
  }, []);

  const trackToolUsage = useCallback(
    (toolId: string, action: string) => {
      trackEvent("tool_usage", { tool_id: toolId, action });
    },
    [trackEvent]
  );

  return { trackEvent, trackPageView, trackToolUsage, isEnabled: !!GA_MEASUREMENT_ID };
}
