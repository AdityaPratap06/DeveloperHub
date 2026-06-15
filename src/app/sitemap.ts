import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import { CATEGORY_LABELS, TOOLS, type ToolCategory } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/privacy", "/terms", "/contact", "/site-map", "/blog"];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.5,
  }));

  const categoryEntries: MetadataRoute.Sitemap = (
    Object.keys(CATEGORY_LABELS) as ToolCategory[]
  ).map((category) => ({
    url: `${SITE_URL}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const toolEntries: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${SITE_URL}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: post.funnel === "bottom" ? 0.9 : 0.75,
  }));

  return [...staticEntries, ...categoryEntries, ...toolEntries, ...blogEntries];
}
