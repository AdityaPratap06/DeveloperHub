import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe, Wrench } from "lucide-react";
import { AdPlacement } from "@/components/ads/ad-placement";
import { FaqSection, faqJsonLd } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { HOMEPAGE_FAQ } from "@/lib/tool-content";
import { CATEGORY_LABELS, TOOLS, type ToolCategory } from "@/lib/tools";

const stats = [
  { icon: Wrench, label: "20+", desc: "Developer Tools" },
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
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.desc} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold">{stat.label}</p>
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
            The Developer Toolkit Built for Speed & Privacy
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-left">
            <p>
              {SITE_NAME} is a comprehensive collection of free online developer tools designed
              for modern web development workflows. From formatting JSON and decoding JWT tokens
              to generating UUIDs and testing regular expressions — every utility you need is
              available instantly, with zero setup.
            </p>
            <p>
              Unlike traditional online tools that send your data to remote servers, every tool on{" "}
              {SITE_NAME} runs entirely in your browser using JavaScript. This means your API keys,
              tokens, passwords, and sensitive data never leave your device. It&apos;s faster,
              safer, and works even when you&apos;re offline after the initial page load.
            </p>
            <p>
              Whether you&apos;re a frontend developer debugging API responses, a backend engineer
              validating JSON configs, or a DevOps professional building cron schedules —{" "}
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
                className="group rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {CATEGORY_LABELS[category]}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{count} tools</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
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
    </>
  );
}
