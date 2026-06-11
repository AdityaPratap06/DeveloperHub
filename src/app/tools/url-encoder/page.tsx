import { UrlEncoderTool } from "@/components/tools/url-encoder";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("url-encoder", UrlEncoderTool);

export { metadata };
export default Page;
