import { CaseConverterTool } from "@/components/tools/case-converter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("case-converter", CaseConverterTool);

export { metadata };
export default Page;
