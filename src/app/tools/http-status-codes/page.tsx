import { HttpStatusCodesTool } from "@/components/tools/http-status-codes";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("http-status-codes", HttpStatusCodesTool);

export { metadata };
export default Page;
