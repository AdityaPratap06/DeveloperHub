"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToolActions } from "@/components/shared/tool-actions";

export function UuidGeneratorTool() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([uuidv4()]);

  const generate = () => {
    const num = Math.min(Math.max(count, 1), 100);
    setUuids(Array.from({ length: num }, () => uuidv4()));
  };

  const output = uuids.join("\n");

  return (
    <div className="space-y-4">
      <div className="flex items-end gap-4">
        <div className="space-y-2">
          <Label htmlFor="count">Number of UUIDs</Label>
          <Input
            id="count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="w-32"
          />
        </div>
        <Button onClick={generate}>Generate</Button>
      </div>

      <ToolActions output={output} copyLabel="Copy All" />

      <Textarea value={output} readOnly className="min-h-[200px] font-mono" />
    </div>
  );
}
