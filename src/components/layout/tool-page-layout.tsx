"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdPlacement } from "@/components/ads/ad-placement";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { useAnalytics } from "@/hooks/use-analytics";
import { CATEGORY_LABELS, getToolById } from "@/lib/tools";

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
          <div className="mb-8 rounded-2xl border bg-gradient-to-br from-card to-muted/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {tool.name}
                  </h1>
                  <Badge variant="secondary" className="text-xs">Free</Badge>
                </div>
                <p className="text-muted-foreground">{tool.description}</p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                  Runs 100% in your browser — data stays private
                </div>
              </div>
            </div>
          </div>

          {/* Tool UI */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            {children}
          </div>

          <div className="mt-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                All Tools
              </Link>
            </Button>
          </div>
        </div>

        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          <AdPlacement type="sidebar" />
          <div className="rounded-xl border bg-card p-5 space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  ← All Tools
                </Link>
              </li>
              <li>
                <Link
                  href={`/categories/${tool.category}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {CATEGORY_LABELS[tool.category]}
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
