"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DownloadButton } from "@/components/shared/download-button";
import { compareJson, exportDiffReport } from "@/lib/json-compare";
import { cn } from "@/lib/utils";

export function JsonCompareTool() {
  const [left, setLeft] = useState('{"name":"Alice","age":30,"role":"admin"}');
  const [right, setRight] = useState('{"name":"Alice","age":31,"role":"admin","active":true}');
  const [ignoreOrder, setIgnoreOrder] = useState(true);
  const [error, setError] = useState("");

  const result = useMemo(() => {
    try {
      const a = JSON.parse(left);
      const b = JSON.parse(right);
      setError("");
      return compareJson(a, b, ignoreOrder);
    } catch (e) {
      setError((e as Error).message);
      return [];
    }
  }, [left, right, ignoreOrder]);

  const changes = result.filter((d) => d.type !== "unchanged");
  const report = exportDiffReport(result);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="ignore" checked={ignoreOrder} onCheckedChange={(c) => setIgnoreOrder(!!c)} />
        <Label htmlFor="ignore">Ignore key order</Label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>JSON A</Label>
          <Textarea value={left} onChange={(e) => setLeft(e.target.value)} className="min-h-[180px] font-mono text-sm" />
        </div>
        <div className="space-y-2">
          <Label>JSON B</Label>
          <Textarea value={right} onChange={(e) => setRight(e.target.value)} className="min-h-[180px] font-mono text-sm" />
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="flex gap-2">
        <DownloadButton content={report} filename="json-diff-report.txt" label="Export Diff Report" />
        <span className="text-sm text-muted-foreground self-center">{changes.length} difference(s)</span>
      </div>
      <Tabs defaultValue="tree">
        <TabsList>
          <TabsTrigger value="tree">Tree View</TabsTrigger>
          <TabsTrigger value="side">Side by Side</TabsTrigger>
        </TabsList>
        <TabsContent value="tree">
          <div className="rounded-lg border divide-y max-h-80 overflow-auto">
            {result.map((d, i) => (
              <div key={i} className={cn("px-4 py-2 text-sm font-mono", {
                "bg-green-50 dark:bg-green-950/30": d.type === "added",
                "bg-red-50 dark:bg-red-950/30": d.type === "removed",
                "bg-yellow-50 dark:bg-yellow-950/30": d.type === "changed",
              })}>
                <span className="text-xs uppercase text-muted-foreground mr-2">[{d.type}]</span>
                <span className="font-semibold">{d.path}</span>
                {d.type === "changed" && (
                  <div className="mt-1 text-xs text-muted-foreground">
                    {JSON.stringify(d.oldValue)} → {JSON.stringify(d.newValue)}
                  </div>
                )}
                {d.type === "added" && <div className="mt-1 text-xs">{JSON.stringify(d.newValue)}</div>}
                {d.type === "removed" && <div className="mt-1 text-xs">{JSON.stringify(d.oldValue)}</div>}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="side">
          <div className="grid gap-4 md:grid-cols-2">
            <pre className="rounded-lg border bg-muted/30 p-4 text-xs font-mono overflow-auto max-h-80">{left}</pre>
            <pre className="rounded-lg border bg-muted/30 p-4 text-xs font-mono overflow-auto max-h-80">{right}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
