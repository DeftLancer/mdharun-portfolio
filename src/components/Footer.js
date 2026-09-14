import Link from "next/link";

import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/data/site";

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-white">
            <div className="container py-10">
                <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Link
                            href="/"
                            className="text-base font-black tracking-[-0.035em]"
                        >
                            MD HARUN
                        </Link>

                        <p className="mt-2 text-sm text-[var(--muted)]">
                            AI Prompt & Workflow Specialist
                        </p>

                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="mt-3 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
                        >
                            {siteConfig.email}
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 md:items-end">
                        <SocialLinks
                            className="flex flex-wrap gap-x-5 gap-y-2"
                            linkClassName="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)]"
                        />

                        <p className="text-xs text-[var(--muted)]">
                            © 2026 {siteConfig.fullName}. mdharun.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
