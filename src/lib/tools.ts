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
  FileSpreadsheet,
  Table,
  Tags,
  Share2,
  Bot,
  Map,
  Globe,
  Megaphone,
  ShieldAlert,
  Columns2,
  BarChart3,
  Type,
  Server,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory =
  | "data"
  | "encoding"
  | "security"
  | "text"
  | "formatters"
  | "generators"
  | "utilities"
  | "seo"
  | "web";

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
  data: "JSON Tools",
  formatters: "Code Formatters",
  seo: "SEO Tools",
  encoding: "Encoding & Decoding",
  security: "Security Tools",
  text: "Text Tools",
  generators: "Generators",
  utilities: "Developer Utilities",
  web: "Web Tools",
};

export const TOOLS: Tool[] = [
  {
    id: "json-compare",
    name: "JSON Compare",
    description: "Compare two JSON documents side-by-side with diff highlighting and tree view.",
    href: "/tools/json-compare",
    icon: GitCompare,
    category: "data",
    keywords: ["json", "compare", "diff", "difference", "tree"],
    featured: true,
  },
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
  },
  {
    id: "json-to-csv",
    name: "JSON to CSV",
    description: "Convert JSON arrays to CSV and download spreadsheet-ready output.",
    href: "/tools/json-to-csv",
    icon: FileSpreadsheet,
    category: "data",
    keywords: ["json", "csv", "convert", "export", "spreadsheet"],
  },
  {
    id: "csv-to-json",
    name: "CSV to JSON",
    description: "Convert CSV files to formatted JSON instantly in your browser.",
    href: "/tools/csv-to-json",
    icon: Table,
    category: "data",
    keywords: ["csv", "json", "convert", "parse", "import"],
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
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate secure passwords with customizable options.",
    href: "/tools/password-generator",
    icon: Lock,
    category: "security",
    keywords: ["password", "generate", "secure", "random", "strong"],
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
    id: "password-checker",
    name: "Password Strength Checker",
    description: "Analyze password security with entropy score and improvement suggestions.",
    href: "/tools/password-checker",
    icon: ShieldAlert,
    category: "security",
    keywords: ["password", "strength", "security", "entropy", "check"],
  },
  {
    id: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode and decode text to and from Base64 format.",
    href: "/tools/base64-encoder",
    icon: Binary,
    category: "encoding",
    keywords: ["base64", "encode", "decode", "binary"],
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
    id: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes and download as PNG images.",
    href: "/tools/qr-code-generator",
    icon: QrCode,
    category: "generators",
    keywords: ["qr", "qrcode", "barcode", "generate", "png"],
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
    id: "word-counter",
    name: "Word Counter Pro",
    description: "Count words, characters, sentences, and estimate reading time.",
    href: "/tools/word-counter",
    icon: Type,
    category: "text",
    keywords: ["word", "count", "character", "reading time", "text"],
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
    id: "markdown-preview",
    name: "Markdown Preview",
    description: "Live Markdown editor with GitHub-style rendering and HTML export.",
    href: "/tools/markdown-preview",
    icon: FileText,
    category: "text",
    keywords: ["markdown", "preview", "editor", "html", "github"],
  },
  {
    id: "html-to-markdown",
    name: "HTML to Markdown",
    description: "Convert HTML markup to clean Markdown text.",
    href: "/tools/html-to-markdown",
    icon: Code2,
    category: "text",
    keywords: ["html", "markdown", "convert", "turndown"],
  },
  {
    id: "text-compare",
    name: "Text Compare",
    description: "Side-by-side text comparison with character-level diff highlighting.",
    href: "/tools/text-compare",
    icon: Columns2,
    category: "text",
    keywords: ["text", "compare", "diff", "side by side"],
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
    featured: true,
  },
  {
    id: "slug-generator",
    name: "Slug Generator",
    description: "Generate SEO-friendly URL slugs from titles with custom separators.",
    href: "/tools/slug-generator",
    icon: Link,
    category: "seo",
    keywords: ["slug", "seo", "url", "permalink", "generate"],
  },
  {
    id: "meta-tag-generator",
    name: "Meta Tag Generator",
    description: "Generate SEO meta tags including title, description, robots, and canonical.",
    href: "/tools/meta-tag-generator",
    icon: Tags,
    category: "seo",
    keywords: ["meta", "seo", "title", "description", "html"],
    featured: true,
  },
  {
    id: "open-graph-generator",
    name: "Open Graph Generator",
    description: "Create Open Graph meta tags with live social preview card.",
    href: "/tools/open-graph-generator",
    icon: Share2,
    category: "seo",
    keywords: ["open graph", "og", "social", "facebook", "meta"],
    featured: true,
  },
  {
    id: "twitter-card-generator",
    name: "Twitter Card Generator",
    description: "Generate Twitter Card meta tags with live preview.",
    href: "/tools/twitter-card-generator",
    icon: Share2,
    category: "seo",
    keywords: ["twitter", "card", "meta", "social", "x"],
  },
  {
    id: "robots-generator",
    name: "Robots.txt Generator",
    description: "Build robots.txt files with allow/disallow rules and sitemap support.",
    href: "/tools/robots-generator",
    icon: Bot,
    category: "seo",
    keywords: ["robots", "txt", "crawler", "seo", "disallow"],
  },
  {
    id: "sitemap-generator",
    name: "XML Sitemap Generator",
    description: "Generate XML sitemaps with priority and change frequency settings.",
    href: "/tools/sitemap-generator",
    icon: Map,
    category: "seo",
    keywords: ["sitemap", "xml", "seo", "urls", "google"],
  },
  {
    id: "url-parser",
    name: "URL Parser",
    description: "Parse URLs into protocol, domain, path, query params, and hash.",
    href: "/tools/url-parser",
    icon: Globe,
    category: "web",
    keywords: ["url", "parse", "domain", "query", "params"],
  },
  {
    id: "utm-builder",
    name: "UTM Link Builder",
    description: "Build UTM tracking URLs for marketing campaigns.",
    href: "/tools/utm-builder",
    icon: Megaphone,
    category: "web",
    keywords: ["utm", "campaign", "tracking", "marketing", "url"],
  },
  {
    id: "keyword-density",
    name: "Keyword Density Checker",
    description: "Analyze word frequency and keyword density for SEO content.",
    href: "/tools/keyword-density",
    icon: BarChart3,
    category: "seo",
    keywords: ["keyword", "density", "seo", "frequency", "analysis"],
  },
  {
    id: "schema-generator",
    name: "Schema Markup Generator",
    description: "Generate JSON-LD structured data for Article, FAQ, Product, and Organization.",
    href: "/tools/schema-generator",
    icon: Braces,
    category: "seo",
    keywords: ["schema", "json-ld", "structured data", "seo", "rich snippets"],
    featured: true,
  },
  {
    id: "http-status-codes",
    name: "HTTP Status Codes",
    description: "Look up HTTP status codes with explanations and categories.",
    href: "/tools/http-status-codes",
    icon: Server,
    category: "web",
    keywords: ["http", "status", "404", "500", "codes"],
  },
  {
    id: "mime-types",
    name: "MIME Type Lookup",
    description: "Search file extensions and MIME types for web development.",
    href: "/tools/mime-types",
    icon: FileText,
    category: "web",
    keywords: ["mime", "type", "extension", "content-type", "file"],
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
