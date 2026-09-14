"use client";

import { useEffect, useState } from "react";

export default function CaseStudyNav({ items }) {
    const [activeId, setActiveId] = useState(items[0]?.[0] || "");

    useEffect(() => {
        const sections = items
            .map(([id]) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length > 0) {
                    setActiveId(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "-22% 0px -62% 0px",
                threshold: [0.05, 0.2, 0.4, 0.7],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [items]);

    return (
        <nav aria-label="Case study navigation" className="mt-4 space-y-1">
            {items.map(([id, label]) => {
                const isActive = activeId === id;

                return (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                            isActive
                                ? "bg-blue-50 text-[var(--accent)]"
                                : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]"
                        }`}
                    >
                        <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ${
                                isActive
                                    ? "scale-125 bg-[var(--accent)]"
                                    : "bg-[var(--border)] group-hover:bg-[var(--accent)]"
                            }`}
                        />

                        <span>{label}</span>

                        {isActive && (
                            <span className="absolute right-2 h-5 w-[2px] rounded-full bg-[var(--accent)]" />
                        )}
                    </a>
                );
            })}
        </nav>
    );
}
