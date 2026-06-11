"use client";

import { useState } from "react";
import { js as beautifyJs, css as beautifyCss, html as beautifyHtml } from "js-beautify";
import { format as formatSql } from "sql-formatter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToolActions } from "@/components/shared/tool-actions";

type FormatterType = "sql" | "html" | "css" | "javascript";

interface CodeFormatterToolProps {
  type: FormatterType;
  defaultInput: string;
  downloadExt: string;
}

function beautify(type: FormatterType, input: string): string {
  switch (type) {
    case "sql":
      return formatSql(input, { language: "sql" });
    case "html":
      return beautifyHtml(input, { indent_size: 2, wrap_line_length: 0 });
    case "css":
      return beautifyCss(input, { indent_size: 2 });
    case "javascript":
      return beautifyJs(input, { indent_size: 2 });
  }
}

function minify(type: FormatterType, input: string): string {
  switch (type) {
    case "sql":
      return input.replace(/\s+/g, " ").replace(/\s*([,;(){}])\s*/g, "$1").trim();
    case "html":
      return input.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();
    case "css":
      return input.replace(/\s+/g, " ").replace(/\s*([{}:;,])\s*/g, "$1").trim();
    case "javascript":
      return input.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*/g, "").replace(/\s+/g, " ").trim();
  }
}

export function CodeFormatterTool({ type, defaultInput, downloadExt }: CodeFormatterToolProps) {
  const [input, setInput] = useState(defaultInput);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleBeautify = () => {
    try {
      setOutput(beautify(type, input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const handleMinify = () => {
    try {
      setOutput(minify(type, input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[200px] font-mono text-sm"
        placeholder={`Paste your ${type.toUpperCase()} here...`}
      />

      <div className="flex flex-wrap gap-2">
        <Button onClick={handleBeautify}>Beautify</Button>
        <Button variant="secondary" onClick={handleMinify}>Minify</Button>
        <ToolActions
          output={output}
          showDownload
          downloadFilename={`formatted.${downloadExt}`}
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Textarea
        value={output}
        readOnly
        className="min-h-[200px] font-mono text-sm"
        placeholder="Output will appear here..."
      />
    </div>
  );
}
