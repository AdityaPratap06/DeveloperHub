import { JwtDecoderTool } from "@/components/tools/jwt-decoder";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("jwt-decoder", JwtDecoderTool);

export { metadata };
export default Page;
