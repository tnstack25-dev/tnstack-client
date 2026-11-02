import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/dich-vu", priority: 0.9 },
    { path: "/du-an", priority: 0.8 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/ve-chung-toi", priority: 0.7 },
    { path: "/bai-viet", priority: 0.8 },
    { path: "/lien-he", priority: 0.8 },
    { path: "/dich-vu/thiet-ke-website", priority: 0.8 },
    { path: "/dich-vu/toi-uu-website", priority: 0.8 },
    { path: "/dich-vu/xu-ly-ma-doc", priority: 0.8 },
    { path: "/dich-vu/bao-tri-quan-tri-website", priority: 0.8 },
    { path: "/dich-vu/chay-google-ads", priority: 0.8 },
    { path: "/dich-vu/chay-facebook-ads", priority: 0.8 },
    { path: "/dich-vu/hosting-website", priority: 0.8 },
    { path: "/dich-vu/cac-dich-vu-khac", priority: 0.8 },
  ] as const;

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
