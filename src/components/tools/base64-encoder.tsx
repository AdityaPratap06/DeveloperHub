"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToolActions } from "@/components/shared/tool-actions";

export function Base64EncoderTool() {
  const [encodeInput, setEncodeInput] = useState("Hello, DevToolsKit!");
  const [decodeInput, setDecodeInput] = useState("");
  const [encodeOutput, setEncodeOutput] = useState("");
  const [decodeOutput, setDecodeOutput] = useState("");
  const [decodeError, setDecodeError] = useState("");

  const handleEncode = (value: string) => {
    setEncodeInput(value);
    try {
      setEncodeOutput(btoa(unescape(encodeURIComponent(value))));
    } catch {
      setEncodeOutput("");
    }
  };

  useEffect(() => {
    handleEncode(encodeInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDecode = (value: string) => {
    setDecodeInput(value);
    try {
      setDecodeOutput(decodeURIComponent(escape(atob(value.trim()))));
      setDecodeError("");
    } catch {
      setDecodeOutput("");
      setDecodeError("Invalid Base64 string");
    }
  };

  return (
    <Tabs defaultValue="encode">
      <TabsList>
        <TabsTrigger value="encode">Encode</TabsTrigger>
        <TabsTrigger value="decode">Decode</TabsTrigger>
      </TabsList>

      <TabsContent value="encode" className="space-y-4">
        <Textarea
          value={encodeInput}
          onChange={(e) => handleEncode(e.target.value)}
          placeholder="Text to encode..."
        />
        <ToolActions output={encodeOutput} />
        <Textarea value={encodeOutput} readOnly className="font-mono" placeholder="Encoded output..." />
      </TabsContent>

      <TabsContent value="decode" className="space-y-4">
        <Textarea
          value={decodeInput}
          onChange={(e) => handleDecode(e.target.value)}
          placeholder="Base64 to decode..."
          className="font-mono"
        />
        {decodeError && <p className="text-sm text-destructive">{decodeError}</p>}
        <ToolActions output={decodeOutput} />
        <Textarea value={decodeOutput} readOnly placeholder="Decoded output..." />
      </TabsContent>
    </Tabs>
  );
}
