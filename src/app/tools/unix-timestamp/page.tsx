import { UnixTimestampTool } from "@/components/tools/unix-timestamp";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("unix-timestamp", UnixTimestampTool);

export { metadata };
export default Page;
