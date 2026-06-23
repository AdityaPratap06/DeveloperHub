import { TextCompareTool } from "@/components/tools/text-compare";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("text-compare", TextCompareTool);

export { metadata };
export default Page;
