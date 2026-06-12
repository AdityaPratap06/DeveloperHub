import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_LABELS, type Tool } from "@/lib/tools";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

export function ToolCard({ tool, featured }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link href={tool.href} className="group block h-full">
      <Card
        className={cn(
          "h-full transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5",
          featured && "border-primary/20 bg-gradient-to-br from-card to-primary/5"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/10 group-hover:bg-primary/15 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
          <CardTitle className="text-base group-hover:text-primary transition-colors">
            {tool.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {tool.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Badge variant="outline" className="text-xs font-normal">
            {CATEGORY_LABELS[tool.category]}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
