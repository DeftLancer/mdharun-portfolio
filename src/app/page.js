import ProjectFlowDiagram from "@/components/ProjectFlowDiagram";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Project02Card from "@/components/Project02Card";
import Project03Card from "@/components/Project03Card";

const services = [
    {
        number: "01",
        title: "Prompt Design & Improvement",
        description:
            "Turn vague or inconsistent AI instructions into structured, reusable prompts with clearer constraints, output formats, and quality controls.",
    },
    {
        number: "02",
        title: "AI Workflow Design",
        description:
            "Design repeatable workflows that move beyond a single prompt — from input and generation to evaluation, revision, QA, and human review.",
    },
    {
        number: "03",
        title: "LLM Output Evaluation",
        description:
            "Review AI-generated work for instruction compliance, errors, inconsistency, duplication, ambiguity, and quality against defined criteria.",
    },
    {
        number: "04",
        title: "Educational Content & Assessment",
        description:
            "Develop and review AI-assisted questions, assessments, worksheets, misconception analysis, and structured learning content.",
    },
];

const skills = [
    "Prompt Architecture",
    "Prompt Engineering",
    "AI Workflow Design",
    "LLM Output Evaluation",
    "Prompt Debugging",
    "Constraint Design",
    "Instruction Hierarchy",
    "Adversarial Testing",
    "Failure Analysis",
    "Quality Assurance",
    "Assessment Design",
    "Human-in-the-Loop AI",
];

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <section className="border-b border-[var(--border)] bg-white">
                    <div className="container py-24 md:py-32">
                        <div className="max-w-4xl">
                            <p className="eyebrow">
                                AI Prompt & Workflow Specialist
                            </p>

                            <h1 className="max-w-4xl text-[clamp(3rem,8vw,6.8rem)] font-bold leading-[0.96] tracking-[-0.065em]">
                                I design AI workflows that are built to be
                                tested.
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                                I design, test, evaluate, and refine AI-assisted
                                workflows for structured content, assessment,
                                and quality-controlled generation.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href="#work"
                                    className="button button-primary"
                                >
                                    View selected work
                                    <span aria-hidden="true">→</span>
                                </a>

                                <a
                                    href="#contact"
                                    className="button button-secondary"
                                >
                                    Discuss a project
                                </a>
                            </div>
                        </div>

                        <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
                            {[
                                ["Focus", "Prompt architecture"],
                                ["Method", "Test → Find failures → Refine"],
                                ["Specialty", "Educational AI"],
                                ["Available for", "Freelance & remote work"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="bg-[var(--surface)] p-6"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                                        {label}
                                    </p>
                                    <p className="mt-2 font-bold tracking-[-0.02em]">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="work" className="section">
                    <div className="container">
                        <p className="eyebrow">Selected work</p>
                        <h2 className="section-title">
                            Evidence of how I design, test, and improve AI
                            workflows.
                        </h2>

                        <article className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
                            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                                <div className="border-b border-[var(--border)] bg-[var(--foreground)] p-8 text-white lg:border-r lg:border-b-0 md:p-10">
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                                            Project 01
                                        </p>

                                        <a
                                            href="/projects/ai-math-assessment-generator"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold !text-white transition hover:bg-white/20"
                                        >
                                            Read case study
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    </div>

                                    <h3 className="mt-5 text-3xl font-bold tracking-[-0.045em]">
                                        AI-Assisted Mathematics Assessment
                                        Generator
                                    </h3>

                                    <p className="mt-5 leading-7 text-white/70">
                                        A tested prompt-and-QA workflow for
                                        generating structured Grade 9
                                        Mathematics assessments.
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {[
                                            "Prompt Architecture",
                                            "LLM Evaluation",
                                            "Assessment Design",
                                            "QA",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/80"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <ProjectFlowDiagram />
                                </div>

                                <div className="p-8 md:p-10">
                                    <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                                        I converted a basic question-generation
                                        request into a structured AI workflow
                                        with difficulty control, concept
                                        diversity, duplicate prevention,
                                        misconception analysis, mathematical
                                        verification, adversarial testing, and
                                        graceful failure handling.
                                    </p>

                                    <div className="mt-9 grid gap-5 sm:grid-cols-2">
                                        {[
                                            [
                                                "Problem",
                                                "Open-ended generation produced too many uncontrolled decisions.",
                                            ],
                                            [
                                                "Approach",
                                                "Separated task rules, verification, testing, and QA into a structured architecture.",
                                            ],
                                            [
                                                "Testing",
                                                "Used standard, stress, and adversarial test cases.",
                                            ],
                                            [
                                                "Outcome",
                                                "A tested portfolio prototype with documented failure handling.",
                                            ],
                                        ].map(([title, description]) => (
                                            <div key={title}>
                                                <p className="text-sm font-extrabold">
                                                    {title}
                                                </p>
                                                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                                    {description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-9">
                                        <a
                                            href="/projects/ai-math-assessment-generator"
                                            className="font-bold text-[var(--accent)] hover:text-[var(--accent-dark)]"
                                        >
                                            Read the case study →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <Project02Card />
                        <Project03Card />
                    </div>
                </section>

                <section
                    id="services"
                    className="section border-y border-[var(--border)] bg-white"
                >
                    <div className="container">
                        <p className="eyebrow">What I can help with</p>
                        <h2 className="section-title">
                            Practical AI work focused on structure, evaluation,
                            and quality.
                        </h2>

                        <div className="mt-14 grid border-l border-t border-[var(--border)] md:grid-cols-2">
                            {services.map((service) => (
                                <article
                                    key={service.number}
                                    className="border-r border-b border-[var(--border)] p-7 md:p-9"
                                >
                                    <p className="text-xs font-bold text-[var(--accent)]">
                                        {service.number}
                                    </p>
                                    <h3 className="mt-4 text-xl font-bold tracking-[-0.03em]">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 max-w-lg leading-7 text-[var(--muted)]">
                                        {service.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="eyebrow">About</p>
                            <h2 className="text-4xl font-bold leading-tight tracking-[-0.05em] md:text-5xl">
                                An educator&apos;s approach to AI reliability.
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-[var(--muted)]">
                                My background in teaching and assessment shapes
                                how I approach AI. I do not treat fluent output
                                as automatically correct. I focus on whether a
                                system follows its requirements, produces
                                accurate and genuinely varied content, handles
                                conflicting instructions, and makes its
                                limitations visible.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                                I am building practical skills around prompt
                                architecture, LLM evaluation, educational
                                content workflows, and human-in-the-loop quality
                                assurance.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section border-y border-[var(--border)] bg-white">
                    <div className="container">
                        <p className="eyebrow">Core capabilities</p>

                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm font-semibold"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="container">
                        <div className="rounded-2xl bg-[var(--foreground)] px-7 py-12 text-white md:px-12 md:py-16">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                                Work with me
                            </p>

                            <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                                <div>
                                    <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.05em] md:text-6xl">
                                        Need a prompt or AI workflow that is
                                        easier to trust and review?
                                    </h2>

                                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                                        I am open to freelance projects, remote
                                        contract work, AI evaluation,
                                        educational content, and prompt or
                                        workflow improvement tasks.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-4 lg:items-end">
                                    <a
                                        href="mailto:mdharun.work@gmail.com"
                                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                                        style={{ color: "#111827" }}
                                    >
                                        <span>Email me</span>
                                        <span aria-hidden="true">→</span>
                                    </a>

                                    <p className="text-sm text-white/60">
                                        mdharun.work@gmail.com
                                    </p>

                                    <SocialLinks
                                        className="flex flex-wrap gap-x-4 gap-y-2"
                                        linkClassName="text-sm font-semibold text-white/55 transition hover:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
