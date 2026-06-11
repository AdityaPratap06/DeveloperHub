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
}

export function ToolSearch({
  className,
  placeholder = "Search tools...",
  onSelect,
  onQueryChange,
  autoFocus,
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

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            onQueryChange?.(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="pl-9 pr-9"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border bg-popover shadow-lg">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No tools found.</p>
          ) : (
            <ul className="max-h-64 overflow-auto py-1">
              {results.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                      onSelect?.();
                    }}
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-accent"
                  >
                    <tool.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
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
