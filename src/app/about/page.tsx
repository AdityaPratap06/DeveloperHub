import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about DevToolkit — free, browser-based developer utilities built for speed and privacy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About DevToolkit</h1>
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-muted-foreground">
        <p>
          DevToolkit is a collection of free developer utilities designed to help you work faster.
          Every tool runs entirely in your browser — your data never leaves your device.
        </p>
        <p>
          Whether you need to format JSON, decode JWTs, generate UUIDs, test regex patterns,
          or convert timestamps, DevToolkit provides fast, reliable tools without any sign-up or API dependency.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8">Why DevToolkit?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>100% browser-based — no data sent to servers</li>
          <li>Free forever — no paywalls or limits</li>
          <li>Fast and lightweight — optimized for performance</li>
          <li>Dark mode support for comfortable coding sessions</li>
          <li>Mobile-friendly responsive design</li>
        </ul>
      </div>
    </div>
  );
}
