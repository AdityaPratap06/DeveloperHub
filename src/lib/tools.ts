import {
  Braces,
  ShieldCheck,
  KeyRound,
  Binary,
  Link,
  Fingerprint,
  Clock,
  Regex,
  Lock,
  Hash,
  Database,
  Code2,
  Palette,
  FileText,
  GitCompare,
  CaseSensitive,
  QrCode,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory =
  | "data"
  | "encoding"
  | "security"
  | "text"
  | "formatters"
  | "generators"
  | "utilities";

export interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  category: ToolCategory;
  keywords: string[];
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  data: "Data & JSON",
  encoding: "Encoding & Decoding",
  security: "Security",
  text: "Text Tools",
  formatters: "Code Formatters",
  generators: "Generators",
  utilities: "Utilities",
};

export const TOOLS: Tool[] = [
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format, minify, and beautify JSON with syntax highlighting.",
    href: "/tools/json-formatter",
    icon: Braces,
    category: "data",
    keywords: ["json", "format", "minify", "beautify", "prettify"],
    featured: true,
  },
  {
    id: "json-validator",
    name: "JSON Validator",
    description: "Validate JSON syntax with detailed error messages and line numbers.",
    href: "/tools/json-validator",
    icon: ShieldCheck,
    category: "data",
    keywords: ["json", "validate", "parser", "syntax", "error"],
    featured: true,
  },
  {
    id: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode JWT tokens to view header, payload, and expiration.",
    href: "/tools/jwt-decoder",
    icon: KeyRound,
    category: "security",
    keywords: ["jwt", "token", "decode", "auth", "bearer"],
    featured: true,
  },
  {
    id: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode and decode text to and from Base64 format.",
    href: "/tools/base64-encoder",
    icon: Binary,
    category: "encoding",
    keywords: ["base64", "encode", "decode", "binary"],
    featured: true,
  },
  {
    id: "url-encoder",
    name: "URL Encoder",
    description: "Encode and decode URL components safely.",
    href: "/tools/url-encoder",
    icon: Link,
    category: "encoding",
    keywords: ["url", "encode", "decode", "percent", "uri"],
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate UUID v4 identifiers in bulk.",
    href: "/tools/uuid-generator",
    icon: Fingerprint,
    category: "generators",
    keywords: ["uuid", "guid", "v4", "generate", "unique"],
    featured: true,
  },
  {
    id: "unix-timestamp",
    name: "Unix Timestamp Converter",
    description: "Convert between Unix timestamps and human-readable dates.",
    href: "/tools/unix-timestamp",
    icon: Clock,
    category: "utilities",
    keywords: ["unix", "timestamp", "epoch", "date", "time"],
    featured: true,
  },
  {
    id: "regex-tester",
    name: "Regex Tester",
    description: "Test regular expressions with match highlighting and flags.",
    href: "/tools/regex-tester",
    icon: Regex,
    category: "text",
    keywords: ["regex", "regexp", "pattern", "match", "test"],
    featured: true,
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate secure passwords with customizable options.",
    href: "/tools/password-generator",
    icon: Lock,
    category: "security",
    keywords: ["password", "generate", "secure", "random", "strong"],
    featured: true,
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, SHA256, and SHA512 hashes.",
    href: "/tools/hash-generator",
    icon: Hash,
    category: "security",
    keywords: ["hash", "md5", "sha256", "sha512", "checksum"],
  },
  {
    id: "sql-formatter",
    name: "SQL Formatter",
    description: "Beautify and minify SQL queries.",
    href: "/tools/sql-formatter",
    icon: Database,
    category: "formatters",
    keywords: ["sql", "format", "beautify", "minify", "query"],
  },
  {
    id: "html-formatter",
    name: "HTML Formatter",
    description: "Beautify and minify HTML markup.",
    href: "/tools/html-formatter",
    icon: Code2,
    category: "formatters",
    keywords: ["html", "format", "beautify", "minify", "markup"],
  },
  {
    id: "css-formatter",
    name: "CSS Formatter",
    description: "Beautify and minify CSS stylesheets.",
    href: "/tools/css-formatter",
    icon: Palette,
    category: "formatters",
    keywords: ["css", "format", "beautify", "minify", "stylesheet"],
  },
  {
    id: "javascript-formatter",
    name: "JavaScript Formatter",
    description: "Beautify and minify JavaScript code.",
    href: "/tools/javascript-formatter",
    icon: FileText,
    category: "formatters",
    keywords: ["javascript", "js", "format", "beautify", "minify"],
  },
  {
    id: "cron-generator",
    name: "Cron Expression Generator",
    description: "Build cron expressions with human-readable explanations.",
    href: "/tools/cron-generator",
    icon: CalendarClock,
    category: "utilities",
    keywords: ["cron", "schedule", "expression", "crontab", "job"],
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB, and HSL formats.",
    href: "/tools/color-converter",
    icon: Palette,
    category: "utilities",
    keywords: ["color", "hex", "rgb", "hsl", "convert"],
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text by paragraphs or word count.",
    href: "/tools/lorem-ipsum",
    icon: FileText,
    category: "generators",
    keywords: ["lorem", "ipsum", "placeholder", "text", "dummy"],
  },
  {
    id: "text-diff",
    name: "Text Diff Checker",
    description: "Compare two texts and highlight differences.",
    href: "/tools/text-diff",
    icon: GitCompare,
    category: "text",
    keywords: ["diff", "compare", "text", "difference", "merge"],
  },
  {
    id: "case-converter",
    name: "Case Converter",
    description: "Convert text between camelCase, snake_case, kebab-case, and more.",
    href: "/tools/case-converter",
    icon: CaseSensitive,
    category: "text",
    keywords: ["case", "camelcase", "snake_case", "kebab-case", "convert"],
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes and download as PNG images.",
    href: "/tools/qr-code-generator",
    icon: QrCode,
    category: "generators",
    keywords: ["qr", "qrcode", "barcode", "generate", "png"],
  },
];

export function getToolById(id: string): Tool | undefined {
  return TOOLS.find((t) => t.id === id);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter((t) => t.category === category);
}

export function getFeaturedTools(): Tool[] {
  return TOOLS.filter((t) => t.featured);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return TOOLS;
  return TOOLS.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.includes(q))
  );
}
