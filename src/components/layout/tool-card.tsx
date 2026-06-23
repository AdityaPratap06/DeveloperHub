import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CATEGORY_LABELS, type Tool } from "@/lib/tools";
import { CATEGORY_STYLES } from "@/lib/category-styles";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

export function ToolCard({ tool, featured }: ToolCardProps) {
  const Icon = tool.icon;
  const styles = CATEGORY_STYLES[tool.category];

  return (
    <Link href={tool.href} className="group block h-full">
      <Card
        className={cn(
          "card-shine h-full overflow-hidden transition-all duration-300",
          "hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-1",
          featured && cn("border-primary/25 bg-gradient-to-br to-card", styles.gradient)
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow-sm",
                styles.icon
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/80 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
          <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors duration-200">
            {tool.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed text-sm">
            {tool.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
              styles.badge
            )}
          >
            {CATEGORY_LABELS[tool.category]}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
