"use client";

import { useMemo, useState } from "react";
import * as Diff from "diff";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TextCompareTool() {
  const [left, setLeft] = useState("The quick brown fox jumps over the lazy dog.");
  const [right, setRight] = useState("The quick brown cat jumps over the lazy dog!");

  const charDiff = useMemo(() => Diff.diffChars(left, right), [left, right]);
  const wordDiff = useMemo(() => Diff.diffWords(left, right), [left, right]);

  const renderDiff = (parts: Diff.Change[]) =>
    parts.map((part, i) => (
      <span key={i} className={part.added ? "diff-added" : part.removed ? "diff-removed" : ""}>{part.value}</span>
    ));

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2"><Label>Text A</Label><Textarea value={left} onChange={(e) => setLeft(e.target.value)} className="min-h-[160px] font-mono text-sm" /></div>
        <div className="space-y-2"><Label>Text B</Label><Textarea value={right} onChange={(e) => setRight(e.target.value)} className="min-h-[160px] font-mono text-sm" /></div>
      </div>
      <Tabs defaultValue="side">
        <TabsList>
          <TabsTrigger value="side">Side by Side</TabsTrigger>
          <TabsTrigger value="char">Character Diff</TabsTrigger>
          <TabsTrigger value="word">Word Diff</TabsTrigger>
        </TabsList>
        <TabsContent value="side">
          <div className="grid gap-4 md:grid-cols-2">
            <pre className="rounded-lg border bg-red-50/50 dark:bg-red-950/20 p-4 text-sm font-mono whitespace-pre-wrap min-h-[120px]">{left}</pre>
            <pre className="rounded-lg border bg-green-50/50 dark:bg-green-950/20 p-4 text-sm font-mono whitespace-pre-wrap min-h-[120px]">{right}</pre>
          </div>
        </TabsContent>
        <TabsContent value="char">
          <pre className="rounded-lg border bg-muted/30 p-4 text-sm font-mono whitespace-pre-wrap min-h-[120px]">{renderDiff(charDiff)}</pre>
        </TabsContent>
        <TabsContent value="word">
          <pre className="rounded-lg border bg-muted/30 p-4 text-sm font-mono whitespace-pre-wrap min-h-[120px]">{renderDiff(wordDiff)}</pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
