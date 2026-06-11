import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./site";

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
  const fullTitle = path === "/" ? `${SITE_NAME} — Free Developer Tools` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "developer tools", "online tools", SITE_NAME.toLowerCase()],
    alternates: {
      canonical: url,
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
    },
  };
}

export function createToolMetadata(toolId: string, title: string, description: string, keywords: string[]): Metadata {
  return createMetadata({
    title,
    description,
    path: `/tools/${toolId}`,
    keywords,
  });
}

export const homeMetadata = createMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: ["json formatter", "jwt decoder", "base64", "uuid generator", "regex tester"],
});
