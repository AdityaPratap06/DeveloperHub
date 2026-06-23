import { JsonCompareTool } from "@/components/tools/json-compare";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("json-compare", JsonCompareTool);

export { metadata };
export default Page;
