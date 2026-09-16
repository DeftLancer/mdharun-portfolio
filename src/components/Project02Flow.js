const steps = [
  ["01", "Task + Evidence", "Collect the instruction, reference material and candidate output."],
  ["02", "Boundary Check", "Separate operational instructions from source content."],
  ["03", "Evaluate", "Review eight quality dimensions against explicit criteria."],
  ["04", "Classify", "Assign one primary error category and severity."],
  ["05", "Score", "Calculate the applicable rubric score without double-counting."],
  ["06", "Override", "Let Critical and essential-dimension failures outrank averages."],
  ["07", "Decide", "Return PASS, REVISE or FAIL using the decision hierarchy."],
  ["08", "Human Review", "Keep final approval with an appropriate human reviewer."],
];

export default function Project02Flow() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Evaluation Flow
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Evidence → evaluation → decision → human review
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
