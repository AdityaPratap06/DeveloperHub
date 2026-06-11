"use client";

import Link from "next/link";
import { Wrench } from "lucide-react";
import { SITE_NAME } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { ToolSearch } from "./tool-search";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold">
          <Wrench className="h-5 w-5" />
          <span className="hidden sm:inline">{SITE_NAME}</span>
        </Link>

        <div className="flex-1 max-w-md mx-auto">
          <ToolSearch placeholder="Search tools..." />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
