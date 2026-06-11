"use client";

import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { JsonHighlight } from "@/components/shared/json-highlight";
import { CopyButton } from "@/components/shared/copy-button";

function decodeBase64Url(str: string): string {
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  return decodeURIComponent(
    atob(padded)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
}

export function JwtDecoderTool() {
  const [token, setToken] = useState("");

  const decoded = useMemo(() => {
    if (!token.trim()) return null;

    const parts = token.trim().split(".");
    if (parts.length !== 3) {
      return { error: "Invalid JWT format. Expected 3 parts separated by dots." };
    }

    try {
      const header = JSON.parse(decodeBase64Url(parts[0]));
      const payload = JSON.parse(decodeBase64Url(parts[1]));
      let expiration: string | null = null;

      if (payload.exp) {
        const expDate = new Date(payload.exp * 1000);
        const isExpired = expDate < new Date();
        expiration = `${expDate.toLocaleString()} ${isExpired ? "(Expired)" : "(Valid)"}`;
      }

      return { header, payload, expiration, signature: parts[2] };
    } catch {
      return { error: "Failed to decode JWT. Check that the token is valid." };
    }
  }, [token]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">JWT Token</label>
        <Textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="mt-2 min-h-[100px] font-mono text-xs"
          placeholder="Paste your JWT token here..."
        />
      </div>

      {decoded && "error" in decoded && (
        <p className="text-sm text-destructive">{decoded.error}</p>
      )}

      {decoded && !("error" in decoded) && (
        <div className="space-y-6">
          {decoded.expiration && (
            <div className="rounded-lg border p-4">
              <h3 className="text-sm font-medium mb-2">Expiration</h3>
              <Badge variant={decoded.expiration.includes("Expired") ? "destructive" : "success"}>
                {decoded.expiration}
              </Badge>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Header</h3>
              <CopyButton text={JSON.stringify(decoded.header, null, 2)} size="icon" variant="ghost" />
            </div>
            <JsonHighlight json={JSON.stringify(decoded.header, null, 2)} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Payload</h3>
              <CopyButton text={JSON.stringify(decoded.payload, null, 2)} size="icon" variant="ghost" />
            </div>
            <JsonHighlight json={JSON.stringify(decoded.payload, null, 2)} />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Signature</h3>
            <pre className="rounded-lg border bg-muted/30 p-4 font-mono text-xs break-all">
              {decoded.signature}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
