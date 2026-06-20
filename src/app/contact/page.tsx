import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with the DevToolsKit team for feedback, suggestions, or support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>
          We&apos;d love to hear from you! Whether you have feedback, feature requests,
          bug reports, or general questions about DevToolsKit, feel free to reach out.
        </p>
        <div className="rounded-lg border p-6 mt-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">Email</h2>
          <p>
            <a href="mailto:info@bioconvert.in" className="text-foreground underline">
              info@bioconvert.in
            </a>
          </p>
        </div>
        <p className="mt-4">
          We typically respond within 2-3 business days. For urgent security issues,
          please include &quot;SECURITY&quot; in your subject line.
        </p>
      </div>
    </div>
  );
}
