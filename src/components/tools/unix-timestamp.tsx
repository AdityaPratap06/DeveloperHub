"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";

export function UnixTimestampTool() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [timestamp, setTimestamp] = useState(String(Math.floor(Date.now() / 1000)));
  const [dateInput, setDateInput] = useState(new Date().toISOString().slice(0, 19));

  useEffect(() => {
    const interval = setInterval(() => {
      const current = Math.floor(Date.now() / 1000);
      setNow(current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timestampToDate = (ts: string) => {
    const num = parseInt(ts, 10);
    if (isNaN(num)) return "Invalid timestamp";
    const ms = ts.length > 10 ? num : num * 1000;
    return new Date(ms).toLocaleString();
  };

  const dateToTimestamp = (date: string) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "Invalid date";
    return String(Math.floor(d.getTime() / 1000));
  };

  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-muted/30 p-6 text-center">
        <p className="text-sm text-muted-foreground mb-1">Current Unix Timestamp</p>
        <p className="text-3xl font-mono font-bold">{now}</p>
        <p className="text-sm text-muted-foreground mt-1">{new Date(now * 1000).toLocaleString()}</p>
        <div className="mt-2">
          <CopyButton text={String(now)} label="Copy" variant="ghost" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border p-4">
          <Label>Timestamp to Date</Label>
          <Input
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="Unix timestamp"
            className="font-mono"
          />
          <p className="text-sm">
            <span className="text-muted-foreground">Result: </span>
            <span className="font-medium">{timestampToDate(timestamp)}</span>
          </p>
        </div>

        <div className="space-y-3 rounded-lg border p-4">
          <Label>Date to Timestamp</Label>
          <Input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
          <p className="text-sm">
            <span className="text-muted-foreground">Result: </span>
            <span className="font-mono font-medium">{dateToTimestamp(dateInput)}</span>
          </p>
          <CopyButton text={dateToTimestamp(dateInput)} label="Copy Timestamp" variant="outline" />
        </div>
      </div>
    </div>
  );
}
