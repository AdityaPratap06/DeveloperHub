"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdPlacement } from "@/components/ads/ad-placement";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { useAnalytics } from "@/hooks/use-analytics";
import { getToolById } from "@/lib/tools";

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
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            All Tools
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{tool.name}</h1>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          </div>

          <AdPlacement type="content" />
          {children}
        </div>

        <aside className="hidden lg:block w-64 shrink-0">
          <AdPlacement type="sidebar" />
        </aside>
      </div>
    </div>
  );
}
