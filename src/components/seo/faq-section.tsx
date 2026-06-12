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
      <div className="divide-y rounded-xl border bg-card">
        {faqs.map((faq, i) => (
          <details key={i} className="group px-5 py-4">
            <summary className="cursor-pointer list-none font-medium marker:content-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="text-muted-foreground text-lg shrink-0 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
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
