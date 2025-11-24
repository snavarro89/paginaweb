import { Metadata } from "next";

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  path,
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://insquid.com";
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Insquid",
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

