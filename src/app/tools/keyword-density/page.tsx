import { KeywordDensityTool } from "@/components/tools/keyword-density";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("keyword-density", KeywordDensityTool);

export { metadata };
export default Page;
