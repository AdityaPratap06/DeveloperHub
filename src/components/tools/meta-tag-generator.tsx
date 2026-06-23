"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/shared/copy-button";
import { generateMetaTags } from "@/lib/text-utils";

export function MetaTagGeneratorTool() {
  const [title, setTitle] = useState("Free JSON Formatter Online | DevToolsKit");
  const [description, setDescription] = useState("Format and beautify JSON instantly in your browser. Free, private, no signup.");
  const [keywords, setKeywords] = useState("json formatter, json beautifier, online json tool");
  const [robots, setRobots] = useState("index, follow");
  const [canonical, setCanonical] = useState("https://example.com/tools/json-formatter");

  const html = useMemo(
    () => generateMetaTags({ title, description, keywords, robots, canonical }),
    [title, description, keywords, robots, canonical]
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label>SEO Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div className="space-y-2"><Label>Robots</Label><Input value={robots} onChange={(e) => setRobots(e.target.value)} /></div>
      </div>
      <div className="space-y-2"><Label>Meta Description</Label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} /></div>
      <div className="space-y-2"><Label>Keywords</Label><Input value={keywords} onChange={(e) => setKeywords(e.target.value)} /></div>
      <div className="space-y-2"><Label>Canonical URL</Label><Input value={canonical} onChange={(e) => setCanonical(e.target.value)} /></div>
      <div className="flex justify-end"><CopyButton text={html} label="Copy HTML" /></div>
      <Textarea value={html} readOnly className="min-h-[140px] font-mono text-sm" />
    </div>
  );
}
