import { HtmlToMarkdownTool } from "@/components/tools/html-to-markdown";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("html-to-markdown", HtmlToMarkdownTool);

export { metadata };
export default Page;
