import { notFound } from "next/navigation";
import Link from "next/link";
import { ToolCard } from "@/components/layout/tool-card";
import { AdPlacement } from "@/components/ads/ad-placement";
import { Breadcrumbs, breadcrumbsJsonLd } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { createCategoryMetadata } from "@/lib/metadata";
import { CATEGORY_SEO } from "@/lib/tool-content";
import { SITE_URL } from "@/lib/site";
import {
  CATEGORY_LABELS,
  getToolsByCategory,
  type ToolCategory,
} from "@/lib/tools";

const VALID_CATEGORIES = Object.keys(CATEGORY_LABELS) as ToolCategory[];

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const seo = CATEGORY_SEO[category];
  if (!seo) return {};
  return createCategoryMetadata(category, seo.title, seo.description);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as ToolCategory)) {
    notFound();
  }

  const cat = category as ToolCategory;
  const seo = CATEGORY_SEO[category];
  const tools = getToolsByCategory(cat);
  const label = CATEGORY_LABELS[cat];

  const breadcrumbLd = breadcrumbsJsonLd([{ label }], SITE_URL);

  return (
    <>
      <JsonLd data={breadcrumbLd} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label }]} className="mb-6" />

        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{label}</h1>
          {seo && (
            <div className="mt-4 max-w-3xl space-y-3 text-muted-foreground leading-relaxed">
              {seo.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>

        <AdPlacement type="content" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="mt-12 rounded-xl border bg-muted/30 p-6">
          <h2 className="font-semibold mb-2">Explore All Categories</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {VALID_CATEGORIES.filter((c) => c !== cat).map((c) => (
              <Link
                key={c}
                href={`/categories/${c}`}
                className="rounded-full border bg-background px-4 py-1.5 text-sm hover:border-primary/50 transition-colors"
              >
                {CATEGORY_LABELS[c]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
