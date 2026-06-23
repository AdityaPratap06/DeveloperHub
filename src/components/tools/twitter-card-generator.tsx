"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CopyButton } from "@/components/shared/copy-button";
import { generateTwitterTags } from "@/lib/text-utils";

export function TwitterCardGeneratorTool() {
  const [card, setCard] = useState("summary_large_image");
  const [title, setTitle] = useState("DevToolsKit — Free Developer Tools");
  const [description, setDescription] = useState("40+ free online developer tools running in your browser.");
  const [image, setImage] = useState("https://example.com/twitter-card.png");

  const tags = useMemo(() => generateTwitterTags({ card, title, description, image }), [card, title, description, image]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Card Type</Label>
            <Select value={card} onValueChange={setCard}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="summary">Summary</SelectItem>
                <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
          <div className="space-y-2"><Label>Description</Label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} /></div>
          <div className="space-y-2"><Label>Image URL</Label><Input value={image} onChange={(e) => setImage(e.target.value)} /></div>
          <CopyButton text={tags} label="Copy Twitter Tags" />
          <Textarea value={tags} readOnly className="font-mono text-sm min-h-[100px]" />
        </div>
        <div className="space-y-2">
          <Label>Preview</Label>
          <div className="rounded-2xl border overflow-hidden bg-card max-w-md">
            {card === "summary_large_image" && image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="w-full h-44 object-cover bg-muted" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            )}
            <div className="p-4">
              <p className="font-bold line-clamp-2">{title}</p>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-3">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
