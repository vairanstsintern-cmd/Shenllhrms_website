import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shenllhrms.com";

  const routes = [
    "",
    "/hrms-software",
    "/payroll-software",
    "/attendance-management-software",
    "/employee-management-software",
    "/leave-management-software",
    "/recruitment-software",
    "/performance-management-software",
    "/project-management",
    "/expense-management",
    "/resume-builder",
    "/ai-hrms",
    "/hrms-mobile-app",
    "/industries/manufacturing",
    "/industries/information-technology",
    "/industries/engineering",
    "/industries/construction",
    "/industries/logistics",
    "/industries/healthcare",
    "/industries/education",
    "/industries/textile",
    "/industries/professional-services",
    "/pricing",
    "/book-a-demo",
    "/resources",
    "/about",
    "/cookie-policy",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/industries") ? 0.8 : 0.9,
  }));
}
