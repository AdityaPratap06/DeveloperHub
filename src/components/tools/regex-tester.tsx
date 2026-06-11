"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const FLAG_OPTIONS = [
  { id: "g", label: "Global (g)" },
  { id: "i", label: "Case insensitive (i)" },
  { id: "m", label: "Multiline (m)" },
  { id: "s", label: "Dotall (s)" },
];

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("\\w+");
  const [testString, setTestString] = useState("Hello World 123");
  const [flags, setFlags] = useState<string[]>(["g"]);

  const result = useMemo(() => {
    if (!pattern) return { error: null, matches: [] as RegExpMatchArray[], highlighted: testString };

    try {
      const regex = new RegExp(pattern, flags.join(""));
      const matches = [...testString.matchAll(regex)];
      let highlighted = testString;
      let offset = 0;

      const sorted = [...matches].sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

      for (const match of sorted) {
        if (match.index === undefined) continue;
        const start = match.index + offset;
        const end = start + match[0].length;
        highlighted =
          highlighted.slice(0, start) +
          `<mark class="regex-match">${match[0]}</mark>` +
          highlighted.slice(end);
        offset += '<mark class="regex-match"></mark>'.length - match[0].length + match[0].length;
      }

      // Simpler highlight approach
      let html = "";
      let lastIndex = 0;
      for (const match of sorted) {
        if (match.index === undefined) continue;
        html += escapeHtml(testString.slice(lastIndex, match.index));
        html += `<mark class="regex-match">${escapeHtml(match[0])}</mark>`;
        lastIndex = match.index + match[0].length;
      }
      html += escapeHtml(testString.slice(lastIndex));

      return { error: null, matches, highlighted: html };
    } catch (e) {
      return { error: (e as Error).message, matches: [] as RegExpMatchArray[], highlighted: testString };
    }
  }, [pattern, testString, flags]);

  const toggleFlag = (flag: string) => {
    setFlags((prev) =>
      prev.includes(flag) ? prev.filter((f) => f !== flag) : [...prev, flag]
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Regular Expression</Label>
        <Input
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="font-mono"
          placeholder="Enter regex pattern..."
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {FLAG_OPTIONS.map((flag) => (
          <label key={flag.id} className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={flags.includes(flag.id)}
              onCheckedChange={() => toggleFlag(flag.id)}
            />
            {flag.label}
          </label>
        ))}
      </div>

      <div className="space-y-2">
        <Label>Test String</Label>
        <Textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          className="min-h-[120px]"
        />
      </div>

      {result.error && <p className="text-sm text-destructive">{result.error}</p>}

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label>Matches</Label>
          <Badge variant="secondary">{result.matches.length} found</Badge>
        </div>
        <pre
          className="min-h-[80px] rounded-lg border bg-muted/30 p-4 text-sm whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: result.highlighted }}
        />
      </div>

      {result.matches.length > 0 && (
        <div className="space-y-2">
          <Label>Match Details</Label>
          <div className="rounded-lg border divide-y max-h-48 overflow-auto">
            {result.matches.map((match, i) => (
              <div key={i} className="px-4 py-2 text-sm font-mono">
                <span className="text-muted-foreground">#{i + 1}</span> &quot;{match[0]}&quot;
                {match.index !== undefined && (
                  <span className="text-muted-foreground ml-2">@ index {match.index}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
