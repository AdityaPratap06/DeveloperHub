"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { JsonHighlight } from "@/components/shared/json-highlight";
import { ToolActions } from "@/components/shared/tool-actions";
import { formatJson, minifyJson } from "@/lib/json-utils";

export function JsonFormatterTool() {
  const [input, setInput] = useState('{"name":"DevToolsKit","tools":20,"free":true}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    const result = formatJson(input);
    if (result.error) {
      setError(result.error.message);
      setOutput("");
    } else {
      setError("");
      setOutput(result.output);
    }
  };

  useEffect(() => {
    handleFormat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMinify = () => {
    const result = minifyJson(input);
    if (result.error) {
      setError(result.error.message);
      setOutput("");
    } else {
      setError("");
      setOutput(result.output);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Input JSON</label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-2 min-h-[200px] font-mono"
          placeholder="Paste your JSON here..."
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={handleFormat}>Format</Button>
        <Button variant="secondary" onClick={handleMinify}>Minify</Button>
        <ToolActions
          output={output}
          showDownload
          downloadFilename="formatted.json"
          downloadMimeType="application/json"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div>
        <label className="text-sm font-medium">Output</label>
        <div className="mt-2">
          <JsonHighlight json={output} />
        </div>
      </div>
    </div>
  );
}
