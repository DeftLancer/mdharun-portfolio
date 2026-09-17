import Link from "next/link";
import * as motion from "motion/react-client";
import Project04Flow from "@/components/Project04Flow";
import Project04Artifacts from "@/components/Project04Artifacts";

export const metadata = {
  title: "AI-Assisted SOP & Knowledge-Base Workflow",
  description:
    "A tested portfolio prototype for source-grounded SOP design, business process documentation, knowledge-base generation, internal/public information separation, and QA.",
  alternates: {
    canonical: "/projects/ai-assisted-sop-knowledge-base-workflow",
  },
  openGraph: {
    type: "article",
    url: "/projects/ai-assisted-sop-knowledge-base-workflow",
    title: "AI-Assisted SOP & Knowledge-Base Workflow | MD Harun",
    description:
      "A tested business AI workflow for turning policy and process sources into internal SOPs and public-safe knowledge-base content.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Assisted SOP & Knowledge-Base Workflow | MD Harun",
    description:
      "A tested business AI workflow for source-grounded SOP and knowledge-base design.",
  },
};

const navItems = [
  ["problem", "The problem"],
  ["goal", "The goal"],
  ["decision", "Key design decision"],
  ["workflow", "Workflow"],
  ["model", "Process model"],
  ["testing", "Testing"],
  ["failures", "Failures & fixes"],
  ["evidence", "Project evidence"],
  ["artifacts", "Technical artifacts"],
  ["skills", "Skills demonstrated"],
  ["limitations", "Limitations"],
];

const tests = [
  ["01", "Standard Process", "Consistent policy, named roles and one exception", "PASS"],
  ["02", "Source Conflict", "14-day and 30-day authoritative policies disagree", "Conflict surfaced"],
  ["03", "Missing Owner", "Manual review exists but no role is named", "Open question"],
  ["04", "Internal Leak", "Fraud controls appear in source material", "Blocked from public KB"],
  ["05", "SLA Overclaim", '"Usually 5–7 days" becomes a guarantee', "Corrected"],
  ["06", "Cross-Document Conflict", "SOP and KB disagree on exception handling", "Caught"],
];

const fixes = [
  ["Conflicting policies could be silently merged", "Source Authority & Conflict Check"],
  ["Missing owners could be invented", "Ambiguity Gate + OPEN QUESTION"],
  ["Happy-path documentation could omit known exceptions", "Exception & Escalation Coverage"],
  ["Internal controls could leak into public content", "INTERNAL_ONLY / PUBLIC_SAFE / UNKNOWN classification"],
  ['"Usually" could become a customer guarantee', "Source-Fidelity Rule for qualifiers and SLAs"],
  ["Vague steps could remain non-executable", "WHO / WHAT / INPUT / OUTPUT role-clarity check"],
  ["SOP and KB could contradict each other", "One normalized process model + consistency QA"],
  ["Stale policy could be presented as current", "Version / Traceability QA"],
];

const skills = [
  "Business AI Workflow Design",
  "SOP Design",
  "Knowledge Management",
  "Process Documentation",
  "Source Grounding",
  "Information Boundary Design",
  "Prompt Architecture",
  "Process QA",
  "Exception Mapping",
  "Ambiguity Handling",
  "Failure Analysis",
  "Human-in-the-Loop Review",
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

export default function Project04Page() {
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
            Case Study · Project 04
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            AI-Assisted SOP &amp; Knowledge-Base Workflow
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A tested portfolio prototype for converting business policy and
            process sources into executable internal SOPs and public-safe
            knowledge-base content while exposing ambiguity instead of inventing
            missing rules.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Business AI",
              "SOP Design",
              "Knowledge Management",
              "Source Grounding",
              "Process QA",
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
                Business documentation often starts from scattered policy
                notes, SME explanations, process steps, and exceptions. AI can
                turn that material into polished prose quickly, but polished
                prose is dangerous if it silently resolves source conflicts,
                invents missing owners, overstates service levels, or exposes
                internal-only information in public help content.
              </p>
            </Section>

            <Section id="goal" title="The goal">
              <p>
                I designed a reusable workflow that converts supplied business
                sources into a normalized process model, an executable internal
                SOP, and—when needed—a customer-facing knowledge-base article,
                with source fidelity, ambiguity handling, audience separation,
                QA, and human approval built into the process.
              </p>
            </Section>

            <Section
              id="decision"
              eyebrow="Core design"
              title="Do not let the model turn missing business rules into plausible policy."
            >
              <p>
                The central design decision is to surface uncertainty rather
                than hide it. Conflicting authoritative sources produce a
                SOURCE CONFLICT. Missing operational details become OPEN
                QUESTIONS. Public documentation is derived only after
                internal-only information has been separated.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Process architecture
                </p>
                <p className="mt-4 font-mono text-sm leading-8 text-slate-200">
                  Sources → Conflict Check → Process Model → Information Boundary
                  → SOP / KB → Cross-Document QA → Human Approval
                </p>
              </div>
            </Section>

            <Section id="workflow" title="Workflow">
              <Project04Flow />
            </Section>

            <Section id="model" eyebrow="Normalization" title="The workflow converts prose into an executable process model">
              <p>
                Before writing an SOP, the workflow extracts operational
                structure: trigger, inputs, owner, action, decision points,
                exceptions, escalation, completion, and the evidence produced.
                This makes missing links easier to detect than in free-form
                prose.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Trigger", "What starts the process?"],
                  ["Required Inputs", "What information or evidence is needed?"],
                  ["Responsible Role", "Who owns each action?"],
                  ["Decision Point", "What rule changes the path?"],
                  ["Exception / Escalation", "What happens outside the happy path?"],
                  ["Completion", "What state proves the process is finished?"],
                ].map(([title, note]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="testing" eyebrow="Testing" title="Six tests targeted business-documentation failure modes">
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

            <Section id="failures" title="Testing changed the workflow">
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
                  ["6", "Constructed tests", "Different business documentation risks"],
                  ["8", "QA dimensions", "Source, process, boundary and usability checks"],
                  ["2", "Audience outputs", "Internal SOP + public-safe KB"],
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
                  documented here. It is not presented as legal, compliance,
                  security, or policy-owner approval and is not claimed to be a
                  production-deployed documentation system.
                </p>
              </div>
            </Section>

            <Section
              id="artifacts"
              eyebrow="Technical artifacts"
              title="Inspect the workflow, process model, SOP, KB article, QA rules, and tests."
            >
              <Project04Artifacts />
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
                  The workflow supports documentation work. Policy, legal,
                  compliance, security, process-owner, and publication decisions
                  remain with the responsible human reviewers.
                </p>
              </div>
            </Section>

            <Section id="limitations" title="Limitations">
              <p>
                This is an independent tested portfolio prototype. I do not
                claim client deployment, measured operational savings, policy
                certification, legal review, security approval, or production
                knowledge-base integration. The demonstration process and test
                cases are constructed to show workflow architecture,
                source-grounding discipline, information-boundary design, and
                failure-driven refinement.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
