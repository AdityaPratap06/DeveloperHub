"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { checkPasswordStrength } from "@/lib/password-strength";
import { cn } from "@/lib/utils";

const SCORE_COLORS = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

export function PasswordCheckerTool() {
  const [password, setPassword] = useState("");

  const result = useMemo(() => checkPasswordStrength(password), [password]);

  const colorIndex = Math.min(Math.floor(result.score / 25), 4);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password to analyze..."
          className="font-mono"
        />
      </div>
      {password && (
        <>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Strength: <strong>{result.label}</strong></span>
              <span>{result.score}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div className={cn("h-full transition-all duration-300", SCORE_COLORS[colorIndex])} style={{ width: `${result.score}%` }} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Entropy Estimate</p>
              <p className="text-2xl font-bold">{result.entropy} bits</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Breach Check</p>
              <p className="text-sm mt-1">{result.breachCheckReady ? "Architecture ready — integrate HaveIBeenPwned k-anonymity API" : "Enter a password"}</p>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <Label className="mb-2 block">Suggestions</Label>
            <ul className="space-y-1.5">
              {result.feedback.map((tip, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>{tip}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
