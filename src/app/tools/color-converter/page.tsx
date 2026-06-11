import { ColorConverterTool } from "@/components/tools/color-converter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("color-converter", ColorConverterTool);

export { metadata };
export default Page;
