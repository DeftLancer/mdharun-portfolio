import Link from "next/link";
import * as motion from "motion/react-client";
import Project03Flow from "@/components/Project03Flow";
import Project03Artifacts from "@/components/Project03Artifacts";

export const metadata = {
  title: "AI-Assisted Educational Content Workflow",
  description:
    "A tested portfolio prototype for AI-assisted lesson design, learning-objective alignment, assessment mapping, instructional QA, and human review.",
  alternates: {
    canonical: "/projects/ai-assisted-educational-content-workflow",
  },
  openGraph: {
    type: "article",
    url: "/projects/ai-assisted-educational-content-workflow",
    title: "AI-Assisted Educational Content Workflow | MD Harun",
    description:
      "A tested portfolio prototype connecting learning objectives, instruction, practice, assessment, verification, and human review.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Assisted Educational Content Workflow | MD Harun",
    description:
      "A tested portfolio prototype connecting learning objectives, instruction, practice, assessment, verification, and human review.",
  },
};

const navItems = [
  ["problem", "The problem"],
  ["goal", "The goal"],
  ["decision", "Key design decision"],
  ["workflow", "Workflow"],
  ["alignment", "Alignment"],
  ["testing", "Testing"],
  ["failures", "Failures & fixes"],
  ["evidence", "Project evidence"],
  ["artifacts", "Technical artifacts"],
  ["skills", "Skills demonstrated"],
  ["limitations", "Limitations"],
];

const tests = [
  ["01", "Standard Generation", "Feasible lesson brief and normal QA", "PASS"],
  ["02", "Prerequisite Gap", "Missing foundational skill in the learner profile", "Rule refined"],
  ["03", "Assessment Mismatch", "Conceptual objective tested only with calculations", "Rule refined"],
  ["04", "Misconception Trap", "False +20% / -20% cancellation claim", "Caught"],
  ["05", "Overloaded Brief", "Too many objectives and activities for 45 minutes", "Conflict reported"],
];

const fixes = [
  ["Prerequisites behaved like metadata only", "Prerequisite Risk Rule + diagnostic / remediation support"],
  ["Conceptual objective received calculation-only assessment", "Objective-tagged assessment mapping"],
  ["Fluent but false explanation could survive", "Independent example and answer verification"],
  ["Unrealistic scope could be silently compressed", "Feasibility Gate + Content Scope Conflict"],
  ["Practice could become number-substitution repetition", "Reasoning-based duplication control"],
  ["Difficulty could be inflated through awkward arithmetic", "Reasoning-based difficulty progression"],
  ["Lesson blocks could drift away from objectives", "Every block must map to an instructional need"],
  ["Generation could be treated as approval", "Separate Generation Pass and QA Pass"],
];

const skills = [
  "Educational AI",
  "Instructional Content Design",
  "Learning Objective Design",
  "Assessment Alignment",
  "Prompt Architecture",
  "Content QA",
  "Misconception Analysis",
  "Difficulty Progression",
  "Curriculum-Aware Workflow Design",
  "Structured Content Production",
  "Human-in-the-Loop Review",
  "Failure Analysis",
];

function Section({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 border-t border-slate-200 py-14 first:border-t-0 sm:py-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.45 }}
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

