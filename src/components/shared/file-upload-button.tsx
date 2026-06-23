"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadButtonProps {
  accept?: string;
  label?: string;
  onFile: (content: string, filename: string) => void;
}

export function FileUploadButton({
  accept = ".json,.csv,.txt",
  label = "Upload File",
  onFile,
}: FileUploadButtonProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const text = await file.text();
          onFile(text, file.name);
          e.target.value = "";
        }}
      />
      <Button type="button" variant="outline" size="sm" onClick={() => ref.current?.click()}>
        <Upload className="h-4 w-4" />
        {label}
      </Button>
    </>
  );
}
