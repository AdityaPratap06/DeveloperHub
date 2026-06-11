import { LoremIpsumTool } from "@/components/tools/lorem-ipsum";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("lorem-ipsum", LoremIpsumTool);

export { metadata };
export default Page;
