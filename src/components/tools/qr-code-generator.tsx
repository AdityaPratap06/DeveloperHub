"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function QrCodeGeneratorTool() {
  const [text, setText] = useState("https://www.devtoolskit.in");
  const [size, setSize] = useState(256);
  const [dataUrl, setDataUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!text.trim()) {
      setDataUrl("");
      return;
    }

    QRCode.toDataURL(text, { width: size, margin: 2 })
      .then(setDataUrl)
      .catch(() => setDataUrl(""));
  }, [text, size]);

  const downloadPng = () => {
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Content</Label>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="URL, text, or any content..."
        />
      </div>

      <div className="space-y-2">
        <Label>Size: {size}px</Label>
        <Input
          type="range"
          min={128}
          max={512}
          step={32}
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        {dataUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dataUrl} alt="Generated QR Code" className="rounded-lg border" />
            <Button onClick={downloadPng}>Download PNG</Button>
          </>
        ) : (
          <div className="flex h-64 w-64 items-center justify-center rounded-lg border border-dashed text-muted-foreground">
            Enter content to generate QR code
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
