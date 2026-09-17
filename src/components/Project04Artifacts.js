"use client";

import { useState } from "react";
import { project04Artifacts } from "@/data/project04Artifacts";

function ArtifactCard({ artifact }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(artifact.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
          {artifact.eyebrow}
        </p>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              {artifact.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {artifact.description}
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold !text-white transition hover:bg-slate-800"
            >
              {expanded ? "Collapse ↑" : "Expand ↓"}
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-slate-200 bg-slate-950 p-4 sm:p-6">
          <pre className="max-h-[720px] overflow-auto whitespace-pre-wrap break-words font-mono text-[12px] leading-6 text-slate-200 sm:text-[13px]">
            {artifact.content}
          </pre>
        </div>
      )}
    </article>
  );
}

export default function Project04Artifacts() {
  return (
    <div className="mt-8 space-y-4">
      {project04Artifacts.map((artifact) => (
        <ArtifactCard key={artifact.id} artifact={artifact} />
      ))}
    </div>
  );
}
