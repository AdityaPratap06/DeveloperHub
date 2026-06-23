import { MimeTypesTool } from "@/components/tools/mime-types";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("mime-types", MimeTypesTool);

export { metadata };
export default Page;
