import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/layout/tool-page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { ToolSeoContent } from "@/components/seo/tool-seo-content";
import { breadcrumbsJsonLd } from "@/components/seo/breadcrumbs";
import { createToolMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import { CATEGORY_LABELS, getToolById } from "@/lib/tools";

export function createToolPage(toolId: string, ToolComponent: React.ComponentType) {
  const tool = getToolById(toolId);
  if (!tool) notFound();

  const metadata = createToolMetadata(toolId, tool.name, tool.description, tool.keywords);

  const breadcrumbLd = breadcrumbsJsonLd(
    [
      { label: CATEGORY_LABELS[tool.category], href: `/categories/${tool.category}` },
      { label: tool.name },
    ],
    SITE_URL
  );

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: `${SITE_URL}${tool.href}`,
  };

  function Page() {
    return (
      <>
        <JsonLd data={[breadcrumbLd, softwareLd]} />
        <ToolPageLayout toolId={toolId}>
          <ToolComponent />
        </ToolPageLayout>
        <ToolSeoContent toolId={toolId} />
      </>
    );
  }

  return { metadata, Page };
}
