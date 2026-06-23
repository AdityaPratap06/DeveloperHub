import type { ToolFaq } from "@/lib/tool-content";

interface FaqSectionProps {
  faqs: ToolFaq[];
  title?: string;
}

export function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  if (!faqs.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="divide-y rounded-xl border bg-card shadow-sm overflow-hidden">
        {faqs.map((faq, i) => (
          <details key={i} className="group px-5 py-4 transition-colors hover:bg-muted/30">
            <summary className="cursor-pointer list-none font-medium marker:content-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm transition-all group-open:rotate-45 group-open:bg-primary/10 group-open:text-primary">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed pr-8">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(faqs: ToolFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
