"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchTools } from "@/lib/tools";
import { cn } from "@/lib/utils";

interface ToolSearchProps {
  className?: string;
  placeholder?: string;
  onSelect?: () => void;
  onQueryChange?: (query: string) => void;
  autoFocus?: boolean;
  variant?: "default" | "hero";
}

export function ToolSearch({
  className,
  placeholder = "Search tools...",
  onSelect,
  onQueryChange,
  autoFocus,
  variant = "default",
}: ToolSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const results = searchTools(query);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHero = variant === "hero";

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Search
          className={cn(
            "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
            isHero && "h-5 w-5 text-primary/60"
          )}
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            onQueryChange?.(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className={cn(
            "pl-10 pr-10",
            isHero && "h-14 rounded-2xl border-primary/20 bg-background/80 pl-12 text-base shadow-lg shadow-primary/5 backdrop-blur-sm focus-visible:shadow-glow-sm"
          )}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              onQueryChange?.("");
              setOpen(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border bg-popover/95 shadow-xl backdrop-blur-xl">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No tools found.</p>
          ) : (
            <ul className="max-h-72 overflow-auto py-1.5">
              {results.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                      onQueryChange?.("");
                      onSelect?.();
                    }}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-accent/80 transition-colors"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <tool.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-medium">{tool.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
