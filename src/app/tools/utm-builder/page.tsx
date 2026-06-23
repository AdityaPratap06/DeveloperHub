import { UtmBuilderTool } from "@/components/tools/utm-builder";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("utm-builder", UtmBuilderTool);

export { metadata };
export default Page;
