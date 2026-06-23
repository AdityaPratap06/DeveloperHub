"use client";

import { useMemo, useState } from "react";
import { marked } from "marked";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyButton } from "@/components/shared/copy-button";

const DEFAULT_MD = `# Markdown Preview

Write **bold**, *italic*, and \`code\` here.

## Features
- Live GitHub-style rendering
- Copy HTML output
- 100% client-side

\`\`\`javascript
console.log("Hello DevToolsKit!");
\`\`\`
`;

export function MarkdownPreviewTool() {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);

  const html = useMemo(() => {
    try {
      return marked.parse(markdown, { async: false }) as string;
    } catch {
      return "<p>Invalid markdown</p>";
    }
  }, [markdown]);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="split">
        <TabsList>
          <TabsTrigger value="split">Split View</TabsTrigger>
          <TabsTrigger value="preview">Preview Only</TabsTrigger>
          <TabsTrigger value="html">HTML Output</TabsTrigger>
        </TabsList>
        <TabsContent value="split">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <Label>Markdown</Label>
              <Textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} className="min-h-[320px] font-mono text-sm" />
            </div>
            <div className="space-y-2">
              <Label>Preview</Label>
              <div
                className="prose prose-zinc dark:prose-invert max-w-none min-h-[320px] rounded-lg border bg-muted/20 p-4 overflow-auto text-sm"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <div className="prose prose-zinc dark:prose-invert max-w-none rounded-lg border p-6" dangerouslySetInnerHTML={{ __html: html }} />
        </TabsContent>
        <TabsContent value="html">
          <div className="flex justify-end mb-2"><CopyButton text={html} label="Copy HTML" /></div>
          <Textarea value={html} readOnly className="min-h-[320px] font-mono text-sm" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
