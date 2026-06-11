import { RegexTesterTool } from "@/components/tools/regex-tester";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("regex-tester", RegexTesterTool);

export { metadata };
export default Page;
