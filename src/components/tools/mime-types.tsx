"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";
import { MIME_TYPES, searchMimeTypes } from "@/lib/mime-types";

export function MimeTypesTool() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchMimeTypes(query), [query]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Search by extension or MIME type</Label>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder=".json, image/png, application..." />
      </div>
      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 sticky top-0">
            <tr>
              <th className="text-left p-3">Extension</th>
              <th className="text-left p-3">MIME Type</th>
              <th className="text-left p-3 hidden sm:table-cell">Description</th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {results.map((m) => (
              <tr key={m.extension + m.mimeType} className="border-t hover:bg-muted/20">
                <td className="p-3 font-mono font-medium">{m.extension}</td>
                <td className="p-3 font-mono text-muted-foreground">{m.mimeType}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">{m.description}</td>
                <td className="p-3"><CopyButton text={m.mimeType} size="icon" variant="ghost" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {results.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No matching MIME types</p>}
      </div>
    </div>
  );
}
