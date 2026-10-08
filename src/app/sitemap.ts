import { MetadataRoute } from "next";
import { MOCK_CARS } from "@/data/mockCars";
import { ARTICLES } from "@/app/(storefront)/tin-tuc/page";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://toyotabienhoa.com.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/xe-cu`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/tu-van-tai-chinh`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/dich-vu`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tin-tuc`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ve-chung-toi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/lien-he`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic Car Listing Pages
  const carRoutes: MetadataRoute.Sitemap = MOCK_CARS.map((car) => ({
    url: `${BASE_URL}/xe-cu/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // Dynamic News Article Pages
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/tin-tuc/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...carRoutes, ...articleRoutes];
}
