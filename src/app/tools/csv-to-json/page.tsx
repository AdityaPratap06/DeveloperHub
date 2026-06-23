import { CsvToJsonTool } from "@/components/tools/csv-to-json";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("csv-to-json", CsvToJsonTool);

export { metadata };
export default Page;
