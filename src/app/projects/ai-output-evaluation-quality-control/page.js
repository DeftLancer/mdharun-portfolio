import Link from "next/link";
import * as motion from "motion/react-client";
import Project02Flow from "@/components/Project02Flow";
import Project02Artifacts from "@/components/Project02Artifacts";

export const metadata = {
  title: "AI Output Evaluation & Quality-Control System",
  description:
    "A tested portfolio prototype for structured LLM evaluation, error classification, source grounding, severity analysis, and human-in-the-loop AI quality assurance.",
  alternates: {
    canonical: "/projects/ai-output-evaluation-quality-control",
  },
  openGraph: {
    type: "article",
    url: "/projects/ai-output-evaluation-quality-control",
    title: "AI Output Evaluation & Quality-Control System | MD Harun",
    description:
      "A tested portfolio prototype for structured LLM evaluation, source grounding, error classification, and AI quality assurance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Output Evaluation & Quality-Control System | MD Harun",
    description:
      "A tested portfolio prototype for structured LLM evaluation, source grounding, error classification, and AI quality assurance.",
  },
};

const navItems = [
  ["problem", "The problem"],
  ["goal", "The goal"],
  ["architecture", "Architecture"],
  ["workflow", "Workflow"],
  ["testing", "Testing"],
  ["failure", "Failure discovered"],
  ["fixes", "Design fixes"],
  ["evidence", "Project evidence"],
  ["artifacts", "Technical artifacts"],
  ["skills", "Skills demonstrated"],
  ["limitations", "Limitations"],
];

const dimensions = [
  ["Instruction Compliance", "Did the response follow the actual task?"],
  ["Factual Accuracy", "Are factual claims correct against available evidence?"],
  ["Groundedness", "Did the model add unsupported claims?"],
  ["Completeness", "Were required elements omitted?"],
  ["Relevance", "Did the response stay focused on the task?"],
  ["Clarity & Organization", "Is the output understandable and usable?"],
  ["Format Compliance", "Did it follow structural and machine-readable requirements?"],
  ["Tone & Audience Fit", "Is the language appropriate for the intended reader?"],
];

const tests = [
  ["01", "Standard Failure", "Wrong facts, hallucination and omission", "FAIL"],
  ["02", "Subtle Fidelity", "Meaning-changing qualifier shifts", "REVISE"],
  ["03", "Strict Format", "Correct content but broken parser contract", "Severity-aware"],
  ["04", "Adversarial", "Instructions embedded inside source material", "FAIL"],
  ["05", "Insufficient Evidence", "Unsupported claim without proof of falsity", "REVISE"],
];

const fixes = [
  ["Double-counting risk", "Primary Category + Secondary Impact"],
  ["Meaning lost through small qualifiers", "Semantic Fidelity Rule"],
  ["Cosmetic and parser-breaking formats treated alike", "Format Criticality Rule"],
  ["Source text could behave like instructions", "Instruction / Reference Boundary"],
  ["Unsupported could be mislabeled false", '"Not verifiable from the supplied evidence"'],
  ["High average score could hide severe defects", "Severity Override"],
  ["FAIL and REVISE could blur together", "Regeneration vs Minimum Sufficient Correction"],
  ["Style preference could become a fake error", "Evidence Requirement"],
];

