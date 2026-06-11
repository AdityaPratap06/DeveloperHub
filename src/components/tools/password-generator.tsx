"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CopyButton } from "@/components/shared/copy-button";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) return { score: 25, label: "Weak", color: "bg-red-500" };
  if (score <= 4) return { score: 50, label: "Fair", color: "bg-yellow-500" };
  if (score <= 5) return { score: 75, label: "Good", color: "bg-blue-500" };
  return { score: 100, label: "Strong", color: "bg-green-500" };
}

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generate = useCallback(() => {
    let charset = "";
    if (uppercase) charset += UPPER;
    if (lowercase) charset += LOWER;
    if (numbers) charset += NUMBERS;
    if (symbols) charset += SYMBOLS;
    if (!charset) charset = LOWER;

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    const result = Array.from(array, (n) => charset[n % charset.length]).join("");
    setPassword(result);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const strength = getStrength(password);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-muted/30 p-6">
        <p className="font-mono text-xl break-all text-center min-h-[2rem]">
          {password || "Click Generate"}
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Button onClick={generate}>Generate</Button>
          <CopyButton text={password} disabled={!password} />
        </div>
      </div>

      {password && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Strength: {strength.label}</span>
            <span>{strength.score}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full transition-all ${strength.color}`}
              style={{ width: `${strength.score}%` }}
            />
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Length: {length}</Label>
          <Slider
            value={[length]}
            onValueChange={([v]) => setLength(v)}
            min={4}
            max={64}
            step={1}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Uppercase (A-Z)", checked: uppercase, set: setUppercase },
            { label: "Lowercase (a-z)", checked: lowercase, set: setLowercase },
            { label: "Numbers (0-9)", checked: numbers, set: setNumbers },
            { label: "Symbols (!@#...)", checked: symbols, set: setSymbols },
          ].map((opt) => (
            <label key={opt.label} className="flex items-center gap-2 text-sm">
              <Checkbox checked={opt.checked} onCheckedChange={(c) => opt.set(!!c)} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
