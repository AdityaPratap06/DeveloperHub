import { SitemapGeneratorTool } from "@/components/tools/sitemap-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("sitemap-generator", SitemapGeneratorTool);

export { metadata };
export default Page;
