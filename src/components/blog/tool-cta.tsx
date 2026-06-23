import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getToolById } from "@/lib/tools";
import { CATEGORY_STYLES } from "@/lib/category-styles";
import { cn } from "@/lib/utils";

interface ToolCtaProps {
  toolId: string;
  label?: string;
  description?: string;
}

export function ToolCta({ toolId, label, description }: ToolCtaProps) {
  const tool = getToolById(toolId);
  if (!tool) return null;

  const Icon = tool.icon;
  const styles = CATEGORY_STYLES[tool.category];

  return (
    <div
      className={cn(
        "my-6 overflow-hidden rounded-2xl border-2 border-primary/20",
        "bg-gradient-to-r to-primary/5 shadow-glow-sm",
        styles.gradient
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1",
            styles.icon
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold">{label ?? `Try ${tool.name}`}</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            {description ?? tool.description}
          </p>
        </div>
        <Button asChild className="shrink-0 shadow-md shadow-primary/20">
          <Link href={tool.href}>
            Open Tool
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
