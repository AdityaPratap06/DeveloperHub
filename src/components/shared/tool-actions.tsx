"use client";

import { CopyButton } from "./copy-button";
import { DownloadButton } from "./download-button";

interface ToolActionsProps {
  output: string;
  copyLabel?: string;
  downloadFilename?: string;
  downloadMimeType?: string;
  showDownload?: boolean;
  children?: React.ReactNode;
}

export function ToolActions({
  output,
  copyLabel = "Copy",
  downloadFilename,
  downloadMimeType,
  showDownload = false,
  children,
}: ToolActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <CopyButton text={output} label={copyLabel} />
      {showDownload && downloadFilename && (
        <DownloadButton
          content={output}
          filename={downloadFilename}
          mimeType={downloadMimeType}
        />
      )}
      {children}
    </div>
  );
}
