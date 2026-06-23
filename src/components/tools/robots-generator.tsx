"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { generateRobotsTxt } from "@/lib/text-utils";

export function RobotsGeneratorTool() {
  const [userAgent, setUserAgent] = useState("*");
  const [allow, setAllow] = useState("/");
  const [disallow, setDisallow] = useState("/admin\n/private");
  const [sitemap, setSitemap] = useState("https://example.com/sitemap.xml");

  const output = useMemo(
    () =>
      generateRobotsTxt(
        [{ userAgent, allow: allow.split("\n").filter(Boolean), disallow: disallow.split("\n").filter(Boolean) }],
        sitemap || undefined
      ),
    [userAgent, allow, disallow, sitemap]
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label>User-agent</Label><Input value={userAgent} onChange={(e) => setUserAgent(e.target.value)} /></div>
        <div className="space-y-2"><Label>Sitemap URL</Label><Input value={sitemap} onChange={(e) => setSitemap(e.target.value)} /></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label>Allow (one per line)</Label><Textarea value={allow} onChange={(e) => setAllow(e.target.value)} rows={4} className="font-mono text-sm" /></div>
        <div className="space-y-2"><Label>Disallow (one per line)</Label><Textarea value={disallow} onChange={(e) => setDisallow(e.target.value)} rows={4} className="font-mono text-sm" /></div>
      </div>
      <CopyButton text={output} label="Copy robots.txt" />
      <Textarea value={output} readOnly className="font-mono text-sm min-h-[160px]" />
    </div>
  );
}
