const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "are", "was", "were", "be", "been",
  "it", "this", "that", "these", "those", "as", "if", "then", "so",
]);

export interface SlugOptions {
  separator?: string;
  lowercase?: boolean;
  removeStopWords?: boolean;
}

export function generateSlug(text: string, options: SlugOptions = {}): string {
  const { separator = "-", lowercase = true, removeStopWords = false } = options;

  let words = text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (removeStopWords) {
    words = words.filter((w) => !STOP_WORDS.has(w.toLowerCase()));
  }

  let slug = words.join(separator);
  if (lowercase) slug = slug.toLowerCase();
  slug = slug.replace(new RegExp(`${separator}+`, "g"), separator);
  slug = slug.replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
  return slug;
}

export const SEO_STOP_WORDS = STOP_WORDS;