export default function Project03Page() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto max-w-[1120px] px-5 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
        >
          <span aria-hidden="true">←</span> Back to selected work
        </Link>

        <motion.header
          className="py-12 sm:py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
            Case Study · Project 03
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            AI-Assisted Educational Content Workflow
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A tested portfolio prototype for connecting educational objectives
            to instruction, examples, practice, assessment, verification, and
            human review.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Educational AI",
              "Instructional Design",
              "Assessment Alignment",
              "Content QA",
              "Human Review",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm">
            <span className="font-semibold text-slate-900">Status</span>
            <span className="h-1 w-1 rounded-full bg-blue-400" />
            <span className="font-semibold text-blue-700">
              Tested portfolio prototype
            </span>
          </div>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Case study
              </p>
              <nav className="mt-4 space-y-1">
                {navItems.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <Section id="problem" title="The problem">
              <p>
                AI can produce educational content quickly, but fast generation
                does not guarantee instructional alignment, learner-level fit,
                conceptual accuracy, valid examples, assessment coverage, or a
                correct answer key. A polished lesson can still fail as a
                learning experience.
              </p>
            </Section>

            <Section id="goal" title="The goal">
              <p>
                I designed a reusable workflow that starts with an educational
                brief and creates a traceable lesson package in which learning
                objectives connect to explanation, examples, guided practice,
                independent practice, assessment, verification, and final human
                review.
              </p>
            </Section>

            <Section
              id="decision"
              eyebrow="Core design"
              title="Every major content block must serve a defined instructional need."
            >
              <p>
                The central rule is simple: if a section cannot be linked to a
                learning objective, prerequisite, relevant misconception, or
                assessment need, it should normally be removed or shortened.
                This limits attractive but unnecessary AI-generated content.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Alignment chain
                </p>
                <p className="mt-4 font-mono text-sm leading-8 text-slate-200">
                  Objective → Instruction → Worked Example → Guided Practice →
                  Independent Practice → Assessment → Answer Verification
                </p>
              </div>
            </Section>

            <Section id="workflow" title="Workflow">
              <p>
                The workflow separates feasibility, objective mapping,
                generation, verification, QA, and human review so that a lesson
                is not treated as complete simply because a language model has
                produced it.
              </p>
              <Project03Flow />
            </Section>

            <Section id="alignment" eyebrow="Traceability" title="Learning objectives remain visible through the whole lesson">
              <p>
                Each objective receives a stable tag. The tag is reused across
                examples, practice, and assessment so a reviewer can see whether
                an objective was taught and whether it was actually measured.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                {[
                  ["LO1", "Percentage increase", "Explanation → example → practice → exit ticket"],
                  ["LO2", "Percentage decrease", "Explanation → example → practice → exit ticket"],
                  ["LO3", "New value after change", "Formula → applied example → independent item"],
                  ["LO4", "Percentage vs percentage points", "Concept explanation → comparison → reasoning item"],
                ].map(([tag, objective, coverage], index) => (
                  <div
                    key={tag}
                    className={`grid gap-3 p-5 sm:grid-cols-[90px_1fr_1.3fr] ${
                      index ? "border-t border-slate-200" : ""
                    }`}
                  >
                    <p className="font-mono text-sm font-bold text-blue-700">{tag}</p>
                    <p className="text-sm font-semibold text-slate-900">{objective}</p>
                    <p className="text-sm leading-6 text-slate-600">{coverage}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="testing" eyebrow="Testing" title="Five tests targeted different instructional failure modes">
              <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {tests.map(([number, title, description, result]) => (
                  <article
                    key={number}
                    className="flex h-full min-h-[245px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-black tracking-[0.16em] text-blue-700">
                      TEST {number}
                    </p>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                    <div className="mt-auto border-t border-slate-200 pt-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Result
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="failures" title="Testing changed the design">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                {fixes.map(([risk, fix], index) => (
                  <div
                    key={risk}
                    className={`grid gap-2 p-5 sm:grid-cols-[1fr_1fr] sm:gap-8 ${
                      index ? "border-t border-slate-200" : ""
                    }`}
                  >
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        Failure / Risk
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900">
                        {risk}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                        Design Fix
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {fix}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="evidence" eyebrow="Evidence" title="What this prototype actually demonstrates">
              <div className="mt-2 grid gap-4 sm:grid-cols-3">
                {[
                  ["4", "Mapped objectives", "Each traced into assessment"],
                  ["8", "Instructional QA dimensions", "Generation reviewed independently"],
                  ["5", "Constructed tests", "Different failure modes"],
                ].map(([value, label, note]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-slate-950">
                      {value}
                    </p>
                    <p className="mt-2 font-semibold text-slate-900">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  Validation status
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  Tested portfolio prototype
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The workflow was exercised against the constructed scenarios
                  documented in this case study. It is not presented as a
                  production-deployed curriculum platform or as independently
                  validated pedagogy.
                </p>
              </div>
            </Section>

            <Section
              id="artifacts"
              eyebrow="Technical artifacts"
              title="Inspect the workflow, alignment map, sample lesson, QA rules, and tests."
            >
              <Project03Artifacts />
            </Section>

            <Section id="skills" title="What this project demonstrates">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-950">Human-review position</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The workflow supports educator review. Curriculum alignment,
                  classroom suitability, and publication approval remain human
                  responsibilities when those decisions matter.
                </p>
              </div>
            </Section>

            <Section id="limitations" title="Limitations">
              <p>
                This is an independent tested portfolio prototype. I do not
                claim school deployment, student-outcome improvement, formal
                curriculum certification, teacher validation studies, or
                production LMS integration. The demonstration lesson and test
                cases are designed to show workflow architecture, instructional
                traceability, QA, and failure-driven refinement.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
