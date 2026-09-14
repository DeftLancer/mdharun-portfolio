import { siteConfig } from "@/data/site";

export default function sitemap() {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },

        {
            url: `${siteConfig.url}/projects/ai-math-assessment-generator`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
    ];
}
