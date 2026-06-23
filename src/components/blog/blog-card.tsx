import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FUNNEL_LABELS, type BlogPost } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const funnelStyles: Record<string, { badge: string; accent: string }> = {
  top: {
    badge: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
    accent: "group-hover:border-blue-300 dark:group-hover:border-blue-700",
  },
  middle: {
    badge: "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300",
    accent: "group-hover:border-violet-300 dark:group-hover:border-violet-700",
  },
  bottom: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
    accent: "group-hover:border-emerald-300 dark:group-hover:border-emerald-700",
  },
};

export function BlogCard({ post, featured }: BlogCardProps) {
  const style = funnelStyles[post.funnel];

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card
        className={cn(
          "card-shine h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
          style.accent,
          featured && "border-primary/25 bg-gradient-to-br from-primary/5 to-card"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                style.badge
              )}
            >
              {FUNNEL_LABELS[post.funnel]}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTimeMinutes} min
            </span>
          </div>
          <CardTitle className="text-base font-semibold leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed text-sm">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
