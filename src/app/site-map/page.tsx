import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { TOOLS } from "@/lib/tools";

export const metadata = createMetadata({
  title: "Sitemap",
  description: "Complete sitemap of all DevToolkit pages and developer tools.",
  path: "/site-map",
});

const staticPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" },
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Pages</h2>
        <ul className="space-y-2">
          {staticPages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-muted-foreground hover:text-foreground">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Tools</h2>
        <ul className="space-y-2">
          {TOOLS.map((tool) => (
            <li key={tool.id}>
              <Link href={tool.href} className="text-muted-foreground hover:text-foreground">
                {tool.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
