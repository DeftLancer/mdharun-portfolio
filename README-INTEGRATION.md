# Project 05 Integration

Copy these files into the portfolio repo:

src/data/project05Artifacts.js
src/components/Project05Artifacts.js
src/components/Project05Flow.js
src/components/Project05Card.js
src/app/projects/prompt-audit-debugging-toolkit/page.js

In src/app/page.js add:

import Project05Card from "@/components/Project05Card";

Then place after Project 04:

<Project04Card />
<Project05Card />

Update src/app/sitemap.js using sitemap.js.complete.txt.

Run:
npm run dev
npm run build

Commit:
git add .
git commit -m "Add Project 05 prompt audit and debugging toolkit"
git push
