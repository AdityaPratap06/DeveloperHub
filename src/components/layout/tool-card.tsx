import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tool } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link href={tool.href} className="group block h-full">
      <Card className="h-full transition-colors hover:border-primary/50 hover:bg-accent/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <CardTitle className="text-base">{tool.name}</CardTitle>
          <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <span className="text-xs text-muted-foreground capitalize">
            {tool.category.replace("-", " ")}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
