import { UuidGeneratorTool } from "@/components/tools/uuid-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("uuid-generator", UuidGeneratorTool);

export { metadata };
export default Page;
