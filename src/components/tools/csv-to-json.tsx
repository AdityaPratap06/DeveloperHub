"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileUploadButton } from "@/components/shared/file-upload-button";
import { ToolActions } from "@/components/shared/tool-actions";
import { csvToJson } from "@/lib/converters/json-csv";

export function CsvToJsonTool() {
  const [input, setInput] = useState("name,email\nAlice,alice@example.com\nBob,bob@example.com");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = (csv: string) => {
    try {
      const parsed = csvToJson(csv);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <FileUploadButton accept=".csv,.txt" onFile={(c) => { setInput(c); convert(c); }} />
        <Button onClick={() => convert(input)}>Convert to JSON</Button>
      </div>
      <div className="space-y-2">
        <Label>CSV Input</Label>
        <Textarea value={input} onChange={(e) => setInput(e.target.value)} className="min-h-[160px] font-mono text-sm" />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <ToolActions output={output} showDownload downloadFilename="data.json" downloadMimeType="application/json" />
      <Textarea value={output} readOnly className="min-h-[200px] font-mono text-sm" placeholder="JSON output..." />
    </div>
  );
}
