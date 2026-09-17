"use client";
import { useState } from "react";
import { project05Artifacts } from "@/data/project05Artifacts";

function Card({ artifact }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(artifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{artifact.eyebrow}</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{artifact.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{artifact.description}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={copy} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800">
              {copied ? "Copied" : "Copy"}
            </button>
            <button onClick={() => setOpen(!open)} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold !text-white">
              {open ? "Collapse ↑" : "Expand ↓"}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-slate-950 p-4 sm:p-6">
          <pre className="max-h-[720px] overflow-auto whitespace-pre-wrap break-words font-mono text-[12px] leading-6 text-slate-200">
            {artifact.content}
          </pre>
        </div>
      )}
    </article>
  );
}

export default function Project05Artifacts() {
  return <div className="mt-8 space-y-4">{project05Artifacts.map(a => <Card key={a.id} artifact={a} />)}</div>;
}
