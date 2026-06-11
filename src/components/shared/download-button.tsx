"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/lib/utils";

interface DownloadButtonProps {
  content: string;
  filename: string;
  mimeType?: string;
  label?: string;
}

export function DownloadButton({
  content,
  filename,
  mimeType,
  label = "Download",
}: DownloadButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      disabled={!content}
      onClick={() => downloadFile(content, filename, mimeType)}
    >
      <Download className="h-4 w-4" />
      {label}
    </Button>
  );
}
