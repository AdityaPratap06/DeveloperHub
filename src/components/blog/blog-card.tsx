import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FUNNEL_LABELS, type BlogPost } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const funnelColors: Record<string, string> = {
  top: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  middle: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  bottom: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export function BlogCard({ post, featured }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card
        className={cn(
          "h-full transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5",
          featured && "border-primary/20"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className={cn("text-xs font-normal", funnelColors[post.funnel])}>
              {FUNNEL_LABELS[post.funnel]}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTimeMinutes} min read
            </span>
          </div>
          <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
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
          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </CardContent>
      </Card>
    </Link>
  );
}
