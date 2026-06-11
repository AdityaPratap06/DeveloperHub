import { TextDiffTool } from "@/components/tools/text-diff";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("text-diff", TextDiffTool);

export { metadata };
export default Page;
