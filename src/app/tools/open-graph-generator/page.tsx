import { OpenGraphGeneratorTool } from "@/components/tools/open-graph-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("open-graph-generator", OpenGraphGeneratorTool);

export { metadata };
export default Page;
