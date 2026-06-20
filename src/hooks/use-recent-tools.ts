"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "devtoolskit-recent-tools";
const MAX_RECENT = 6;

export function useRecentTools() {
  const [recentIds, setRecentIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecentIds(JSON.parse(stored) as string[]);
      }
    } catch {
      setRecentIds([]);
    }
  }, []);

  const addRecent = useCallback((toolId: string) => {
    setRecentIds((prev) => {
      const updated = [toolId, ...prev.filter((id) => id !== toolId)].slice(0, MAX_RECENT);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  }, []);

  return { recentIds, addRecent };
}
