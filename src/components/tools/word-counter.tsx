"use client";

import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { analyzeText } from "@/lib/text-utils";

export function WordCounterTool() {
  const [text, setText] = useState("Paste or type your text here to analyze word count, reading time, and more.");

  const stats = useMemo(() => analyzeText(text), [text]);

  const items = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "Characters (no spaces)", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading Time", value: `${stats.readingTimeMinutes} min` },
    { label: "Speaking Time", value: `${stats.speakingTimeMinutes} min` },
  ];

  return (
    <div className="space-y-4">
      <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-[180px]" placeholder="Enter text to analyze..." />
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border bg-card p-4 text-center shadow-sm">
            <p className="text-2xl font-bold tracking-tight">{item.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
