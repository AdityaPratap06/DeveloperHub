"use client";

import Link from "next/link";
import { AdPlacement } from "@/components/ads/ad-placement";
import { CATEGORY_LABELS, getFeaturedTools, type ToolCategory } from "@/lib/tools";
import Image from "next/image";

const footerLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
  { href: "/site-map", label: "Sitemap" },
];

const categories = Object.keys(CATEGORY_LABELS) as ToolCategory[];

export function Footer() {
  const featuredTools = getFeaturedTools().slice(0, 6);

  return (
    <footer className="relative border-t bg-muted/40">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <AdPlacement type="footer" />

        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/assets/DevToolsKitLogo.webp"
                alt="DevToolsKit"
                width={120}
                height={24}
                className="dark:hidden h-6 w-auto"
              />
              <Image
                src="/assets/DevToolsKitLogoLight.webp"
                alt="DevToolsKit"
                width={120}
                height={24}
                className="hidden dark:block h-6 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Free, fast, and privacy-friendly developer tools that run entirely in your browser.
              Format JSON, decode JWTs, generate UUIDs, and more — no data ever sent to a server.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/categories/${cat}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {CATEGORY_LABELS[cat]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Popular Tools</h4>
            <ul className="space-y-2.5">
              {featuredTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevToolkit. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-xs">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
            All tools run client-side — your data stays on your device
          </p>
        </div>
      </div>
    </footer>
  );
}
