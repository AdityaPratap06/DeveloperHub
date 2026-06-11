import { CodeFormatterTool } from "@/components/tools/code-formatter";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("sql-formatter", () => (
  <CodeFormatterTool
    type="sql"
    defaultInput="SELECT u.id, u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id WHERE o.total > 100 ORDER BY o.total DESC;"
    downloadExt="sql"
  />
));

export { metadata };
export default Page;
