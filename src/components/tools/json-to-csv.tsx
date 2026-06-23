"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileUploadButton } from "@/components/shared/file-upload-button";
import { ToolActions } from "@/components/shared/tool-actions";
import { DownloadButton } from "@/components/shared/download-button";
import { jsonToCsv } from "@/lib/converters/json-csv";

export function JsonToCsvTool() {
  const [input, setInput] = useState('[{"name":"Alice","email":"alice@example.com"},{"name":"Bob","email":"bob@example.com"}]');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      setOutput(jsonToCsv(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <FileUploadButton accept=".json" onFile={(c) => { setInput(c); convert(c); }} />
        <Button onClick={() => convert(input)}>Convert to CSV</Button>
      </div>
      <div className="space-y-2">
        <Label>JSON Input</Label>
        <Textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[160px] font-mono text-sm" />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <ToolActions output={output} />
      <DownloadButton content={output} filename="data.csv" mimeType="text/csv" label="Download CSV" />
      <Textarea value={output} readOnly className="min-h-[160px] font-mono text-sm" placeholder="CSV output..." />
    </div>
  );
}
