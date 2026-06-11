"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToolActions } from "@/components/shared/tool-actions";

const WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum",
];

function generateWords(count: number): string {
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(WORDS[i % WORDS.length]);
  }
  return result.join(" ");
}

function generateParagraphs(count: number): string {
  return Array.from({ length: count }, () => {
    const sentences = Math.floor(Math.random() * 3) + 3;
    return Array.from({ length: sentences }, () => {
      const wordCount = Math.floor(Math.random() * 10) + 8;
      const words = generateWords(wordCount);
      return words.charAt(0).toUpperCase() + words.slice(1) + ".";
    }).join(" ");
  }).join("\n\n");
}

export function LoremIpsumTool() {
  const [paragraphCount, setParagraphCount] = useState(3);
  const [wordCount, setWordCount] = useState(50);
  const [paragraphOutput, setParagraphOutput] = useState("");
  const [wordOutput, setWordOutput] = useState("");

  return (
    <Tabs defaultValue="paragraphs">
      <TabsList>
        <TabsTrigger value="paragraphs">Paragraphs</TabsTrigger>
        <TabsTrigger value="words">Words</TabsTrigger>
      </TabsList>

      <TabsContent value="paragraphs" className="space-y-4">
        <div className="flex items-end gap-4">
          <div className="space-y-2">
            <Label>Paragraph Count</Label>
            <Input
              type="number"
              min={1}
              max={20}
              value={paragraphCount}
              onChange={(e) => setParagraphCount(parseInt(e.target.value) || 1)}
              className="w-32"
            />
          </div>
          <Button onClick={() => setParagraphOutput(generateParagraphs(paragraphCount))}>
            Generate
          </Button>
        </div>
        <ToolActions output={paragraphOutput} />
        <Textarea value={paragraphOutput} readOnly className="min-h-[200px]" />
      </TabsContent>

      <TabsContent value="words" className="space-y-4">
        <div className="flex items-end gap-4">
          <div className="space-y-2">
            <Label>Word Count</Label>
            <Input
              type="number"
              min={1}
              max={1000}
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value) || 1)}
              className="w-32"
            />
          </div>
          <Button onClick={() => setWordOutput(generateWords(wordCount))}>
            Generate
          </Button>
        </div>
        <ToolActions output={wordOutput} />
        <Textarea value={wordOutput} readOnly className="min-h-[200px]" />
      </TabsContent>
    </Tabs>
  );
}
