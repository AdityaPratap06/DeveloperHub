import { SchemaGeneratorTool } from "@/components/tools/schema-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("schema-generator", SchemaGeneratorTool);

export { metadata };
export default Page;
