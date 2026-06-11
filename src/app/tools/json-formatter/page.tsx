import { JsonFormatterTool } from "@/components/tools/json-formatter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("json-formatter", JsonFormatterTool);

export { metadata };
export default Page;
