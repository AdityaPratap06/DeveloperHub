export type BlogFunnel = "top" | "middle" | "bottom";

export interface BlogFaq {
  question: string;
  answer: string;
}

export type BlogBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "code"; language: string; code: string }
  | { type: "tool-cta"; toolId: string; label?: string; description?: string }
  | { type: "callout"; content: string; variant?: "info" | "tip" };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  funnel: BlogFunnel;
  keywords: string[];
  relatedToolIds: string[];
  relatedPostSlugs?: string[];
  readTimeMinutes: number;
  intro: string;
  blocks: BlogBlock[];
  faq: BlogFaq[];
}

export const FUNNEL_LABELS: Record<BlogFunnel, string> = {
  top: "Educational",
  middle: "How-To Guides",
  bottom: "Tool Guides",
};

export const FUNNEL_DESCRIPTIONS: Record<BlogFunnel, string> = {
  top: "Learn the fundamentals — what developer concepts mean and why they matter.",
  middle: "Step-by-step tutorials to solve common developer tasks.",
  bottom: "Find the best free online tools for your workflow.",
};
