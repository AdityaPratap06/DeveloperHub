import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/layout/tool-page-layout";
import { createToolMetadata } from "@/lib/metadata";
import { getToolById } from "@/lib/tools";

export function createToolPage(toolId: string, ToolComponent: React.ComponentType) {
  const tool = getToolById(toolId);
  if (!tool) notFound();

  const metadata = createToolMetadata(toolId, tool.name, tool.description, tool.keywords);

  function Page() {
    return (
      <ToolPageLayout toolId={toolId}>
        <ToolComponent />
      </ToolPageLayout>
    );
  }

  return { metadata, Page };
}
