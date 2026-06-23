"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/shared/copy-button";
import { HTTP_STATUS_CODES, searchHttpCodes } from "@/lib/http-status-codes";

const CATEGORY_COLORS: Record<string, string> = {
  Informational: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Redirection: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Client Error": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "Server Error": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

export function HttpStatusCodesTool() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchHttpCodes(query), [query]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Search status code, name, or category</Label>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="404, not found, server error..." />
      </div>
      <div className="space-y-2 max-h-[480px] overflow-auto">
        {results.map((code) => (
          <div key={code.code} className="rounded-lg border p-4 flex items-start justify-between gap-4 hover:bg-muted/30 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold font-mono">{code.code}</span>
                <span className="font-semibold">{code.name}</span>
                <Badge variant="outline" className={CATEGORY_COLORS[code.category]}>{code.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{code.description}</p>
            </div>
            <CopyButton text={String(code.code)} size="icon" variant="ghost" />
          </div>
        ))}
        {results.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No matching status codes</p>}
      </div>
    </div>
  );
}
