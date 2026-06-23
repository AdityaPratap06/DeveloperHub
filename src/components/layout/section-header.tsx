import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-2",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-gradient-to-r from-brand to-brand/0" />
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
          DevToolkit
        </span>
        {align === "left" && (
          <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-brand/40 to-transparent" />
        )}
        {align === "center" && (
          <span className="h-px w-8 bg-gradient-to-l from-brand to-brand/0" />
        )}
      </div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
