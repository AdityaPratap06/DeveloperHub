import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { AdPlacement } from "@/components/ads/ad-placement";
import { BlogCard } from "@/components/blog/blog-card";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllBlogPosts, getBlogPostsByFunnel } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { FUNNEL_DESCRIPTIONS, FUNNEL_LABELS, type BlogFunnel } from "@/lib/blog/types";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Developer Blog — Guides & Tutorials",
  description:
    "Free developer guides and tutorials. Learn JSON, JWT, Base64, SHA256, and more. Step-by-step how-to guides linking to free online tools.",
  path: "/blog",
  keywords: [
    "developer blog",
    "json guide",
    "jwt tutorial",
    "developer tutorials",
    "programming guides",
  ],
});

const funnels: BlogFunnel[] = ["top", "middle", "bottom"];

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Developer Blog`,
    description: "Free developer guides, tutorials, and tool recommendations.",
    url: `${SITE_URL}/blog`,
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Blog" }]} className="mb-6" />

        {/* Hero */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Developer Blog</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Guides, Tutorials & Tool Reviews
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Learn developer concepts, follow step-by-step tutorials, and discover the best
            free online tools. Every article links to tools you can use immediately on{" "}
            {SITE_NAME}.
          </p>
        </div>

        <AdPlacement type="hero" />

        {/* Funnel sections */}
        <div className="space-y-16 mt-12">
          {funnels.map((funnel) => {
            const posts = getBlogPostsByFunnel(funnel);
            return (
              <section key={funnel}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">{FUNNEL_LABELS[funnel]}</h2>
                  <p className="text-muted-foreground mt-1">{FUNNEL_DESCRIPTIONS[funnel]}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA to tools */}
        <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 to-muted/30 p-8 text-center">
          <h2 className="text-xl font-semibold">Ready to try the tools?</h2>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            All {SITE_NAME} tools are free, run in your browser, and require no signup.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Browse all developer tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
