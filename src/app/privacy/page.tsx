import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "DevToolsKit privacy policy. All tools run in your browser — we do not collect or store your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>Last updated: June 11, 2026</p>
        <p>
          DevToolsKit is committed to protecting your privacy. All developer tools on this website
          run entirely in your web browser. We do not collect, store, or transmit any data you
          enter into our tools.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Data Processing</h2>
        <p>
          When you use any tool on DevToolsKit, all processing happens locally on your device.
          No input data is sent to our servers or any third-party API.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Local Storage</h2>
        <p>
          We use browser local storage to remember your recently used tools and theme preference.
          This data stays on your device and is never transmitted to us.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Analytics</h2>
        <p>
          If enabled, we may use Google Analytics to understand general usage patterns.
          Analytics data is anonymized and does not include any content you enter into tools.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Contact</h2>
        <p>
          For privacy-related questions, please visit our{" "}
          <a href="/contact" className="text-foreground underline">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
