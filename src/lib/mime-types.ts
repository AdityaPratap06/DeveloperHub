export interface MimeEntry {
  extension: string;
  mimeType: string;
  description: string;
}

export const MIME_TYPES: MimeEntry[] = [
  { extension: ".html", mimeType: "text/html", description: "HTML document" },
  { extension: ".htm", mimeType: "text/html", description: "HTML document" },
  { extension: ".css", mimeType: "text/css", description: "CSS stylesheet" },
  { extension: ".js", mimeType: "text/javascript", description: "JavaScript file" },
  { extension: ".json", mimeType: "application/json", description: "JSON data" },
  { extension: ".xml", mimeType: "application/xml", description: "XML document" },
  { extension: ".pdf", mimeType: "application/pdf", description: "PDF document" },
  { extension: ".zip", mimeType: "application/zip", description: "ZIP archive" },
  { extension: ".png", mimeType: "image/png", description: "PNG image" },
  { extension: ".jpg", mimeType: "image/jpeg", description: "JPEG image" },
  { extension: ".jpeg", mimeType: "image/jpeg", description: "JPEG image" },
  { extension: ".gif", mimeType: "image/gif", description: "GIF image" },
  { extension: ".webp", mimeType: "image/webp", description: "WebP image" },
  { extension: ".svg", mimeType: "image/svg+xml", description: "SVG image" },
  { extension: ".ico", mimeType: "image/x-icon", description: "Favicon icon" },
  { extension: ".mp4", mimeType: "video/mp4", description: "MP4 video" },
  { extension: ".mp3", mimeType: "audio/mpeg", description: "MP3 audio" },
  { extension: ".wav", mimeType: "audio/wav", description: "WAV audio" },
  { extension: ".txt", mimeType: "text/plain", description: "Plain text" },
  { extension: ".csv", mimeType: "text/csv", description: "CSV spreadsheet" },
  { extension: ".md", mimeType: "text/markdown", description: "Markdown document" },
  { extension: ".woff", mimeType: "font/woff", description: "Web Open Font" },
  { extension: ".woff2", mimeType: "font/woff2", description: "Web Open Font 2" },
  { extension: ".ttf", mimeType: "font/ttf", description: "TrueType font" },
  { extension: ".wasm", mimeType: "application/wasm", description: "WebAssembly module" },
  { extension: ".doc", mimeType: "application/msword", description: "Word document" },
  { extension: ".docx", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", description: "Word document (OOXML)" },
  { extension: ".xls", mimeType: "application/vnd.ms-excel", description: "Excel spreadsheet" },
  { extension: ".xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", description: "Excel spreadsheet (OOXML)" },
];

export function searchMimeTypes(query: string): MimeEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return MIME_TYPES;
  return MIME_TYPES.filter(
    (m) =>
      m.extension.includes(q) ||
      m.mimeType.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q)
  );
}
