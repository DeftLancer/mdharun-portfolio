"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { finalMasterPrompt, sampleOutput } from "@/data/project01Artifacts";

const artifacts = [
    {
        id: "master-prompt",
        eyebrow: "Artifact 01",
        title: "Final Master Prompt",
        description:
            "The complete production-style prompt specification used in the final tested portfolio prototype.",
        content: finalMasterPrompt,
        label: "prompt",
    },
    {
        id: "sample-output",
        eyebrow: "Artifact 02",
        title: "Full Sample Output",
        description:
            "A complete 10-question output showing the expected structure, difficulty progression, misconception analysis, solutions, and QA report.",
        content: sampleOutput,
        label: "output",
    },
];

export default function TechnicalArtifacts() {
    return (
        <div className="space-y-5">
            {artifacts.map((artifact) => (
                <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
        </div>
    );
}

function ArtifactCard({ artifact }) {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyArtifact = async () => {
        try {
            await navigator.clipboard.writeText(artifact.content);

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <article className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.035)]">
            {/* HEADER */}
            <div className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="max-w-2xl">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                        {artifact.eyebrow}
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] md:text-2xl">
                        {artifact.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {artifact.description}
                    </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={copyArtifact}
                        className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-[var(--border)] bg-white px-4 text-sm font-bold text-[var(--foreground)] transition hover:border-slate-300 hover:bg-slate-50"
                    >
                        {copied ? "Copied ✓" : "Copy"}
                    </button>

                    <button
                        type="button"
                        onClick={() => setOpen((current) => !current)}
                        aria-expanded={open}
                        aria-controls={`${artifact.id}-content`}
                        className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-4 text-sm font-bold text-white transition hover:bg-slate-800"
                    >
                        {open ? "Collapse" : "Expand"}

                        <span
                            aria-hidden="true"
                            className={`text-base transition-transform duration-200 ${
                                open ? "rotate-180" : ""
                            }`}
                        >
                            ↓
                        </span>
                    </button>
                </div>
            </div>

            {/* EXPANDABLE CONTENT */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={`${artifact.id}-content`}
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            height: {
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                                duration: 0.2,
                            },
                        }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-[var(--border)] bg-[#0d1422]">
                            {/* CODE HEADER */}
                            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0d1422]/95 px-5 py-3 backdrop-blur md:px-6">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                                </div>

                                <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40">
                                    {artifact.label}
                                </span>
                            </div>

                            <div className="max-h-[720px] overflow-auto">
                                <pre className="min-w-full whitespace-pre-wrap break-words p-5 font-mono text-[0.78rem] leading-6 text-slate-300 md:p-7 md:text-[0.82rem]">
                                    {artifact.content}
                                </pre>
                            </div>

                            {/* FOOTER */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 md:px-6">
                                <p className="text-xs text-white/40">
                                    Full artifact shown for technical review.
                                </p>

                                <button
                                    type="button"
                                    onClick={copyArtifact}
                                    className="text-xs font-bold text-cyan-300 transition hover:text-cyan-200"
                                >
                                    {copied
                                        ? "Copied to clipboard ✓"
                                        : "Copy full artifact"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}
