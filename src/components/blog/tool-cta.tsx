import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getToolById } from "@/lib/tools";

interface ToolCtaProps {
  toolId: string;
  label?: string;
  description?: string;
}

export function ToolCta({ toolId, label, description }: ToolCtaProps) {
  const tool = getToolById(toolId);
  if (!tool) return null;

  const Icon = tool.icon;

  return (
    <div className="my-6 rounded-xl border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold">{label ?? `Try ${tool.name}`}</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            {description ?? tool.description}
          </p>
        </div>
        <Button asChild className="shrink-0">
          <Link href={tool.href}>
            Open Tool
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
