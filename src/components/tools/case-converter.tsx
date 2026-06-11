"use client";

import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/shared/copy-button";

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
}

function toPascalCase(str: string): string {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .toLowerCase()
    .replace(/^_|_$/g, "");
}

function toKebabCase(str: string): string {
  return toSnakeCase(str).replace(/_/g, "-");
}

const CASES = [
  { label: "camelCase", fn: toCamelCase },
  { label: "PascalCase", fn: toPascalCase },
  { label: "snake_case", fn: toSnakeCase },
  { label: "kebab-case", fn: toKebabCase },
  { label: "UPPERCASE", fn: (s: string) => s.toUpperCase() },
  { label: "lowercase", fn: (s: string) => s.toLowerCase() },
];

export function CaseConverterTool() {
  const [input, setInput] = useState("hello world example");

  const results = useMemo(
    () => CASES.map((c) => ({ label: c.label, value: c.fn(input) })),
    [input]
  );

  return (
    <div className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to convert..."
        className="min-h-[100px]"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {results.map((result) => (
          <div key={result.label} className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">{result.label}</span>
              <CopyButton text={result.value} size="icon" variant="ghost" />
            </div>
            <p className="font-mono text-sm break-all">{result.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
