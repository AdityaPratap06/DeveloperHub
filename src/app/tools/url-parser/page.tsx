import { UrlParserTool } from "@/components/tools/url-parser";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("url-parser", UrlParserTool);

export { metadata };
export default Page;
