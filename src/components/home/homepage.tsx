"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Lock,
  BookOpen,
} from "lucide-react";
import { ToolSearch } from "@/components/layout/tool-search";
import { ToolCard } from "@/components/layout/tool-card";
import { SectionHeader } from "@/components/layout/section-header";
import { AdPlacement } from "@/components/ads/ad-placement";
import { Button } from "@/components/ui/button";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  TOOLS,
  CATEGORY_LABELS,
  getFeaturedTools,
  getToolsByCategory,
  searchTools,
  getToolById,
  type ToolCategory,
} from "@/lib/tools";

const trustBadges = [
  { icon: Shield, text: "100% Private", color: "text-emerald-600 dark:text-emerald-400" },
  { icon: Zap, text: "Instant Results", color: "text-amber-600 dark:text-amber-400" },
  { icon: Lock, text: "No Signup", color: "text-blue-600 dark:text-blue-400" },
];

const quickLinks = [
  { href: "/tools/json-formatter", label: "JSON" },
  { href: "/tools/jwt-decoder", label: "JWT" },
  { href: "/tools/base64-encoder", label: "Base64" },
  { href: "/tools/uuid-generator", label: "UUID" },
  { href: "/tools/regex-tester", label: "Regex" },
];

export function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { recentIds } = useRecentTools();

  const filteredTools = useMemo(
    () => (searchQuery ? searchTools(searchQuery) : TOOLS),
    [searchQuery]
  );

  const recentTools = recentIds
    .map((id) => getToolById(id))
    .filter((t): t is NonNullable<typeof t> => !!t);

  const categories = Object.keys(CATEGORY_LABELS) as ToolCategory[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="hero-glow absolute inset-0" />

        {/* Floating orbs */}
        <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -right-16 top-32 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl animate-float-delayed" />

        <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-glow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              40+ free developer tools
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.1]">
              <span className="gradient-text">Free Online</span>
              <br />
              <span className="gradient-text-brand">Developer Tools</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Format JSON, decode JWTs, generate UUIDs, test regex, and more —
              all running instantly in your browser. Your data never leaves your device.
            </p>

            <div className="mt-8 mx-auto max-w-xl">
              <ToolSearch
                variant="hero"
                placeholder="Search tools — JSON, JWT, Base64..."
                onQueryChange={setSearchQuery}
                onSelect={() => setSearchQuery("")}
              />
            </div>

            {/* Quick tool chips */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-muted-foreground mr-1">Popular:</span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary hover:shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm backdrop-blur-sm"
                >
                  <badge.icon className={cn("h-4 w-4", badge.color)} />
                  <span className="text-muted-foreground">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-11 px-8">
                <Link href="#featured">
                  Browse Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-11 px-8 bg-background/60 backdrop-blur-sm" asChild>
                <Link href="/blog">
                  <BookOpen className="h-4 w-4" />
                  Read Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AdPlacement type="hero" />

      <div className="container mx-auto px-4 py-14 space-y-20">
        {searchQuery ? (
          <section>
            <SectionHeader
              title={`Search Results (${filteredTools.length})`}
              description="Tools matching your search query"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        ) : (
          <>
            <section id="featured">
              <SectionHeader
                title="Featured Tools"
                description={`The most popular utilities on ${SITE_NAME}`}
              />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {getFeaturedTools().map((tool) => (
                  <ToolCard key={tool.id} tool={tool} featured />
                ))}
              </div>
            </section>

            {recentTools.length > 0 && (
              <section>
                <SectionHeader title="Recently Used" description="Pick up where you left off" />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {recentTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            )}

            <section id="all-tools">
              <SectionHeader
                title="All Tools by Category"
                description="Browse our complete collection of free developer utilities"
              />
              <div className="space-y-14">
                {categories.map((category) => {
                  const tools = getToolsByCategory(category);
                  return (
                    <div key={category}>
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/60">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          {CATEGORY_LABELS[category]}
                          <span className="text-sm font-normal text-muted-foreground">
                            ({tools.length})
                          </span>
                        </h3>
                        <Link
                          href={`/categories/${category}`}
                          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                        >
                          View all <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {tools.map((tool) => (
                          <ToolCard key={tool.id} tool={tool} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}
