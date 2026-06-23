"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdPlacement } from "@/components/ads/ad-placement";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { useAnalytics } from "@/hooks/use-analytics";
import { CATEGORY_LABELS, getToolById } from "@/lib/tools";
import { CATEGORY_STYLES } from "@/lib/category-styles";
import { cn } from "@/lib/utils";

interface ToolPageLayoutProps {
  toolId: string;
  children: React.ReactNode;
}

export function ToolPageLayout({ toolId, children }: ToolPageLayoutProps) {
  const { addRecent } = useRecentTools();
  const { trackToolUsage } = useAnalytics();
  const tool = getToolById(toolId);

  useEffect(() => {
    addRecent(toolId);
    trackToolUsage(toolId, "page_view");
  }, [toolId, addRecent, trackToolUsage]);

  if (!tool) return null;

  const Icon = tool.icon;
  const styles = CATEGORY_STYLES[tool.category];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: CATEGORY_LABELS[tool.category], href: `/categories/${tool.category}` },
          { label: tool.name },
        ]}
        className="mb-6"
      />

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 min-w-0">
          {/* Tool header */}
          <div
            className={cn(
              "relative mb-8 overflow-hidden rounded-2xl border p-6 sm:p-8",
              "bg-gradient-to-br to-card",
              styles.gradient
            )}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
              <div
                className={cn(
                  "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ring-1 shadow-glow-sm",
                  styles.icon
                )}
              >
                <Icon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {tool.name}
                  </h1>
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Free
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <Shield className="h-3.5 w-3.5" />
                  100% browser-based — data stays private
                </div>
              </div>
            </div>
          </div>

          {/* Tool UI */}
          <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-card">
            {children}
          </div>

          <div className="mt-6">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                All Tools
              </Link>
            </Button>
          </div>
        </div>

        <aside className="hidden lg:block w-72 shrink-0 space-y-5">
          <AdPlacement type="sidebar" />
          <div className="rounded-xl border bg-card p-5 shadow-card space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  ← All Tools
                </Link>
              </li>
              <li>
                <Link
                  href={`/categories/${tool.category}`}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors",
                    "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {CATEGORY_LABELS[tool.category]}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  Developer Guides
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
