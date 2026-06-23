"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CopyButton } from "@/components/shared/copy-button";
import { generateSchemaJsonLd, type SchemaType } from "@/lib/text-utils";

export function SchemaGeneratorTool() {
  const [type, setType] = useState<SchemaType>("Article");
  const [fields, setFields] = useState<Record<string, string>>({
    headline: "How to Format JSON",
    description: "Complete guide to formatting JSON",
    author: "DevToolsKit",
    datePublished: "2026-03-15",
    name: "DevToolsKit Pro",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    price: "29.99",
    currency: "USD",
    questions: "What is JSON?|JavaScript Object Notation\nHow to validate?|Use a JSON validator",
  });

  const jsonLd = useMemo(() => generateSchemaJsonLd(type, fields), [type, fields]);

  const set = (key: string, value: string) => setFields((f) => ({ ...f, [key]: value }));

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Schema Type</Label>
        <Select value={type} onValueChange={(v) => setType(v as SchemaType)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Article">Article</SelectItem>
            <SelectItem value="FAQPage">FAQ Page</SelectItem>
            <SelectItem value="Product">Product</SelectItem>
            <SelectItem value="Organization">Organization</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {type === "Article" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>Headline</Label><Input value={fields.headline} onChange={(e) => set("headline", e.target.value)} /></div>
          <div className="space-y-2"><Label>Author</Label><Input value={fields.author} onChange={(e) => set("author", e.target.value)} /></div>
          <div className="space-y-2 sm:col-span-2"><Label>Description</Label><Input value={fields.description} onChange={(e) => set("description", e.target.value)} /></div>
          <div className="space-y-2"><Label>Date Published</Label><Input type="date" value={fields.datePublished} onChange={(e) => set("datePublished", e.target.value)} /></div>
        </div>
      )}
      {type === "FAQPage" && (
        <div className="space-y-2">
          <Label>Questions (format: question|answer, one per line)</Label>
          <Textarea value={fields.questions} onChange={(e) => set("questions", e.target.value)} rows={5} className="font-mono text-sm" />
        </div>
      )}
      {type === "Product" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>Name</Label><Input value={fields.name} onChange={(e) => set("name", e.target.value)} /></div>
          <div className="space-y-2"><Label>Price</Label><Input value={fields.price} onChange={(e) => set("price", e.target.value)} /></div>
          <div className="space-y-2 sm:col-span-2"><Label>Description</Label><Input value={fields.description} onChange={(e) => set("description", e.target.value)} /></div>
        </div>
      )}
      {type === "Organization" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2"><Label>Name</Label><Input value={fields.name} onChange={(e) => set("name", e.target.value)} /></div>
          <div className="space-y-2"><Label>URL</Label><Input value={fields.url} onChange={(e) => set("url", e.target.value)} /></div>
          <div className="space-y-2 sm:col-span-2"><Label>Logo URL</Label><Input value={fields.logo} onChange={(e) => set("logo", e.target.value)} /></div>
        </div>
      )}
      <div className="flex justify-end"><CopyButton text={`<script type="application/ld+json">\n${jsonLd}\n</script>`} label="Copy Script Tag" /></div>
      <Textarea value={jsonLd} readOnly className="min-h-[240px] font-mono text-sm" />
    </div>
  );
}
