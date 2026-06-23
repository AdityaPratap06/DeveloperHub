"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";
import { buildUtmUrl } from "@/lib/text-utils";

export function UtmBuilderTool() {
  const [baseUrl, setBaseUrl] = useState("https://example.com/landing");
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("spring_sale");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");

  const utmUrl = useMemo(() => {
    try {
      return buildUtmUrl(baseUrl, { source, medium, campaign, term: term || undefined, content: content || undefined });
    } catch {
      return "";
    }
  }, [baseUrl, source, medium, campaign, term, content]);

  return (
    <div className="space-y-4">
      <div className="space-y-2"><Label>Base URL *</Label><Input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} className="font-mono" /></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label>utm_source *</Label><Input value={source} onChange={(e) => setSource(e.target.value)} placeholder="google, newsletter" /></div>
        <div className="space-y-2"><Label>utm_medium *</Label><Input value={medium} onChange={(e) => setMedium(e.target.value)} placeholder="cpc, email, social" /></div>
        <div className="space-y-2"><Label>utm_campaign *</Label><Input value={campaign} onChange={(e) => setCampaign(e.target.value)} placeholder="spring_sale" /></div>
        <div className="space-y-2"><Label>utm_term</Label><Input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="keyword" /></div>
        <div className="space-y-2 sm:col-span-2"><Label>utm_content</Label><Input value={content} onChange={(e) => setContent(e.target.value)} placeholder="banner_a" /></div>
      </div>
      <div className="rounded-xl border bg-muted/30 p-4">
        <div className="flex items-center justify-between mb-2"><Label>Generated URL</Label><CopyButton text={utmUrl} /></div>
        <p className="font-mono text-sm break-all">{utmUrl || "Enter a valid base URL"}</p>
      </div>
    </div>
  );
}
