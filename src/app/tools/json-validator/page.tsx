import { JsonValidatorTool } from "@/components/tools/json-validator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("json-validator", JsonValidatorTool);

export { metadata };
export default Page;
