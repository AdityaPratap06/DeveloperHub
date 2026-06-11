"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ToolSearch } from "@/components/layout/tool-search";
import { ToolCard } from "@/components/layout/tool-card";
import { AdPlacement } from "@/components/ads/ad-placement";
import { Button } from "@/components/ui/button";
import { useRecentTools } from "@/hooks/use-recent-tools";
import {
  TOOLS,
  CATEGORY_LABELS,
  getFeaturedTools,
  getToolsByCategory,
  searchTools,
  type ToolCategory,
} from "@/lib/tools";
import { getToolById } from "@/lib/tools";

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
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              20+ free developer tools
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Developer Tools Hub
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fast, private, and free utilities that run entirely in your browser.
              No sign-up. No server. Just tools.
            </p>
            <div className="mt-8 mx-auto max-w-lg">
              <ToolSearch
                placeholder="Search 20+ developer tools..."
                onQueryChange={setSearchQuery}
                onSelect={() => setSearchQuery("")}
              />
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
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Tools</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#all-tools">
                    View all
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getFeaturedTools().map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
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
              <h2 className="text-2xl font-bold mb-8">All Tools by Category</h2>
              <div className="space-y-12">
                {categories.map((category) => {
                  const tools = getToolsByCategory(category);
                  return (
                    <div key={category}>
                      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                        {CATEGORY_LABELS[category]}
                      </h3>
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
