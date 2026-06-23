import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { AdPlacement } from "@/components/ads/ad-placement";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeader } from "@/components/layout/section-header";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="hero-glow absolute inset-0 opacity-60" />
        <div className="container relative mx-auto px-4 py-14 md:py-16">
          <Breadcrumbs items={[{ label: "Blog" }]} className="mb-6" />
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              Developer Blog
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="gradient-text-brand">Guides & Tutorials</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Learn developer concepts, follow step-by-step tutorials, and discover the best
              free online tools — every article links to tools on {SITE_NAME}.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AdPlacement type="hero" />

        <div className="space-y-16 mt-12">
          {funnels.map((funnel) => {
            const posts = getBlogPostsByFunnel(funnel);
            return (
              <section key={funnel}>
                <SectionHeader
                  title={FUNNEL_LABELS[funnel]}
                  description={FUNNEL_DESCRIPTIONS[funnel]}
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-card p-8 sm:p-10 text-center shadow-glow-sm">
          <h2 className="text-xl font-semibold">Ready to try the tools?</h2>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            All {SITE_NAME} tools are free, run in your browser, and require no signup.
          </p>
          <Button asChild className="mt-5" size="lg">
            <Link href="/">
              Browse all tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
