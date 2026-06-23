import { WordCounterTool } from "@/components/tools/word-counter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("word-counter", WordCounterTool);

export { metadata };
export default Page;
