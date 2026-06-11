import { CodeFormatterTool } from "@/components/tools/code-formatter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("javascript-formatter", () => (
  <CodeFormatterTool
    type="javascript"
    defaultInput='function greet(name){return `Hello, ${name}!`;}const users=["Alice","Bob"];users.forEach(u=>console.log(greet(u)));'
    downloadExt="js"
  />
));

export { metadata };
export default Page;
