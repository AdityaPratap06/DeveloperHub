"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CopyButton } from "@/components/shared/copy-button";
import { generateSlug } from "@/lib/slug";

export function SlugGeneratorTool() {
  const [title, setTitle] = useState("How to Format JSON — Complete Guide 2026");
  const [separator, setSeparator] = useState("-");
  const [lowercase, setLowercase] = useState(true);
  const [removeStopWords, setRemoveStopWords] = useState(false);

  const slug = useMemo(
    () => generateSlug(title, { separator, lowercase, removeStopWords }),
    [title, separator, lowercase, removeStopWords]
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Title / Text</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Separator</Label>
          <Select value={separator} onValueChange={setSeparator}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="-">Hyphen (-)</SelectItem>
              <SelectItem value="_">Underscore (_)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3 pt-6">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked={lowercase} onCheckedChange={(c) => setLowercase(!!c)} /> Lowercase
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked={removeStopWords} onCheckedChange={(c) => setRemoveStopWords(!!c)} /> Remove stop words
          </label>
        </div>
      </div>
      <div className="rounded-xl border bg-muted/30 p-6">
        <div className="flex items-center justify-between mb-2">
          <Label>SEO Slug</Label>
          <CopyButton text={slug} />
        </div>
        <p className="font-mono text-lg break-all">{slug || "..."}</p>
      </div>
    </div>
  );
}
