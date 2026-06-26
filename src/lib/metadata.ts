import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_KEYWORDS } from "./site";
import { getToolSeoContent } from "./tool-content";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/"
      ? `${SITE_NAME} — ${title}`
      : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...SITE_KEYWORDS],
    alternates: {
      canonical: url,
    },
    other: {
      "google-adsense-account": "ca-pub-1025324546614550",
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function createToolMetadata(
  toolId: string,
  name: string,
  fallbackDescription: string,
  keywords: string[]
): Metadata {
  const seoContent = getToolSeoContent(toolId);
  const title = seoContent?.title?.length ? seoContent?.title : `${name} — Free Online Tool`;
  const description = seoContent?.metaDescription ?? fallbackDescription;

  return createMetadata({
    title,
    description,
    path: `/tools/${toolId}`,
    keywords,
  });
}

export const homeMetadata = createMetadata({
  title: "Free Online Developer Tools",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "json formatter online free",
    "jwt decoder online",
    "base64 encode decode",
    "uuid generator v4",
    "regex tester online",
    "developer tools hub",
  ],
});

export function createCategoryMetadata(
  category: string,
  title: string,
  description: string
): Metadata {
  return createMetadata({
    title,
    description,
    path: `/categories/${category}`,
    keywords: [category, "developer tools", "free online tools"],
  });
}
