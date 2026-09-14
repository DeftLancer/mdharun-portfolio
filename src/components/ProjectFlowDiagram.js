import * as motion from "motion/react-client";

const steps = [
    {
        number: "01",
        title: "Requirements",
        short: "Define task, constraints and expected behavior.",
    },
    {
        number: "02",
        title: "Architecture",
        short: "Structure prompts, hierarchy and output rules.",
    },
    {
        number: "03",
        title: "Generate",
        short: "Run the workflow under normal conditions.",
    },
    {
        number: "04",
        title: "Test",
        short: "Stress and adversarial testing.",
    },
    {
        number: "05",
        title: "Failure Analysis",
        short: "Identify root causes and weak instructions.",
    },
    {
        number: "06",
        title: "Refine + QA",
        short: "Correct the architecture and verify again.",
    },
];

const itemVariant = {
    hidden: {
        opacity: 0,
        y: 16,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ProjectFlowDiagram() {
    return (
        <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur md:p-6">
            {/* HEADER */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cyan-300/80">
                        Workflow Artifact
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/85">
                        Prompt design → testing → refinement
                    </p>
                </div>

                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-[0.65rem] font-bold tracking-wide text-cyan-200/80">
                    TESTED FLOW
                </span>
            </div>

            {/* =========================
          MOBILE / TABLET FLOW
         ========================= */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="space-y-0 lg:hidden"
            >
                {steps.map((step, index) => (
                    <div key={step.number}>
                        <StepCard step={step} />

                        {index < steps.length - 1 && <VerticalConnector />}
                    </div>
                ))}
            </motion.div>

            {/* =========================
          DESKTOP SNAKE FLOW
         ========================= */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="hidden lg:block"
            >
                {/* ROW 1
            01 → 02 → 03
        */}
                <div className="grid grid-cols-[1fr_54px_1fr_54px_1fr] items-stretch">
                    <StepCard step={steps[0]} />

                    <HorizontalConnector direction="right" />

                    <StepCard step={steps[1]} />

                    <HorizontalConnector direction="right" />

                    <StepCard step={steps[2]} />
                </div>

                {/* TURN
                         ↓
        */}
                <div className="grid grid-cols-[1fr_54px_1fr_54px_1fr]">
                    <div />
                    <div />
                    <div />
                    <div />

                    <div className="flex h-16 items-center justify-center">
                        <svg
                            width="28"
                            height="56"
                            viewBox="0 0 28 56"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M14 2V44"
                                stroke="rgba(103, 232, 249, 0.38)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />

                            <path
                                d="M9 39L14 45L19 39"
                                stroke="rgba(103, 232, 249, 0.72)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* ROW 2
            06 ← 05 ← 04
        */}
                <div className="grid grid-cols-[1fr_54px_1fr_54px_1fr] items-stretch">
                    <StepCard step={steps[5]} />

                    <HorizontalConnector direction="left" />

                    <StepCard step={steps[4]} />

                    <HorizontalConnector direction="left" />

                    <StepCard step={steps[3]} />
                </div>
            </motion.div>
        </div>
    );
}

function StepCard({ step }) {
    return (
        <motion.div
            variants={itemVariant}
            whileHover={{
                y: -3,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                },
            }}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-200 hover:border-cyan-300/20 hover:bg-white/[0.055]"
        >
            <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/[0.08] text-xs font-black text-cyan-200">
                    {step.number}
                </div>

                <div>
                    <p className="text-base font-bold text-white">
                        {step.title}
                    </p>

                    <p className="mt-1.5 text-sm leading-6 text-white/50">
                        {step.short}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function HorizontalConnector({ direction = "right" }) {
    const isRight = direction === "right";

    return (
        <div className="flex items-center justify-center px-2">
            <svg
                width="48"
                height="20"
                viewBox="0 0 48 20"
                fill="none"
                aria-hidden="true"
            >
                {isRight ? (
                    <>
                        <path
                            d="M3 10H39"
                            stroke="rgba(103, 232, 249, 0.38)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />

                        <path
                            d="M34 5L40 10L34 15"
                            stroke="rgba(103, 232, 249, 0.72)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                ) : (
                    <>
                        <path
                            d="M45 10H9"
                            stroke="rgba(103, 232, 249, 0.38)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />

                        <path
                            d="M14 5L8 10L14 15"
                            stroke="rgba(103, 232, 249, 0.72)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                )}
            </svg>
        </div>
    );
}

function VerticalConnector() {
    return (
        <div className="flex h-12 items-center justify-center">
            <svg
                width="24"
                height="42"
                viewBox="0 0 24 42"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M12 2V31"
                    stroke="rgba(103, 232, 249, 0.38)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />

                <path
                    d="M7 27L12 33L17 27"
                    stroke="rgba(103, 232, 249, 0.72)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
