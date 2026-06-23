import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe, Wrench } from "lucide-react";
import { AdPlacement } from "@/components/ads/ad-placement";
import { FaqSection, faqJsonLd } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { HOMEPAGE_FAQ } from "@/lib/tool-content";
import { CATEGORY_LABELS, TOOLS, type ToolCategory } from "@/lib/tools";

const stats = [
  { icon: Wrench, label: "40+", desc: "Developer Tools" },
  { icon: Shield, label: "100%", desc: "Private & Secure" },
  { icon: Zap, label: "0ms", desc: "Server Latency" },
  { icon: Globe, label: "Free", desc: "Forever" },
];

export function HomepageSeoContent() {
  const categories = Object.keys(CATEGORY_LABELS) as ToolCategory[];

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Free online developer tools that run entirely in your browser.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Free browser-based developer utilities for JSON, JWT, Base64, UUID, and more.",
  };

  return (
    <>
      <JsonLd data={[websiteJsonLd, orgJsonLd, faqJsonLd(HOMEPAGE_FAQ)]} />

      {/* Stats bar */}
      <section className="border-y bg-muted/20">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.desc}
                className="flex items-center gap-4 rounded-xl border bg-card/60 p-4 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Developer&apos;s Toolkit that is designed for both Performance & Privacy
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-left">
            <p>
              {SITE_NAME} — a free collection of online developer tools for modern web development workflows.
              Whether it is formatting JSON or decoding a JWT token,
              generating UUIDs or testing regular expressions — everything is at your disposal instantly without any setup.
            </p>
            <p>
              {SITE_NAME} works completely different from all of the online tools.
              While traditional online tools transfer your data to remote backend servers,
              every single tool on {SITE_NAME} runs locally within browser as a pure JavaScript.
              This ensures your API keys, tokens, passwords, and sensitive data remain on your machine.
              It is quicker, more secure and works offline after the first page load.
            </p>
            <p>
              Whether you&apos;re a frontend developer trying to debug API responses,
              a backend engineer validating JSON configs,
              or maybe just a DevOps professional restricting out the cron schedules,{" "}
              {SITE_NAME} has the tools you need, completely free with no account required.
            </p>
          </div>
        </div>
      </section>

      <AdPlacement type="content" />

      {/* Categories grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const count = TOOLS.filter((t) => t.category === category).length;
            return (
              <Link
                key={category}
                href={`/categories/${category}`}
                className="group relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {CATEGORY_LABELS[category]}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{count} tools</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <FaqSection faqs={HOMEPAGE_FAQ} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* Blog CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-card to-violet-500/5 p-8 sm:p-10 text-center shadow-glow-sm">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-bold">Developer Guides & Tutorials</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Learn JSON, JWT, Base64, and more with our free guides. Step-by-step tutorials
              that link directly to the tools you need.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Read the blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
