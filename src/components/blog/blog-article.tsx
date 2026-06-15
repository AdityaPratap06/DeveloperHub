import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AdPlacement } from "@/components/ads/ad-placement";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogCard } from "@/components/blog/blog-card";
import { ToolCta } from "@/components/blog/tool-cta";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/seo/breadcrumbs";
import { FaqSection, faqJsonLd } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { getRelatedPosts } from "@/lib/blog";
import { FUNNEL_LABELS, type BlogPost } from "@/lib/blog/types";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getToolById } from "@/lib/tools";

interface BlogArticleProps {
  post: BlogPost;
}

export function BlogArticle({ post }: BlogArticleProps) {
  const relatedPosts = getRelatedPosts(post.relatedPostSlugs ?? []);
  const relatedTools = post.relatedToolIds
    .map((id) => getToolById(id))
    .filter((t): t is NonNullable<typeof t> => !!t);

  const breadcrumbLd = breadcrumbsJsonLd([{ label: "Blog", href: "/blog" }, { label: post.title }], SITE_URL);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd, articleLd, faqJsonLd(post.faq)]} />

      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
          className="mb-6"
        />

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{FUNNEL_LABELS[post.funnel]}</Badge>
            <span className="text-sm text-muted-foreground">
              {post.readTimeMinutes} min read ·{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {post.intro}
          </p>
        </header>

        <AdPlacement type="content" />

        {/* Body */}
        <BlogContent blocks={post.blocks} />

        <AdPlacement type="content" />

        {/* Related tools */}
        {relatedTools.length > 0 && (
          <section className="mt-12 rounded-xl border bg-muted/20 p-6">
            <h2 className="text-lg font-semibold mb-4">Related Free Tools</h2>
            <div className="space-y-3">
              {relatedTools.map((tool) => (
                <ToolCta
                  key={tool.id}
                  toolId={tool.id}
                  label={tool.name}
                  description={tool.description}
                />
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <div className="mt-12">
          <FaqSection faqs={post.faq} />
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
