import { QrCodeGeneratorTool } from "@/components/tools/qr-code-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("qr-code-generator", QrCodeGeneratorTool);

export { metadata };
export default Page;
