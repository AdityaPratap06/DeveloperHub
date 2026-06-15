import { ToolCta } from "@/components/blog/tool-cta";
import type { BlogBlock } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

interface BlogContentProps {
  blocks: BlogBlock[];
}

export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  className="text-xl font-semibold tracking-tight mt-10 mb-4 first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3 key={i} className="text-lg font-semibold mt-6 mb-3">
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {block.content}
              </p>
            );

          case "list":
            if (block.ordered) {
              return (
                <ol key={i} className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  {block.items.map((item, j) => (
                    <li key={j} className="leading-relaxed">{item}</li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            );

          case "code":
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-lg border bg-muted/50 p-4 font-mono text-sm leading-relaxed"
              >
                <code>{block.code}</code>
              </pre>
            );

          case "tool-cta":
            return (
              <ToolCta
                key={i}
                toolId={block.toolId}
                label={block.label}
                description={block.description}
              />
            );

          case "callout":
            return (
              <div
                key={i}
                className={cn(
                  "rounded-lg border-l-4 p-4 my-4 text-sm leading-relaxed",
                  block.variant === "tip"
                    ? "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-200"
                    : "border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200"
                )}
              >
                {block.content}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
