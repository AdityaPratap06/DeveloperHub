import { MarkdownPreviewTool } from "@/components/tools/markdown-preview";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("markdown-preview", MarkdownPreviewTool);

export { metadata };
export default Page;
