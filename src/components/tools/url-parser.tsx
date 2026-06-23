"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";
import { parseUrlParts } from "@/lib/text-utils";

export function UrlParserTool() {
  const [url, setUrl] = useState("https://example.com:8080/path/to/page?foo=bar&baz=1#section");

  const parsed = useMemo(() => parseUrlParts(url), [url]);

  if (!parsed.valid) {
    return (
      <div className="space-y-4">
        <div className="space-y-2"><Label>URL</Label><Input value={url} onChange={(e) => setUrl(e.target.value)} className="font-mono" /></div>
        <p className="text-sm text-destructive">Invalid URL. Include protocol or domain.</p>
      </div>
    );
  }

  const fields = [
    { label: "Full URL", value: parsed.href },
    { label: "Protocol", value: parsed.protocol },
    { label: "Hostname", value: parsed.hostname },
    { label: "Port", value: parsed.port },
    { label: "Pathname", value: parsed.pathname },
    { label: "Query String", value: parsed.search || "(none)" },
    { label: "Hash", value: parsed.hash || "(none)" },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2"><Label>URL</Label><Input value={url} onChange={(e) => setUrl(e.target.value)} className="font-mono" /></div>
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.label} className="rounded-lg border p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-muted-foreground">{f.label}</span>
              <CopyButton text={f.value} size="icon" variant="ghost" />
            </div>
            <p className="font-mono text-sm break-all">{f.value}</p>
          </div>
        ))}
      </div>
      {Object.keys(parsed.params).length > 0 && (
        <div className="rounded-lg border p-4">
          <Label className="mb-3 block">Query Parameters</Label>
          <div className="space-y-2">
            {Object.entries(parsed.params).map(([k, v]) => (
              <div key={k} className="flex gap-2 text-sm font-mono">
                <span className="text-primary">{k}</span>
                <span className="text-muted-foreground">=</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
