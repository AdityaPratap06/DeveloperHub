"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface CopyButtonProps {
  text: string;
  label?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "secondary" | "ghost";
  disabled?: boolean;
}

export function CopyButton({
  text,
  label = "Copy",
  size = "sm",
  variant = "outline",
  disabled,
}: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled || !text}
      onClick={() => copy(text)}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {size !== "icon" && (copied ? "Copied!" : label)}
    </Button>
  );
}
