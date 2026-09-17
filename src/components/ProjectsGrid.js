import Link from "next/link";

const projects = [
  {
    number: "02",
    title: "AI Output Evaluation & Quality-Control System",
    summary:
      "A structured LLM evaluation workflow for detecting factual errors, unsupported claims, omissions, instruction violations, and high-impact format failures.",
    tags: ["LLM Evaluation", "AI QA", "Rubric Design"],
    meta: "5 constructed tests",
    href: "/projects/ai-output-evaluation-quality-control",
  },
  {
    number: "03",
    title: "AI-Assisted Educational Content Workflow",
    summary:
      "A tested instructional workflow connecting learning objectives to explanations, examples, practice, assessment, verification, and human review.",
    tags: ["Educational AI", "Instructional Design", "Content QA"],
    meta: "Objective-to-assessment alignment",
    href: "/projects/ai-assisted-educational-content-workflow",
  },
  {
    number: "04",
    title: "AI-Assisted SOP & Knowledge-Base Workflow",
    summary:
      "A business documentation workflow for turning policy and process sources into internal SOPs and public-safe knowledge-base content.",
    tags: ["Business AI", "SOP Design", "Knowledge Management"],
    meta: "6 constructed tests",
    href: "/projects/ai-assisted-sop-knowledge-base-workflow",
  },
  {
    number: "05",
    title: "Prompt Audit & Debugging Toolkit",
    summary:
      "A tested toolkit for diagnosing prompt weaknesses, applying minimum sufficient rewrites, and validating improvements with targeted tests.",
    tags: ["Prompt Audit", "Prompt Debugging", "Freelance-Ready"],
    meta: "7 constructed tests",
    href: "/projects/prompt-audit-debugging-toolkit",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.number}
          className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">
              Project {project.number}
            </p>

            <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-[11px] font-bold text-[var(--muted)]">
              {project.meta}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-[var(--foreground)]">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-7">
            <Link
              href={project.href}
              className="inline-flex items-center gap-2 font-bold text-[var(--accent)] transition group-hover:gap-3 hover:text-[var(--accent-dark)]"
            >
              Read the case study
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
