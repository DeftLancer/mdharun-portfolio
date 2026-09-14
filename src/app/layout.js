import "./globals.css";

import PageTransition from "@/components/PageTransition";
import PointerGlow from "@/components/PointerGlow";
import ScrollProgress from "@/components/ScrollProgress";

import { siteConfig } from "@/data/site";

export const metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: "MD Harun | AI Prompt & Workflow Specialist",
        template: "%s | MD Harun",
    },

    description: siteConfig.description,

    applicationName: "MD Harun Portfolio",

    authors: [
        {
            name: siteConfig.fullName,
            url: siteConfig.url,
        },
    ],

    creator: siteConfig.fullName,
    publisher: siteConfig.fullName,

    category: "technology",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "MD Harun",
        title: "MD Harun | AI Prompt & Workflow Specialist",
        description: siteConfig.description,
    },

    twitter: {
        card: "summary_large_image",
        title: "MD Harun | AI Prompt & Workflow Specialist",
        description: siteConfig.description,
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ScrollProgress />
                <PointerGlow />

                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
