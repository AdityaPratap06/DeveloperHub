"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToolActions } from "@/components/shared/tool-actions";

export function UrlEncoderTool() {
  const [encodeInput, setEncodeInput] = useState("https://example.com/search?q=hello world");
  const [decodeInput, setDecodeInput] = useState("");
  const [encodeOutput, setEncodeOutput] = useState("");
  const [decodeOutput, setDecodeOutput] = useState("");
  const [decodeError, setDecodeError] = useState("");

  const handleEncode = (value: string) => {
    setEncodeInput(value);
    setEncodeOutput(encodeURIComponent(value));
  };

  useEffect(() => {
    handleEncode(encodeInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDecode = (value: string) => {
    setDecodeInput(value);
    try {
      setDecodeOutput(decodeURIComponent(value));
      setDecodeError("");
    } catch {
      setDecodeOutput("");
      setDecodeError("Invalid URL-encoded string");
    }
  };

  return (
    <Tabs defaultValue="encode">
      <TabsList>
        <TabsTrigger value="encode">Encode</TabsTrigger>
        <TabsTrigger value="decode">Decode</TabsTrigger>
      </TabsList>

      <TabsContent value="encode" className="space-y-4">
        <Textarea value={encodeInput} onChange={(e) => handleEncode(e.target.value)} placeholder="URL or text to encode..." />
        <ToolActions output={encodeOutput} />
        <Textarea value={encodeOutput} readOnly className="font-mono" />
      </TabsContent>

      <TabsContent value="decode" className="space-y-4">
        <Textarea value={decodeInput} onChange={(e) => handleDecode(e.target.value)} placeholder="URL-encoded string..." className="font-mono" />
        {decodeError && <p className="text-sm text-destructive">{decodeError}</p>}
        <ToolActions output={decodeOutput} />
        <Textarea value={decodeOutput} readOnly />
      </TabsContent>
    </Tabs>
  );
}
