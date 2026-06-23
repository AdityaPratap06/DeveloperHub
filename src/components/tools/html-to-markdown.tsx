"use client";

import { useMemo, useState } from "react";
import TurndownService from "turndown";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";

const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });

export function HtmlToMarkdownTool() {
  const [html, setHtml] = useState(`<h1>Hello World</h1>
<p>This is a <strong>paragraph</strong> with a <a href="https://example.com">link</a>.</p>
<ul><li>Item one</li><li>Item two</li></ul>`);

  const markdown = useMemo(() => {
    try {
      return turndown.turndown(html);
    } catch {
      return "";
    }
  }, [html]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <Label>HTML Input</Label>
          <Textarea value={html} onChange={(e) => setHtml(e.target.value)} className="min-h-[280px] font-mono text-sm" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Markdown Output</Label>
            <CopyButton text={markdown} />
          </div>
          <Textarea value={markdown} readOnly className="min-h-[280px] font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
