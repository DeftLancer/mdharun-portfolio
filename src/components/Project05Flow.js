const steps = [
  ["01","Collect Prompt","Capture the prompt, goal, inputs, output contract and known failures."],
  ["02","Structural Audit","Check clarity, hierarchy, inputs, constraints, grounding and failure handling."],
  ["03","Issue Register","Record evidence-backed issues with severity and failure examples."],
  ["04","Conflict Check","Detect impossible constraints and missing evidence."],
  ["05","Minimal Rewrite","Preserve working parts and fix only what matters."],
  ["06","Test","Run normal, missing-input, conflict, adversarial and format cases."],
  ["07","Refine","Patch weaknesses without duplicating rules."],
  ["08","Deliver","Provide revised prompt, tests, change log and limitations."],
];

export default function Project05Flow() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n,t,d]) => (
          <div key={n} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <span className="text-xs font-black text-blue-700">{n}</span>
            <h3 className="mt-4 font-semibold text-slate-950">{t}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
