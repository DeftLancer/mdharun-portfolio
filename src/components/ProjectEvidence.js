import * as motion from "motion/react-client";

const tests = [
    {
        label: "Standard Test",
        purpose: "Normal generation behavior",
        result: "Passed",
    },
    {
        label: "Stress Test",
        purpose: "Concept overlap and instruction conflicts",
        result: "Passed after revision",
    },
    {
        label: "Adversarial Test",
        purpose: "False premises and impossible constraints",
        result: "Passed after revision",
    },
];

const fixes = [
    {
        problem: "Conceptually repeated questions",
        fix: "Primary Skill vs Supporting Skill distinction",
    },
    {
        problem: "Soft conceptual coverage requirement",
        fix: "At least one primarily conceptual question",
    },
    {
        problem: "Unsupported curriculum claims",
        fix: "Separate level appropriateness from reference alignment",
    },
    {
        problem: "Conflicting client instructions",
        fix: "Explicit instruction priority hierarchy",
    },
    {
        problem: "Structurally impossible requirements",
        fix: "Feasibility gate + Constraint Conflict Report",
    },
];

export default function ProjectEvidence() {
    return (
        <div className="space-y-10">
            {/* =========================
          TEST LOG
         ========================= */}
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Test Log
                </p>

                <div className="mt-5 grid items-stretch gap-4 md:grid-cols-3">
                    {tests.map((test, index) => (
                        <motion.article
                            key={test.label}
                            initial={{
                                opacity: 0,
                                y: 18,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                delay: index * 0.06,
                                duration: 0.5,
                            }}
                            whileHover={{
                                y: -4,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 22,
                                },
                            }}
                            className="flex h-full min-h-[290px] flex-col rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.035)] transition-shadow hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
                        >
                            {/* TEST NUMBER */}
                            <div>
                                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--accent)]">
                                    Test {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* TITLE */}
                                <h3 className="mt-6 text-xl font-bold tracking-[-0.03em]">
                                    {test.label}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-3 text-[0.95rem] leading-7 text-[var(--muted)]">
                                    {test.purpose}
                                </p>
                            </div>

                            {/* RESULT — PINNED TO BOTTOM */}
                            <div className="mt-auto border-t border-[var(--border)] pt-5">
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                                    Result
                                </p>

                                <p className="mt-2 text-sm font-bold text-emerald-700">
                                    {test.result}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* =========================
          FAILURE → FIX
         ========================= */}
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Failure → Fix
                </p>

                <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.025)]">
                    {fixes.map((item, index) => (
                        <motion.div
                            key={item.problem}
                            initial={{
                                opacity: 0,
                                x: -12,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                delay: index * 0.04,
                                duration: 0.4,
                            }}
                            className="grid gap-4 border-b border-[var(--border)] p-5 last:border-b-0 md:grid-cols-[0.8fr_1.2fr] md:p-6"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.1em] text-rose-600">
                                    Failure / Risk
                                </p>

                                <p className="mt-2 text-sm font-semibold leading-6">
                                    {item.problem}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-700">
                                    Design Fix
                                </p>

                                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                    {item.fix}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* =========================
          VALIDATION STATUS
         ========================= */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 18,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 md:p-7"
            >
                <p className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--accent)]">
                    Current Validation Status
                </p>

                <h3 className="mt-3 text-xl font-bold tracking-[-0.03em]">
                    Tested portfolio prototype
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                    The workflow has been tested against the defined normal,
                    stress, and adversarial cases used in this project. It is
                    not presented as a production-deployed or independently
                    certified system.
                </p>
            </motion.div>
        </div>
    );
}
