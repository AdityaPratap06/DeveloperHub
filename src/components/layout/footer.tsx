import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { AdPlacement } from "@/components/ads/ad-placement";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <AdPlacement type="footer" />

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-semibold">{SITE_NAME}</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Free, fast, and privacy-friendly developer tools that run entirely in your browser.
              No data is sent to any server.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Links</h4>
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

          <div>
            <h4 className="text-sm font-semibold">Popular Tools</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/tools/json-formatter" className="text-sm text-muted-foreground hover:text-foreground">
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/tools/jwt-decoder" className="text-sm text-muted-foreground hover:text-foreground">
                  JWT Decoder
                </Link>
              </li>
              <li>
                <Link href="/tools/base64-encoder" className="text-sm text-muted-foreground hover:text-foreground">
                  Base64 Encoder
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
