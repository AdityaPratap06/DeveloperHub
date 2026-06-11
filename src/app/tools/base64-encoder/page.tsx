import { Base64EncoderTool } from "@/components/tools/base64-encoder";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("base64-encoder", Base64EncoderTool);

export { metadata };
export default Page;
