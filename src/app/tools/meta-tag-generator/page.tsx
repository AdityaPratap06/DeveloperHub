import { MetaTagGeneratorTool } from "@/components/tools/meta-tag-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("meta-tag-generator", MetaTagGeneratorTool);

export { metadata };
export default Page;
