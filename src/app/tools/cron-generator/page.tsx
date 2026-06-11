import { CronGeneratorTool } from "@/components/tools/cron-generator";
import { createToolPage } from "@/lib/create-tool-page";

const { metadata, Page } = createToolPage("cron-generator", CronGeneratorTool);

export { metadata };
export default Page;
