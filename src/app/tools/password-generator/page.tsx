import { PasswordGeneratorTool } from "@/components/tools/password-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("password-generator", PasswordGeneratorTool);

export { metadata };
export default Page;
