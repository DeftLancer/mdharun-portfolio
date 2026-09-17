const steps = [
  ["01", "Source Intake", "Collect authoritative policy, SME notes, roles, tools, exceptions, and version information."],
  ["02", "Conflict Check", "Detect contradictions, stale material, and missing policy facts before drafting."],
  ["03", "Process Model", "Normalize trigger, inputs, owners, actions, decisions, exceptions, and completion."],
  ["04", "Boundary Check", "Classify details as internal-only, public-safe, or uncertain."],
  ["05", "Draft SOP", "Write executable internal steps with roles, decisions, exceptions, and quality checks."],
  ["06", "Derive KB", "Create customer-safe guidance from the same normalized process model."],
  ["07", "QA", "Check source fidelity, consistency, role clarity, exceptions, usability, and traceability."],
  ["08", "Human Approval", "Leave policy, legal, compliance, security, and publication approval with responsible humans."],
];

export default function Project04Flow() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Business Documentation Flow
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Sources → normalized process → SOP / KB → QA → approval
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
