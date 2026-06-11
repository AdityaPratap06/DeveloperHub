import { HashGeneratorTool } from "@/components/tools/hash-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("hash-generator", HashGeneratorTool);

export { metadata };
export default Page;
