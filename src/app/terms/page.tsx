import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "DevToolsKit terms of service for using our free developer tools.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>Last updated: June 11, 2026</p>
        <p>
          By using DevToolsKit, you agree to these terms. DevToolsKit provides free developer
          utilities on an &quot;as is&quot; basis without warranties of any kind.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Use of Service</h2>
        <p>
          You may use DevToolsKit for personal and commercial purposes. You are responsible
          for ensuring your use complies with applicable laws and regulations.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Disclaimer</h2>
        <p>
          While we strive for accuracy, DevToolsKit tools are provided without guarantee.
          Do not rely on these tools for security-critical operations such as production
          authentication without independent verification.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Limitation of Liability</h2>
        <p>
          DevToolsKit and its operators shall not be liable for any damages arising from
          the use or inability to use the service.
        </p>
      </div>
    </div>
  );
}
