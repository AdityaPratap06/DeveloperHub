"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ToolSearch } from "./tool-search";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Navbar() {
  const { resolvedTheme } = useTheme()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold">
          <Image src={resolvedTheme === "dark" ? "/assets/DevToolsKitLogoLight.webp" : "/assets/DevToolsKitLogo.webp"} alt="DevToolsKit" style={{ height: "20px", width: "auto" }} height={200} width={100} />
          {/* <Wrench className="h-5 w-5" />
          <span className="hidden sm:inline">{SITE_NAME}</span> */}
        </Link>

        {/* <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/blog"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Blog
          </Link>
        </nav> */}

        <div className="flex-1 max-w-md mx-auto">
          <ToolSearch placeholder="Search tools..." />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
