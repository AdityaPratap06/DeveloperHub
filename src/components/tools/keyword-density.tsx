"use client";

import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { analyzeKeywordDensity } from "@/lib/text-utils";

export function KeywordDensityTool() {
  const [text, setText] = useState(
    "SEO keyword density analysis helps optimize content for search engines. Keyword research and keyword density are essential SEO practices for better rankings."
  );
  const [removeStopWords, setRemoveStopWords] = useState(true);

  const analysis = useMemo(
    () => analyzeKeywordDensity(text, removeStopWords),
    [text, removeStopWords]
  );

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked={removeStopWords} onCheckedChange={(c) => setRemoveStopWords(!!c)} />
        Remove stop words
      </label>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[140px]" placeholder="Paste your content..." />
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border p-4 text-center"><p className="text-2xl font-bold">{analysis.totalWords}</p><p className="text-xs text-muted-foreground">Total Words</p></div>
        <div className="rounded-lg border p-4 text-center"><p className="text-2xl font-bold">{analysis.uniqueWords}</p><p className="text-xs text-muted-foreground">Unique Words</p></div>
        <div className="rounded-lg border p-4 text-center"><p className="text-2xl font-bold">{analysis.frequencies[0]?.word ?? "—"}</p><p className="text-xs text-muted-foreground">Top Keyword</p></div>
      </div>
      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50"><tr><th className="text-left p-3">Word</th><th className="text-right p-3">Count</th><th className="text-right p-3">Density</th></tr></thead>
          <tbody>
            {analysis.frequencies.slice(0, 20).map((f) => (
              <tr key={f.word} className="border-t">
                <td className="p-3 font-medium">{f.word}</td>
                <td className="p-3 text-right">{f.count}</td>
                <td className="p-3 text-right">{f.density}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
