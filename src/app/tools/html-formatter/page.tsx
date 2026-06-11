import { CodeFormatterTool } from "@/components/tools/code-formatter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("html-formatter", () => (
  <CodeFormatterTool
    type="html"
    defaultInput='<div class="container"><h1>Hello</h1><p>World</p></div>'
    downloadExt="html"
  />
));

export { metadata };
export default Page;
