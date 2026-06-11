"use client";

import { cn } from "@/lib/utils";

interface CodeOutputProps {
  value: string;
  className?: string;
  monospace?: boolean;
}

export function CodeOutput({ value, className, monospace = true }: CodeOutputProps) {
  return (
    <pre
      className={cn(
        "min-h-[200px] w-full overflow-auto rounded-lg border bg-muted/30 p-4 text-sm",
        monospace && "font-mono",
        className
      )}
    >
      <code>{value || "Output will appear here..."}</code>
    </pre>
  );
}
