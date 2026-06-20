"use client";

import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";

const ALGORITHMS = ["MD5", "SHA1", "SHA256", "SHA512"] as const;

export function HashGeneratorTool() {
  const [input, setInput] = useState("DevToolsKit");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  useEffect(() => {
    setHashes({
      MD5: CryptoJS.MD5(input).toString(),
      SHA1: CryptoJS.SHA1(input).toString(),
      SHA256: CryptoJS.SHA256(input).toString(),
      SHA512: CryptoJS.SHA512(input).toString(),
    });
  }, [input]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Input Text</Label>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
        />
      </div>

      <div className="space-y-3">
        {ALGORITHMS.map((algo) => (
          <div key={algo} className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{algo}</span>
              <CopyButton text={hashes[algo] || ""} size="icon" variant="ghost" />
            </div>
            <p className="font-mono text-xs break-all text-muted-foreground">
              {hashes[algo]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
