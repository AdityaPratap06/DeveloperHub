// import { whatIsJson } from "./what-is-json";
// import { whatIsJwt, whatIsBase64, whatIsSha256 } from "./top-funnel";
// import {
//   howToFormatJson,
//   howToValidateJwt,
//   howToGeneratePasswords,
// } from "./middle-funnel";
// import {
//   bestJsonFormatter,
//   freeJwtDecoder,
//   onlineUuidGenerator,
// } from "./bottom-funnel";
import { bestJsonFormatter, freeJwtDecoder, onlineUuidGenerator } from "./posts/bottom-funnel";
import { jsonFormatterOnline } from "./posts/json-formatter-online";
import { howToFormatJson, howToGeneratePasswords, howToValidateJwt } from "./posts/middle-funnel";
import { whatIsBase64, whatIsJwt, whatIsSha256 } from "./posts/top-funnel";
import { whatIsJson } from "./posts/what-is-json";
import type { BlogFunnel, BlogPost } from "./types";

export const BLOG_POSTS: BlogPost[] = [
  // Top funnel — Educational
  jsonFormatterOnline,
  whatIsJson,
  whatIsJwt,
  whatIsBase64,
  whatIsSha256,
  // Middle funnel — How-To
  howToFormatJson,
  howToValidateJwt,
  howToGeneratePasswords,
  // Bottom funnel — Tool Intent
  bestJsonFormatter,
  freeJwtDecoder,
  onlineUuidGenerator,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostsByFunnel(funnel: BlogFunnel): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.funnel === funnel);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.map((s) => getBlogPost(s)).filter((p): p is BlogPost => !!p);
}
