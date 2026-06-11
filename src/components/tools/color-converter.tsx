"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/shared/copy-button";

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function ColorConverterTool() {
  const [hex, setHex] = useState("#3B82F6");
  const [rgb, setRgb] = useState<RGB>({ r: 59, g: 130, b: 246 });

  const hsl = useMemo(() => rgbToHsl(rgb.r, rgb.g, rgb.b), [rgb]);

  const handleHexChange = (value: string) => {
    setHex(value);
    const parsed = hexToRgb(value);
    if (parsed) setRgb(parsed);
  };

  const handleRgbChange = (channel: keyof RGB, value: number) => {
    const updated = { ...rgb, [channel]: Math.min(255, Math.max(0, value)) };
    setRgb(updated);
    setHex(rgbToHex(updated.r, updated.g, updated.b));
  };

  return (
    <div className="space-y-6">
      <div
        className="h-24 rounded-lg border"
        style={{ backgroundColor: hex }}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-3 rounded-lg border p-4">
          <Label>HEX</Label>
          <div className="flex gap-2">
            <Input value={hex} onChange={(e) => handleHexChange(e.target.value)} className="font-mono" />
            <CopyButton text={hex} size="icon" variant="outline" />
          </div>
        </div>

        <div className="space-y-3 rounded-lg border p-4">
          <Label>RGB</Label>
          <div className="grid grid-cols-3 gap-2">
            {(["r", "g", "b"] as const).map((ch) => (
              <div key={ch}>
                <Label className="text-xs uppercase">{ch}</Label>
                <Input
                  type="number"
                  min={0}
                  max={255}
                  value={rgb[ch]}
                  onChange={(e) => handleRgbChange(ch, parseInt(e.target.value) || 0)}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-mono text-sm">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>
            <CopyButton text={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`} size="icon" variant="ghost" />
          </div>
        </div>

        <div className="space-y-3 rounded-lg border p-4">
          <Label>HSL</Label>
          <p className="font-mono text-sm">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</p>
          <CopyButton text={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`} label="Copy HSL" variant="outline" />
        </div>
      </div>
    </div>
  );
}
