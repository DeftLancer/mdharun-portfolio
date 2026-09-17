import Link from "next/link";
import * as motion from "motion/react-client";

import CaseStudyNav from "@/components/CaseStudyNav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectEvidence from "@/components/ProjectEvidence";
import ProjectFlowDiagram from "@/components/ProjectFlowDiagram";
import TechnicalArtifacts from "@/components/TechnicalArtifacts";

export const metadata = {
    title: "AI-Assisted Mathematics Assessment Generator",
    description:
        "A tested prompt-and-QA workflow demonstrating prompt architecture, LLM evaluation, adversarial testing, mathematical verification, and failure handling.",

    alternates: {
        canonical: "/projects/ai-math-assessment-generator",
    },

    openGraph: {
        type: "article",
        url: "/projects/ai-math-assessment-generator",
        title: "AI-Assisted Mathematics Assessment Generator | MD Harun",
        description:
            "A tested prompt-and-QA workflow demonstrating prompt architecture, LLM evaluation, adversarial testing, mathematical verification, and failure handling.",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "MD Harun — AI Prompt & Workflow Specialist",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "AI-Assisted Mathematics Assessment Generator | MD Harun",
        description:
            "A tested prompt-and-QA workflow demonstrating prompt architecture, LLM evaluation, adversarial testing, mathematical verification, and failure handling.",
        images: ["/opengraph-image"],
    },
};

const navigation = [
    ["problem", "The problem"],
    ["goal", "The goal"],
    ["approach", "Design approach"],
    ["architecture", "Key design decision"],
    ["workflow", "Workflow"],
    ["testing", "Testing"],
    ["failure", "Failure discovered"],
    ["fix", "The fix"],
    ["verification", "Verification"],
    ["evidence", "Project evidence"],
    ["artifacts", "Technical artifacts"],
    ["skills", "Skills demonstrated"],
    ["limitations", "Limitations"],
];

