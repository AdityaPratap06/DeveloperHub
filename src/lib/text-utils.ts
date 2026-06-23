import { SEO_STOP_WORDS } from "./slug";

export interface WordFrequency {
  word: string;
  count: number;
  density: number;
}

export interface KeywordDensityResult {
  totalWords: number;
  uniqueWords: number;
  frequencies: WordFrequency[];
}

export function analyzeKeywordDensity(
  text: string,
  removeStopWords = true
): KeywordDensityResult {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);

  const filtered = removeStopWords
    ? words.filter((w) => !SEO_STOP_WORDS.has(w))
    : words;

  const totalWords = filtered.length;
  const counts = new Map<string, number>();

  for (const word of filtered) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  const frequencies: WordFrequency[] = Array.from(counts.entries())
    .map(([word, count]) => ({
      word,
      count,
      density: totalWords > 0 ? Math.round((count / totalWords) * 10000) / 100 : 0,
    }))
    .sort((a, b) => b.count - a.count);

  return { totalWords, uniqueWords: counts.size, frequencies };
}

export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTimeMinutes: number;
  speakingTimeMinutes: number;
}

export function analyzeText(text: string): TextStats {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim()
    ? (text.match(/[.!?]+(\s|$)/g) ?? []).length || (words > 0 ? 1 : 0)
    : 0;
  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim()).length || (text.trim() ? 1 : 0)
    : 0;
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 200));
  const speakingTimeMinutes = Math.max(1, Math.ceil(words / 130));

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTimeMinutes,
    speakingTimeMinutes,
  };
}

export function parseUrlParts(url: string) {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    const params: Record<string, string> = {};
    parsed.searchParams.forEach((v, k) => {
      params[k] = v;
    });
    return {
      valid: true as const,
      href: parsed.href,
      protocol: parsed.protocol.replace(":", ""),
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === "https:" ? "443" : "80"),
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
      params,
    };
  } catch {
    return { valid: false as const };
  }
}

export function buildUtmUrl(
  baseUrl: string,
  params: { source: string; medium: string; campaign: string; term?: string; content?: string }
): string {
  const url = new URL(baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`);
  if (params.source) url.searchParams.set("utm_source", params.source);
  if (params.medium) url.searchParams.set("utm_medium", params.medium);
  if (params.campaign) url.searchParams.set("utm_campaign", params.campaign);
  if (params.term) url.searchParams.set("utm_term", params.term);
  if (params.content) url.searchParams.set("utm_content", params.content);
  return url.toString();
}

export function generateRobotsTxt(
  rules: { userAgent: string; allow: string[]; disallow: string[] }[],
  sitemap?: string
): string {
  const lines: string[] = [];
  for (const rule of rules) {
    lines.push(`User-agent: ${rule.userAgent}`);
    rule.allow.forEach((p) => lines.push(`Allow: ${p}`));
    rule.disallow.forEach((p) => lines.push(`Disallow: ${p}`));
    lines.push("");
  }
  if (sitemap) lines.push(`Sitemap: ${sitemap}`);
  return lines.join("\n").trim();
}

export interface SitemapUrl {
  loc: string;
  priority?: string;
  changefreq?: string;
}

export function generateSitemapXml(urls: SitemapUrl[]): string {
  const entries = urls
    .filter((u) => u.loc.trim())
    .map(
      (u) => `  <url>
    <loc>${escapeXml(u.loc.trim())}</loc>${u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : ""}${u.priority ? `\n    <priority>${u.priority}</priority>` : ""}
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function generateMetaTags(fields: {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
}): string {
  const lines = [
    `<title>${escapeHtml(fields.title)}</title>`,
    `<meta name="description" content="${escapeHtml(fields.description)}" />`,
  ];
  if (fields.keywords) lines.push(`<meta name="keywords" content="${escapeHtml(fields.keywords)}" />`);
  if (fields.robots) lines.push(`<meta name="robots" content="${escapeHtml(fields.robots)}" />`);
  if (fields.canonical) lines.push(`<link rel="canonical" href="${escapeHtml(fields.canonical)}" />`);
  return lines.join("\n");
}

export function generateOgTags(fields: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}): string {
  const lines = [
    `<meta property="og:title" content="${escapeHtml(fields.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(fields.description)}" />`,
    `<meta property="og:type" content="${fields.type ?? "website"}" />`,
  ];
  if (fields.image) lines.push(`<meta property="og:image" content="${escapeHtml(fields.image)}" />`);
  if (fields.url) lines.push(`<meta property="og:url" content="${escapeHtml(fields.url)}" />`);
  return lines.join("\n");
}

export function generateTwitterTags(fields: {
  card?: string;
  title: string;
  description: string;
  image?: string;
}): string {
  const lines = [
    `<meta name="twitter:card" content="${fields.card ?? "summary_large_image"}" />`,
    `<meta name="twitter:title" content="${escapeHtml(fields.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(fields.description)}" />`,
  ];
  if (fields.image) lines.push(`<meta name="twitter:image" content="${escapeHtml(fields.image)}" />`);
  return lines.join("\n");
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export type SchemaType = "Article" | "FAQPage" | "Product" | "Organization";

export function generateSchemaJsonLd(
  type: SchemaType,
  data: Record<string, string>
): string {
  const base = { "@context": "https://schema.org", "@type": type };
  let schema: Record<string, unknown> = { ...base };

  switch (type) {
    case "Article":
      schema = {
        ...base,
        headline: data.headline,
        description: data.description,
        author: { "@type": "Person", name: data.author },
        datePublished: data.datePublished,
      };
      break;
    case "FAQPage":
      schema = {
        ...base,
        mainEntity: (data.questions ?? "")
          .split("\n")
          .filter(Boolean)
          .map((q) => {
            const [question, answer] = q.split("|");
            return {
              "@type": "Question",
              name: question?.trim(),
              acceptedAnswer: { "@type": "Answer", text: answer?.trim() ?? "" },
            };
          }),
      };
      break;
    case "Product":
      schema = {
        ...base,
        name: data.name,
        description: data.description,
        offers: { "@type": "Offer", price: data.price, priceCurrency: data.currency ?? "USD" },
      };
      break;
    case "Organization":
      schema = {
        ...base,
        name: data.name,
        url: data.url,
        logo: data.logo,
        description: data.description,
      };
      break;
  }

  return JSON.stringify(schema, null, 2);
}
