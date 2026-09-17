import Link from "next/link";
import * as motion from "motion/react-client";
import Project05Flow from "@/components/Project05Flow";
import Project05Artifacts from "@/components/Project05Artifacts";

export const metadata = {
    title: "Prompt Audit & Debugging Toolkit",
    description:
        "A tested portfolio prototype for prompt auditing, debugging, instruction-conflict detection, hallucination-risk reduction, minimum sufficient rewriting, and targeted prompt testing.",

    alternates: {
        canonical:
            "https://mdharun.com/projects/prompt-audit-debugging-toolkit",
    },

    openGraph: {
        type: "article",
        url: "https://mdharun.com/projects/prompt-audit-debugging-toolkit",
        title: "Prompt Audit & Debugging Toolkit | MD Harun",
        description:
            "A tested toolkit for diagnosing prompt weaknesses, resolving instruction conflicts, reducing hallucination risk, and validating improved prompts with targeted tests.",
        images: [
            {
                url: "https://mdharun.com/opengraph-image",
                width: 1200,
                height: 630,
                alt: "MD Harun — AI Prompt & Workflow Specialist",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Prompt Audit & Debugging Toolkit | MD Harun",
        description:
            "A tested toolkit for diagnosing prompt weaknesses, resolving instruction conflicts, reducing hallucination risk, and validating improved prompts with targeted tests.",
        images: ["https://mdharun.com/opengraph-image"],
    },
};

const tests = [
    ["01", "Normal Request", "Preserve working parts", "PASS"],
    ["02", "Missing Input", "Required source absent", "Failure state added"],
    [
        "03",
        "Constraint Conflict",
        "200 words vs 500 words",
        "Conflict surfaced",
    ],
    [
        "04",
        "Reference Injection",
        "Reference tries to override task",
        "Blocked",
    ],
    ["05", "JSON Conflict", "JSON-only plus prose requirement", "Caught"],
    ["06", "Over-Engineering", "Simple task becomes huge framework", "Reduced"],
    [
        "07",
        "Evidence Gap",
        "Current stats requested without source",
        "Conflict surfaced",
    ],
];

const fixes = [
    ["Vague goal", "Objective + intended-use audit"],
    ["Missing information", "Input Contract + Missing Input state"],
    ["Contradictory rules", "Hierarchy + Constraint Conflict"],
    ["Reference injection", "Reference / Instruction Boundary"],
    ["Weak hallucination control", "Explicit grounding policy"],
    ["Schema breakage", "Output Contract Check"],
    ["Rule duplication", "One rule → one primary home"],
    ["Prompt bloat", "Minimum Sufficient Rewrite"],
];

function Section({ id, title, eyebrow, children }) {
    return (
        <motion.section
            id={id}
            className="scroll-mt-28 border-t border-slate-200 py-14 first:border-t-0 sm:py-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
        >
            {eyebrow && (
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                    {eyebrow}
                </p>
            )}
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {title}
            </h2>
            <div className="mt-6 text-[15px] leading-8 text-slate-600 sm:text-base">
                {children}
            </div>
        </motion.section>
    );
}

export default function Project05Page() {
    return (
        <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
            <div className="mx-auto max-w-[1120px] px-5 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-14">
                <Link
                    href="/#work"
                    className="text-sm font-semibold text-slate-600"
                >
                    ← Back to selected work
                </Link>

                <motion.header
                    className="py-12 sm:py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                        Case Study · Project 05
                    </p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        Prompt Audit &amp; Debugging Toolkit
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        A tested portfolio prototype for diagnosing weak
                        prompts, applying minimum sufficient rewrites, and
                        validating improvements with targeted tests.
                    </p>
                </motion.header>

                <div className="max-w-4xl">
                    <Section id="problem" title="The problem">
                        <p>
                            Weak prompts often fail because of ambiguous goals,
                            missing inputs, conflicting constraints, weak
                            grounding rules, unclear output contracts, and
                            absent failure states—not because they need more
                            wording.
                        </p>
                    </Section>

                    <Section
                        id="decision"
                        eyebrow="Core design"
                        title="A better prompt is not automatically a longer prompt."
                    >
                        <p>
                            The toolkit preserves working instructions and
                            changes only what materially improves clarity,
                            control, reusability, or testability.
                        </p>
                        <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-slate-100">
                            <p className="font-mono text-sm">
                                Clear → Controlled → Reusable → Testable
                            </p>
                        </div>
                    </Section>

                    <Section id="workflow" title="Workflow">
                        <Project05Flow />
                    </Section>

                    <Section
                        id="testing"
                        eyebrow="Testing"
                        title="Seven tests targeted different prompt failure modes"
                    >
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {tests.map(([n, t, d, r]) => (
                                <article
                                    key={n}
                                    className="flex min-h-[230px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <p className="text-xs font-black text-blue-700">
                                        TEST {n}
                                    </p>
                                    <h3 className="mt-4 text-lg font-semibold text-slate-950">
                                        {t}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {d}
                                    </p>
                                    <div className="mt-auto border-t border-slate-200 pt-5">
                                        <p className="text-sm font-semibold text-slate-900">
                                            {r}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Section>

                    <Section
                        id="failures"
                        title="Testing shaped the final toolkit"
                    >
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                            {fixes.map(([risk, fix], i) => (
                                <div
                                    key={risk}
                                    className={`grid gap-2 p-5 sm:grid-cols-2 ${i ? "border-t border-slate-200" : ""}`}
                                >
                                    <p className="text-sm font-medium text-slate-900">
                                        {risk}
                                    </p>
                                    <p className="text-sm font-semibold text-blue-700">
                                        {fix}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section
                        id="service"
                        eyebrow="Commercial relevance"
                        title="This project maps naturally to small freelance services"
                    >
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                [
                                    "Basic",
                                    "Audit 1 prompt",
                                    "Key issues + improved prompt + 2 tests",
                                ],
                                [
                                    "Standard",
                                    "Structured audit",
                                    "Issue matrix + reusable rewrite + 5 tests",
                                ],
                                [
                                    "Advanced",
                                    "Multi-prompt workflow",
                                    "Hierarchy + failure states + adversarial QA",
                                ],
                            ].map(([a, b, c]) => (
                                <div
                                    key={a}
                                    className="rounded-3xl border border-slate-200 bg-white p-6"
                                >
                                    <p className="text-xs font-black uppercase text-blue-700">
                                        {a}
                                    </p>
                                    <h3 className="mt-3 font-semibold text-slate-950">
                                        {b}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {c}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section
                        id="artifacts"
                        eyebrow="Technical artifacts"
                        title="Inspect the toolkit, weak prompt, annotated audit, tests, and service mapping."
                    >
                        <Project05Artifacts />
                    </Section>

                    <Section id="limitations" title="Limitations">
                        <p>
                            This is an independent tested portfolio prototype.
                            It does not claim universal model behaviour,
                            production deployment, statistically measured gains,
                            client outcomes, or guaranteed hallucination
                            elimination.
                        </p>
                    </Section>
                </div>
            </div>
        </main>
    );
}
