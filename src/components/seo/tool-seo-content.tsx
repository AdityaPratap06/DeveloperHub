import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AdPlacement } from "@/components/ads/ad-placement";
import { FaqSection, faqJsonLd } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { getToolSeoContent } from "@/lib/tool-content";
import { CATEGORY_LABELS, getToolById } from "@/lib/tools";

interface ToolSeoContentProps {
  toolId: string;
}

export function ToolSeoContent({ toolId }: ToolSeoContentProps) {
  const content = getToolSeoContent(toolId);
  const tool = getToolById(toolId);
  if (!content || !tool) return null;

  const relatedTools = content.relatedToolIds
    .map((id) => getToolById(id))
    .filter((t): t is NonNullable<typeof t> => !!t);

  return (
    <>
      <JsonLd data={faqJsonLd(content.faq)} />

      <div className="container mx-auto px-4 pb-16 space-y-12">
        <AdPlacement type="content" />

        {/* Overview */}
        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold tracking-tight not-prose">
            About {tool.name}
          </h2>
          {content.overview.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Features */}
          <section className="rounded-xl border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2.5">
              {content.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* How to use */}
          <section className="rounded-xl border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">How to Use</h2>
            <ol className="space-y-3">
              {content.howToSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Use cases */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Common Use Cases</h2>
          <div className="flex flex-wrap gap-2">
            {content.useCases.map((useCase, i) => (
              <Badge key={i} variant="secondary" className="text-sm py-1.5 px-3">
                {useCase}
              </Badge>
            ))}
          </div>
        </section>

        <AdPlacement type="content" />

        {/* FAQ */}
        <FaqSection faqs={content.faq} />

        {/* Related tools */}
        {relatedTools.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Related Tools</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {relatedTools.map((related) => {
                const Icon = related.icon;
                return (
                  <Link
                    key={related.id}
                    href={related.href}
                    className="group flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent/50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{related.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{related.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Category link */}
        <p className="text-sm text-muted-foreground">
          Browse more tools in{" "}
          <Link
            href={`/categories/${tool.category}`}
            className="text-foreground underline underline-offset-4 hover:text-primary"
          >
            {CATEGORY_LABELS[tool.category]}
          </Link>
          .
        </p>
      </div>
    </>
  );
}
