import { CodeFormatterTool } from "@/components/tools/code-formatter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("css-formatter", () => (
  <CodeFormatterTool
    type="css"
    defaultInput=".container{display:flex;flex-direction:column;gap:1rem;padding:2rem;}"
    downloadExt="css"
  />
));

export { metadata };
export default Page;
