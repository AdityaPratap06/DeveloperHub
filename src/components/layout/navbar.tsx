"use client";

import Link from "next/link";
import { BookOpen, LayoutGrid } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ToolSearch } from "./tool-search";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Tools", icon: LayoutGrid },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 glass">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/assets/DevToolsKitLogo.webp"
            alt="DevToolsKit"
            width={100}
            height={20}
            className="dark:hidden h-4 sm:h-5 w-auto"
            priority
          />
          <Image
            src="/assets/DevToolsKitLogoLight.webp"
            alt="DevToolsKit"
            width={100}
            height={20}
            className="hidden dark:block h-4 sm:h-5 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" || pathname.startsWith("/tools") || pathname.startsWith("/categories")
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1 max-w-sm mx-auto">
          <ToolSearch placeholder="Search tools..." />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
