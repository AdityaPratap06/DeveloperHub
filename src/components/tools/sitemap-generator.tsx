"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CopyButton } from "@/components/shared/copy-button";
import { DownloadButton } from "@/components/shared/download-button";
import { generateSitemapXml, type SitemapUrl } from "@/lib/text-utils";

export function SitemapGeneratorTool() {
  const [urls, setUrls] = useState("https://example.com/\nhttps://example.com/about\nhttps://example.com/tools/json-formatter");
  const [priority, setPriority] = useState("0.8");
  const [changefreq, setChangefreq] = useState("weekly");

  const xml = useMemo(() => {
    const entries: SitemapUrl[] = urls.split("\n").filter(Boolean).map((loc) => ({
      loc: loc.trim(),
      priority,
      changefreq,
    }));
    return generateSitemapXml(entries);
  }, [urls, priority, changefreq]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Default Priority</Label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {["1.0", "0.8", "0.6", "0.4"].map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Change Frequency</Label>
          <Select value={changefreq} onValueChange={setChangefreq}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {["always", "hourly", "daily", "weekly", "monthly", "yearly"].map((f) => (
                <SelectItem key={f} value={f}>{f}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>URLs (one per line)</Label>
        <Textarea value={urls} onChange={(e) => setUrls(e.target.value)} className="min-h-[140px] font-mono text-sm" />
      </div>
      <div className="flex gap-2">
        <CopyButton text={xml} label="Copy XML" />
        <DownloadButton content={xml} filename="sitemap.xml" mimeType="application/xml" label="Download XML" />
      </div>
      <Textarea value={xml} readOnly className="min-h-[200px] font-mono text-sm" />
    </div>
  );
}
