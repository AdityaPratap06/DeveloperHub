import { RobotsGeneratorTool } from "@/components/tools/robots-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("robots-generator", RobotsGeneratorTool);

export { metadata };
export default Page;
