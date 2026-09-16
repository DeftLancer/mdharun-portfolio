const steps = [
  ["01", "Educational Brief", "Collect level, topic, objectives, duration, prerequisites, references and constraints."],
  ["02", "Feasibility Gate", "Check whether the requested scope fits the learner level and available time."],
  ["03", "Objective Map", "Connect each objective to instruction, practice and assessment coverage."],
  ["04", "Content Blueprint", "Plan explanations, examples, misconceptions and verification needs before drafting."],
  ["05", "Generate", "Create the lesson, examples, guided practice, independent practice and assessment."],
  ["06", "Verify", "Recalculate examples and answers and check terminology and conceptual accuracy."],
  ["07", "Instructional QA", "Review eight QA dimensions independently from generation."],
  ["08", "Human Review", "Keep curriculum and publication approval with an educator or responsible reviewer."],
];

export default function Project03Flow() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Content Workflow
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Brief → objective alignment → generation → QA → human review
          </p>
        </div>
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          TESTED FLOW
        </span>
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([number, title, description], index) => (
          <div
            key={number}
            className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black tracking-[0.16em] text-blue-700">
                {number}
              </span>
              {index < steps.length - 1 && (
                <span className="text-slate-300" aria-hidden="true">
                  →
                </span>
              )}
            </div>
            <h3 className="mt-4 font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
