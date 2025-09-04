import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://vrsrecovery.co.uk",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
    ]
}