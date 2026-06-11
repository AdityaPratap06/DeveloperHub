"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { parseJsonWithError } from "@/lib/json-utils";

export function JsonValidatorTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ReturnType<typeof parseJsonWithError> | null>(null);

  const validate = (value: string) => {
    setResult(parseJsonWithError(value));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">JSON Input</label>
        <Textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value.trim()) validate(e.target.value);
            else setResult(null);
          }}
          className="mt-2 min-h-[250px] font-mono"
          placeholder="Paste JSON to validate..."
        />
      </div>

      {result && (
        <div className="rounded-lg border p-4">
          {result.error ? (
            <div className="space-y-2">
              <Badge variant="destructive">Invalid JSON</Badge>
              <p className="text-sm text-destructive">{result.error.message}</p>
              {(result.error.line || result.error.column) && (
                <p className="text-sm text-muted-foreground">
                  {result.error.line && `Line: ${result.error.line}`}
                  {result.error.line && result.error.column && " · "}
                  {result.error.column && `Column: ${result.error.column}`}
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <Badge variant="success">Valid JSON</Badge>
              <p className="text-sm text-muted-foreground">
                Type: {Array.isArray(result.data) ? "Array" : typeof result.data}
                {Array.isArray(result.data) && ` (${result.data.length} items)`}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