const skills = [
  "LLM Evaluation",
  "AI Quality Assurance",
  "Prompt Testing",
  "Rubric Design",
  "Hallucination Detection",
  "Error Classification",
  "Instruction Hierarchy",
  "Source Grounding",
  "Adversarial Testing",
  "Failure Analysis",
  "Structured Revision",
  "Human-in-the-Loop AI",
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

export default function Project02Page() {
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
            Case Study · Project 02
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            AI Output Evaluation &amp; Quality-Control System
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A tested portfolio prototype for reviewing AI-generated outputs
            against explicit instructions, supplied evidence, quality criteria,
            severity rules, and human-review requirements.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "LLM Evaluation",
              "AI Quality Assurance",
              "Source Grounding",
              "Rubric Design",
              "Adversarial Testing",
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
                AI-generated content can look polished while still containing
                factual errors, unsupported claims, missing requirements,
                instruction violations, or formatting defects. A reviewer who
                relies mainly on fluency can therefore approve an output that is
                confident, readable, and wrong.
              </p>
            </Section>

            <Section id="goal" title="The goal">
              <p>
                I wanted to design a reusable evaluation workflow that turns
                vague quality judgments into evidence-backed review. The system
                needed to distinguish between incorrect, unsupported,
                incomplete, non-compliant, poorly formatted, and merely
                improvable outputs.
              </p>
            </Section>

            <Section
              id="architecture"
              eyebrow="Core design"
              title="Score the response — but do not let the average hide a serious error."
            >
              <p>
                The framework uses eight 0–4 evaluation dimensions, then applies
                a severity hierarchy before issuing the final PASS, REVISE, or
                FAIL decision. This keeps a polished response from passing when
                it contains a Critical factual or groundedness failure.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {dimensions.map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Decision hierarchy
                </p>
                <p className="mt-4 font-mono text-sm leading-8 text-slate-200">
                  Critical Error → Essential-Dimension Failure → Major-Error
                  Pattern → Numerical Score → Minor Issues / Observations
                </p>
              </div>
            </Section>

            <Section id="workflow" title="Workflow">
              <p>
                The system separates evidence collection, quality review, error
                classification, severity analysis, decision logic, revision, and
                final human review rather than treating evaluation as one
                impressionistic step.
              </p>
              <Project02Flow />
            </Section>

            <Section id="testing" eyebrow="Testing" title="Five deliberately different failure modes">
              <p>
                I tested the framework against constructed cases designed to
                expose different evaluator weaknesses rather than repeating the
                same type of obvious error.
              </p>

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

            <Section id="failure" title="Failure discovered">
              <p>
                The first evaluation design had a hidden scoring problem. A
                single fabricated statement could damage both Factual Accuracy
                and Groundedness, which made it easy to report and penalize the
                same underlying defect twice.
              </p>

              <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold text-amber-950">
                  Example failure
                </p>
                <p className="mt-2 text-sm leading-7 text-amber-900/80">
                  “Several enterprise pilots converted into signed contracts”
                  can be both factually false and ungrounded. Treating those as
                  two independent issues would artificially amplify one defect.
                </p>
              </div>
            </Section>

            <Section id="fixes" title="The design was refined through failure-driven testing">
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

            <Section id="evidence" eyebrow="Evidence" title="What was actually tested and changed">
              <p>
                The portfolio does not present the final evaluator prompt as
                proof by itself. The evidence is the sequence of constructed
                tests, the weaknesses they exposed, and the concrete rules added
                to address those weaknesses.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["5", "Test scenarios", "Different evaluator failure modes"],
                  ["8", "Quality dimensions", "0–4 scoring when applicable"],
                  ["4", "Severity levels", "Critical / Major / Minor / Observation"],
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
                  Current validation status
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  Tested portfolio prototype
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The framework has been tested against the defined constructed
                  scenarios used in this project. It is not presented as a
                  production-deployed, independently certified, or statistically
                  benchmarked evaluation system.
                </p>
              </div>
            </Section>

            <Section
              id="artifacts"
              eyebrow="Technical artifacts"
              title="Inspect the implementation behind the case study."
            >
              <p>
                The case study is intentionally readable at a high level. The
                evaluator specification, test suite, failure/fix record, and
                representative annotated evaluation are available below for
                deeper inspection.
              </p>
              <Project02Artifacts />
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
                  The framework is designed as a decision-support system for
                  human reviewers, not as an independent authority. High-stakes
                  outputs still require appropriate human verification.
                </p>
              </div>
            </Section>

            <Section id="limitations" title="Limitations">
              <p>
                This is an independent tested portfolio prototype. I do not claim
                production deployment, commercial client adoption, large-scale
                inter-rater studies, cross-model benchmarking, or independently
                measured accuracy improvements. The test suite is deliberately
                constructed to demonstrate evaluation design and failure
                analysis, not to establish universal reliability.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
