"use client";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { AdPlacement } from "@/components/ads/ad-placement";
import {
  CATEGORY_LABELS,
  getFeaturedTools,
  type ToolCategory,
} from "@/lib/tools";
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
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <AdPlacement type="footer" />

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/assets/DevToolsKitLogo.webp"
                alt="DevToolsKit"
                width={100}
                height={20}
                className="dark:hidden h-5 w-auto"
              />

              <Image
                src="/assets/DevToolsKitLogoLight.webp"
                alt="DevToolsKit"
                width={100}
                height={20}
                className="hidden dark:block h-5 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Free, fast, and privacy-friendly developer tools that run entirely in your browser.
              Format JSON, decode JWTs, generate UUIDs, and more — no data ever sent to a server.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Categories</h4>
            <ul className="mt-3 space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/categories/${cat}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {CATEGORY_LABELS[cat]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Popular Tools</h4>
            <ul className="mt-3 space-y-2">
              {featuredTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="text-xs">All tools run client-side. Your data stays on your device.</p>
        </div>
      </div>
    </footer>
  );
}
