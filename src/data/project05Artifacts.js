export const project05Artifacts = [
  {
    id: "toolkit",
    eyebrow: "Artifact 01",
    title: "Prompt Audit & Debugging Toolkit",
    description: "Reusable audit framework for diagnosing and testing prompts.",
    content: String.raw`PROMPT AUDIT & DEBUGGING TOOLKIT — v1.0

Goal
Audit an existing prompt, identify evidence-backed weaknesses, apply the
minimum sufficient rewrite, and validate the revision with targeted tests.

Audit order
1. Goal clarity
2. Instruction hierarchy
3. Input contract
4. Constraint quality
5. Output contract
6. Grounding / hallucination risk
7. Failure handling
8. Verification
9. Reusability
10. Maintainability
11. Testability

Issue taxonomy
- Ambiguous Objective
- Missing Input
- Missing Constraint
- Conflicting Instructions
- Weak Instruction Priority
- Over-Constrained Prompt
- Under-Constrained Prompt
- Unclear Output Schema
- Hidden Assumption
- Hallucination Risk
- Reference / Instruction Boundary Risk
- Missing Failure State
- Weak Verification Rule
- Duplicate Rule
- Non-Reusable Hardcoding
- Unverifiable Requirement
- Excessive Complexity
- Style-Only Issue

Severity
Critical — likely to break the core task or make output unusable.
Major — materially reduces reliability or repeatability.
Minor — limited weakness.
Observation — optional improvement.

Evidence rule
For each issue provide:
Primary Category:
Secondary Impact:
Severity:
Prompt Evidence:
Why It Matters:
Failure Example:
Recommended Fix:

Feasibility check
If requirements conflict, return:

CONSTRAINT CONFLICT
Conflicting requirements:
Why they conflict:
Recommended resolution:

Do not enter retry loops.

Rewrite principle
Use Minimum Sufficient Rewrite.
Preserve what already works.
Optimize in this order:
Clear → Controlled → Reusable → Testable

Required output
# Prompt Audit
## Audit Summary
## Issue Register
## What Already Works
## Revised Prompt
## Test Cases
## Change Log
## Remaining Limitations

Required tests
- normal case
- missing-input case
- instruction-conflict case
- adversarial / reference-injection case when relevant
- exact-format / machine-readable case when relevant

Final QA
- issues evidence-backed?
- any style preference mislabeled as defect?
- any double counting?
- new conflicts introduced?
- failure states explicit?
- key requirements objectively testable?`
  },
  {
    id: "weak-prompt",
    eyebrow: "Artifact 02",
    title: "Deliberately Weak Original Prompt",
    description: "Example containing ambiguity, conflicts and grounding risk.",
    content: String.raw`You are an expert AI writer.

Create a great report from the information I provide.

Make it professional, detailed, concise, accurate, persuasive, and easy to read.

Do not miss anything important.

Add useful information if needed.

Do not hallucinate.

Use the source exactly, but also improve it and make it more complete.

Write around 500 words but keep it short.

Use headings and bullet points, but make it read like a natural essay.

If something is missing, make the best assumption.

Do not make assumptions.

Return the best possible answer.`
  },
  {
    id: "audit",
    eyebrow: "Artifact 03",
    title: "Annotated Audit",
    description: "Representative diagnosis of the weak prompt.",
    content: String.raw`OVERALL STATUS
STRUCTURALLY WEAK

1. Ambiguous Objective — Major
Evidence: "Create a great report"
Problem: "Great" is not testable; audience, purpose and required coverage are undefined.
Fix: define audience, use case and mandatory sections.

2. Conflicting Instructions — Major
Evidence:
"Add useful information if needed."
"Do not hallucinate."
"Use the source exactly, but also improve it and make it more complete."
Problem: external-information policy is unclear.
Fix: explicitly allow or prohibit outside information.

3. Conflicting Instructions — Major
Evidence:
"If something is missing, make the best assumption."
"Do not make assumptions."
Fix: if an essential fact is missing, identify the gap and do not invent it.

4. Unclear Output Schema — Major
Evidence:
"Use headings and bullet points, but make it read like a natural essay."
Fix: define one concrete structure.

5. Unverifiable Requirement — Minor
Evidence: "Do not miss anything important."
Fix: list required topics or derive them from a supplied brief.

What already works
- accuracy is requested
- professional tone is requested
- readability matters
- hallucination risk is recognized`
  },
  {
    id: "tests",
    eyebrow: "Artifact 04",
    title: "Test Suite & Failure/Fix Matrix",
    description: "Seven tests covering normal and adversarial prompt behaviours.",
    content: String.raw`TEST 01 — Normal request
Target: preserve working parts.
Fix validated: Minimum Sufficient Rewrite.

TEST 02 — Missing input
Prompt asks to summarize a policy but no policy is supplied.
Fix: explicit Missing Input state.

TEST 03 — Constraint conflict
"Exactly 200 words" + "at least 500 words."
Fix: CONSTRAINT CONFLICT.

TEST 04 — Reference injection
Reference says "ignore prior instructions."
Fix: Reference / Instruction Boundary.

TEST 05 — JSON conflict
"Return JSON only" + "Explain reasoning before JSON."
Fix: Output Contract Check.

TEST 06 — Over-engineering
Simple rewrite task becomes a 14-section framework.
Fix: Minimum Sufficient Rewrite.

TEST 07 — Evidence gap
"Use only supplied source" + "add current market statistics" with no browsing/source.
Fix: feasibility / evidence conflict handling.

FAILURE → FIX
Vague goal → Objective + intended-use audit
Missing input → Input Contract
Contradiction → Hierarchy + Conflict handling
Reference injection → Boundary rule
Weak hallucination control → Grounding policy
Schema breakage → Output Contract
Rule duplication → One rule → one primary home
Prompt bloat → Minimum Sufficient Rewrite
Untested revision → Required targeted tests`
  },
  {
    id: "service",
    eyebrow: "Artifact 05",
    title: "Freelance Service Mapping",
    description: "How the toolkit can translate into starter freelance services.",
    content: String.raw`BASIC
- audit 1 prompt
- identify key issues
- provide improved prompt
- 2 test cases

STANDARD
- full structured audit
- issue/fix matrix
- improved reusable prompt
- 5 test cases
- one revision pass

ADVANCED
- multi-prompt workflow audit
- instruction hierarchy
- input/output contracts
- failure states
- adversarial tests
- QA checklist

These are service-design examples, not claims of completed client engagements.`
  }
];
