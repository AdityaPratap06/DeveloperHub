"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/shared/copy-button";
import { generateOgTags } from "@/lib/text-utils";

export function OpenGraphGeneratorTool() {
  const [title, setTitle] = useState("DevToolsKit — Free Developer Tools");
  const [description, setDescription] = useState("40+ free online developer tools. JSON, JWT, SEO utilities — all in your browser.");
  const [image, setImage] = useState("https://example.com/og-image.png");
  const [url, setUrl] = useState("https://example.com");

  const tags = useMemo(() => generateOgTags({ title, description, image, url }), [title, description, image, url]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2"><Label>OG Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} /></div>
          <div className="space-y-2"><Label>OG Description</Label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} /></div>
          <div className="space-y-2"><Label>Image URL</Label><Input value={image} onChange={(e) => setImage(e.target.value)} /></div>
          <div className="space-y-2"><Label>Page URL</Label><Input value={url} onChange={(e) => setUrl(e.target.value)} /></div>
          <CopyButton text={tags} label="Copy OG Tags" />
          <Textarea value={tags} readOnly className="font-mono text-sm min-h-[120px]" />
        </div>
        <div className="space-y-2">
          <Label>Preview Card</Label>
          <div className="rounded-xl border overflow-hidden bg-card shadow-card max-w-md">
            {image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="w-full h-40 object-cover bg-muted" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            )}
            <div className="p-4 border-t">
              <p className="text-xs text-muted-foreground uppercase">{(() => { try { return new URL(url.startsWith("http") ? url : `https://${url}`).hostname; } catch { return "example.com"; } })()}</p>
              <p className="font-semibold mt-1 line-clamp-2">{title}</p>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
