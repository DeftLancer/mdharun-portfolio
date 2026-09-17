import Link from "next/link";

export default function Project05Card() {
  const tags = ["Prompt Audit","Prompt Debugging","Failure Analysis","Freelance-Ready"];
  return (
    <article className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Project 05</p>
          <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Prompt Audit &amp; Debugging Toolkit
          </h3>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            A tested toolkit for diagnosing weak prompts, documenting failure risks, applying minimum sufficient rewrites, and validating improvements with targeted tests.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map(t => <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">{t}</span>)}
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              ["Method","Evidence-backed issue register"],
              ["Rewrite","Minimum sufficient change"],
              ["Testing","7 constructed scenarios"],
            ].map(([l,v]) => (
              <div key={l} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{l}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{v}</p>
              </div>
            ))}
          </div>
          <Link href="/projects/prompt-audit-debugging-toolkit" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold !text-white">
            Read the case study →
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Audit architecture</p>
          <div className="mt-6 space-y-3">
            {["Prompt + goal intake","Structural diagnosis","Issue severity","Constraint conflict check","Minimal rewrite","Targeted tests","Change log + limitations"].map((item,i)=>(
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">{String(i+1).padStart(2,"0")}</span>
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
