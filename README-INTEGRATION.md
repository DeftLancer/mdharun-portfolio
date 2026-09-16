# Project 02 Website Integration

This pack adds:

- Project 02 case-study page
- Project 02 technical-artifact data
- Expand/copy artifact UI
- Evaluation workflow diagram
- Homepage Selected Work card

## 1. Copy these files into the portfolio repo

```text
src/data/project02Artifacts.js
src/components/Project02Artifacts.js
src/components/Project02Flow.js
src/components/Project02Card.js
src/app/projects/ai-output-evaluation-quality-control/page.js
```

## 2. Update the homepage

Open:

```text
src/app/page.js
```

Add this import with the other component imports:

```js
import Project02Card from "@/components/Project02Card";
```

Then place this line inside the existing `Selected work` section, directly
after the complete Project 01 card and before the Services section:

```jsx
<Project02Card />
```

Do not replace the finished Project 01 card.

## 3. Update sitemap

Replace `src/app/sitemap.js` with the complete code in `sitemap.js.complete.txt`.

## 4. Run locally

From the project root:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
http://localhost:3000/projects/ai-output-evaluation-quality-control
```

## 5. Production check

```bash
npm run build
```

Then commit and push:

```bash
git add .
git commit -m "Add Project 02 AI output evaluation case study"
git push
```

Vercel should deploy automatically if the GitHub project is already connected.
