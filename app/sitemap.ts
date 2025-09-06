import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://vrsrecovery.co.uk",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://vrsrecovery.co.uk/android-chrome-192x192.png", 
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ]
}