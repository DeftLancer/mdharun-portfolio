import "./globals.css";

import PageTransition from "@/components/PageTransition";
import PointerGlow from "@/components/PointerGlow";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
    metadataBase: new URL("https://mdharun.com"),

    title: {
        default: "MD Harun | AI Prompt & Workflow Specialist",
        template: "%s | MD Harun",
    },

    description:
        "Portfolio of Mohammad Harun Or Rashid — AI Prompt & Workflow Specialist focused on prompt architecture, LLM evaluation, educational content, assessment design, and AI quality assurance.",
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