export default function ProjectPage() {
    return (
        <>
            <Navbar />

            <main>
                {/* HERO */}
                <section className="hero-grid relative isolate overflow-hidden border-b border-[var(--border)] bg-white">
                    <div className="ambient-orb ambient-orb-one" />

                    <div className="container relative z-10 py-20 md:py-28">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <Link
                                href="/#work"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] transition hover:gap-3"
                            >
                                <span>←</span>
                                Back to selected work
                            </Link>

                            <p className="eyebrow mt-10">
                                Case Study · Project 01
                            </p>

                            <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] md:text-7xl">
                                AI-Assisted Mathematics
                                <span className="hero-accent-text block">
                                    Assessment Generator
                                </span>
                            </h1>

                            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--muted)]">
                                A tested prompt-and-QA workflow for generating
                                structured educational assessments with
                                controlled difficulty, concept diversity,
                                verification, and failure handling.
                            </p>

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},

                                    visible: {
                                        transition: {
                                            staggerChildren: 0.08,
                                            delayChildren: 0.2,
                                        },
                                    },
                                }}
                                className="mt-10 flex flex-wrap gap-2"
                            >
                                {[
                                    "Prompt Architecture",
                                    "LLM Evaluation",
                                    "Educational Assessment",
                                    "Adversarial Testing",
                                    "Quality Assurance",
                                ].map((tag) => (
                                    <motion.span
                                        key={tag}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 12,
                                            },

                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                            },
                                        }}
                                        className="rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm font-semibold backdrop-blur"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="section">
                    <div className="container grid gap-14 lg:grid-cols-[0.28fr_0.72fr]">
                        {/* SIDEBAR */}
                        <aside>
                            <div className="lg:sticky lg:top-[100px]">
                                <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
                                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--muted)]">
                                        Case study
                                    </p>

                                    <CaseStudyNav items={navigation} />

                                    <div className="mt-6 border-t border-[var(--border)] pt-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                                            Status
                                        </p>

                                        <p className="mt-2 text-sm font-semibold">
                                            Tested portfolio prototype
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <article className="max-w-4xl">
                            <ProjectSection id="problem" title="The problem">
                                A simple request such as “Create 10 Grade 9
                                questions on percentages” can produce fluent
                                content while leaving important decisions
                                uncontrolled: difficulty, duplication,
                                mathematical accuracy, misconception quality,
                                output consistency, and failure handling.
                            </ProjectSection>

                            <ProjectSection id="goal" title="The goal">
                                I wanted to turn that open-ended generation
                                request into a reusable workflow that controls
                                question count, difficulty progression,
                                conceptual diversity, solutions, misconception
                                analysis, mathematical verification, and final
                                quality checks.
                            </ProjectSection>

                            <ProjectSection
                                id="approach"
                                title="Design approach"
                            >
                                Instead of treating the prompt as one long
                                instruction, I separated responsibilities into
                                functional sections: objective, instruction
                                priority, inputs, feasibility checking, concept
                                architecture, difficulty rules, output
                                requirements, verification, quality assurance,
                                and failure handling.
                            </ProjectSection>

                            <ProjectSection
                                id="architecture"
                                title="A key design decision"
                            >
                                During testing, I found that two questions could
                                use the same calculation without actually
                                testing the same learning objective. I therefore
                                separated a question&apos;s Primary Skill from
                                its Supporting Skill. This made duplicate
                                detection more precise.
                            </ProjectSection>

                            {/* WORKFLOW */}
                            <motion.section
                                id="workflow"
                                className="scroll-mt-32 mb-14 border-b border-[var(--border)] pb-14"
                                initial={{
                                    opacity: 0,
                                    y: 28,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <h2 className="text-3xl font-bold tracking-[-0.04em]">
                                    Workflow
                                </h2>

                                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                                    The project followed a repeatable
                                    design-and-testing cycle rather than a
                                    one-shot prompt-writing process.
                                </p>

                                <div className="mt-8 rounded-3xl bg-[#111827] p-6 md:p-8">
                                    <ProjectFlowDiagram />
                                </div>
                            </motion.section>

                            <ProjectSection id="testing" title="Testing">
                                I ran normal generation tests, stress tests, and
                                adversarial tests. The adversarial cases
                                included conflicting client instructions,
                                pressure to create conceptually repetitive
                                questions, mathematically false premises,
                                instructions embedded inside reference material,
                                and structurally impossible combinations of
                                requirements.
                            </ProjectSection>

                            <ProjectSection
                                id="failure"
                                title="Failure discovered"
                            >
                                One stress test exposed a real design weakness.
                                If an authoritative source allowed only two
                                concepts while the system required ten
                                conceptually diverse questions, repeated
                                regeneration could never solve the conflict.
                            </ProjectSection>

                            <ProjectSection id="fix" title="The fix">
                                I added a feasibility gate and a Constraint
                                Conflict Report. When requirements cannot be
                                satisfied simultaneously, the workflow stops
                                rather than manufacturing a false success.
                            </ProjectSection>

                            <ProjectSection
                                id="verification"
                                title="Verification"
                            >
                                Mathematical results are checked through methods
                                such as recalculation, reverse calculation,
                                substitution, estimation, reference-value
                                checking, and consistency checks, depending on
                                the problem.
                            </ProjectSection>

                            {/* EVIDENCE */}
                            <motion.section
                                id="evidence"
                                className="scroll-mt-32 mb-14 border-b border-[var(--border)] pb-14"
                                initial={{
                                    opacity: 0,
                                    y: 28,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.12,
                                }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <p className="eyebrow">Evidence</p>

                                <h2 className="text-3xl font-bold tracking-[-0.04em]">
                                    What was actually tested and changed
                                </h2>

                                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                                    Rather than presenting only the final
                                    prompt, this project documents the test
                                    cases, observed weaknesses, and design
                                    changes that shaped the final workflow.
                                </p>

                                <div className="mt-8">
                                    <ProjectEvidence />
                                </div>
                            </motion.section>

                            {/* TECHNICAL ARTIFACTS */}
                            <motion.section
                                id="artifacts"
                                className="scroll-mt-32 mb-14 border-b border-[var(--border)] pb-14"
                                initial={{
                                    opacity: 0,
                                    y: 28,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <p className="eyebrow">Technical artifacts</p>

                                <h2 className="text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                                    Inspect the implementation behind the case
                                    study.
                                </h2>

                                <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                                    The case study is intentionally readable at
                                    a high level. For reviewers who want to
                                    inspect the complete technical work, the
                                    final master prompt and a full
                                    representative output are available below.
                                </p>

                                <div className="mt-8">
                                    <TechnicalArtifacts />
                                </div>
                            </motion.section>

                            <ProjectSection
                                id="skills"
                                title="What this project demonstrates"
                            >
                                The project demonstrates prompt architecture,
                                requirements decomposition, constraint design,
                                LLM output evaluation, adversarial testing,
                                failure analysis, educational assessment design,
                                mathematical verification, and human-in-the-loop
                                quality assurance.
                            </ProjectSection>

                            <ProjectSection
                                id="limitations"
                                title="Limitations"
                            >
                                This is a tested independent portfolio
                                prototype. I do not claim production deployment,
                                commercial client adoption, large-scale user
                                testing, cross-model benchmarking, or
                                independently measured accuracy improvements.
                            </ProjectSection>
                        </article>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

function ProjectSection({ id, title, children }) {
    return (
        <motion.section
            id={id}
            className="scroll-mt-32 mb-14 border-b border-[var(--border)] pb-14 last:border-0"
            initial={{
                opacity: 0,
                y: 28,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <h2 className="text-3xl font-bold tracking-[-0.04em]">{title}</h2>

            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                {children}
            </p>
        </motion.section>
    );
}
