import { PasswordCheckerTool } from "@/components/tools/password-checker";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("password-checker", PasswordCheckerTool);

export { metadata };
export default Page;
