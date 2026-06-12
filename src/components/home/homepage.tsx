"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Lock,
} from "lucide-react";
import { ToolSearch } from "@/components/layout/tool-search";
import { ToolCard } from "@/components/layout/tool-card";
import { AdPlacement } from "@/components/ads/ad-placement";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { SITE_NAME } from "@/lib/site";
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
  { icon: Shield, text: "100% Private" },
  { icon: Zap, text: "Instant Results" },
  { icon: Lock, text: "No Signup" },
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
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="hero-glow absolute inset-0" />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-4 py-1.5 text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              20+ free developer tools — no signup required
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Free Online Developer Tools
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Format JSON, decode JWTs, generate UUIDs, test regex, and more —
              all running instantly in your browser. Your data never leaves your device.
            </p>

            <div className="mt-8 mx-auto max-w-lg">
              <ToolSearch
                placeholder="Search tools — JSON, JWT, Base64..."
                onQueryChange={setSearchQuery}
                onSelect={() => setSearchQuery("")}
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.text}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="#featured">
                  Browse Tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/tools/json-formatter">Try JSON Formatter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AdPlacement type="hero" />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {searchQuery ? (
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Search Results ({filteredTools.length})
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        ) : (
          <>
            <section id="featured">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Featured Tools</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Most popular tools on {SITE_NAME}
                  </p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#all-tools">
                    View all
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getFeaturedTools().map((tool) => (
                  <ToolCard key={tool.id} tool={tool} featured />
                ))}
              </div>
            </section>

            {recentTools.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Recently Used</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {recentTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            )}

            <section id="all-tools">
              <h2 className="text-2xl font-bold mb-2">All Tools by Category</h2>
              <p className="text-muted-foreground mb-8">
                Browse our complete collection of free developer utilities
              </p>
              <div className="space-y-12">
                {categories.map((category) => {
                  const tools = getToolsByCategory(category);
                  return (
                    <div key={category}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">
                          {CATEGORY_LABELS[category]}
                        </h3>
                        <Link
                          href={`/categories/${category}`}
                          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                        >
                          View all <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
