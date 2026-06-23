import { SlugGeneratorTool } from "@/components/tools/slug-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("slug-generator", SlugGeneratorTool);

export { metadata };
export default Page;
