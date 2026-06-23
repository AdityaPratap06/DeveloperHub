import { TwitterCardGeneratorTool } from "@/components/tools/twitter-card-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("twitter-card-generator", TwitterCardGeneratorTool);

export { metadata };
export default Page;
