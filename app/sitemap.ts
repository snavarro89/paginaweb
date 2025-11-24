import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://insquid.com";

  const routes = [
    "",
    "/about",
    "/features",
    "/pricing",
    "/contact",
    "/faq",
    "/blog",
    "/terms-conditions",
    "/privacy-policy",
    "/gracias-por-registrarte",
    "/lp-form",
    "/industries",
    "/industries/sistemas-contra-incendios",
    "/industries/sistemas-seguridad",
    "/industries/mantenimiento-industrial",
    "/industries/hvac",
    "/industries/manufactura",
  ];

  // Add blog posts to sitemap
  const blogSlugs = getAllSlugs();
  const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

  const allRoutes = [...routes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog") ? "monthly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}

