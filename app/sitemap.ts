import { MetadataRoute } from "next";

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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

