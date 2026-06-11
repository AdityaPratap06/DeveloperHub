"use client";

import { useMemo, useState } from "react";
import * as Diff from "diff";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextDiffTool() {
  const [text1, setText1] = useState("The quick brown fox\njumps over the lazy dog.");
  const [text2, setText2] = useState("The quick brown cat\njumps over the lazy dog.");

  const diff = useMemo(() => Diff.diffWords(text1, text2), [text1, text2]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Original Text</Label>
          <Textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label>Modified Text</Label>
          <Textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Differences</Label>
        <pre className="min-h-[150px] rounded-lg border bg-muted/30 p-4 text-sm whitespace-pre-wrap font-mono">
          {diff.map((part, i) => (
            <span
              key={i}
              className={
                part.added
                  ? "diff-added"
                  : part.removed
                    ? "diff-removed"
                    : ""
              }
            >
              {part.value}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}
