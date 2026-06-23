import { JsonToCsvTool } from "@/components/tools/json-to-csv";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("json-to-csv", JsonToCsvTool);

export { metadata };
export default Page;
