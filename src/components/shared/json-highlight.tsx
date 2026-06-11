"use client";

function highlightJson(json: string): string {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = "json-number";
        if (/^"/.test(match)) {
          cls = /:$/.test(match) ? "json-key" : "json-string";
        } else if (/true|false/.test(match)) {
          cls = "json-boolean";
        } else if (/null/.test(match)) {
          cls = "json-null";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
}

interface JsonHighlightProps {
  json: string;
  className?: string;
}

export function JsonHighlight({ json, className }: JsonHighlightProps) {
  if (!json) {
    return (
      <pre className="min-h-[200px] w-full overflow-auto rounded-lg border bg-muted/30 p-4 font-mono text-sm text-muted-foreground">
        Output will appear here...
      </pre>
    );
  }

  return (
    <pre
      className={`min-h-[200px] w-full overflow-auto rounded-lg border bg-muted/30 p-4 font-mono text-sm ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: highlightJson(json) }}
    />
  );
}
