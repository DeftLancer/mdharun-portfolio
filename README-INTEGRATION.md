# Project 03 Website Integration

This pack adds:

- Project 03 case-study page
- Project 03 technical-artifact data
- Expand/copy artifact UI
- Educational-content workflow diagram
- Homepage Selected Work card

## 1. Copy these files into the portfolio repo

```text
src/data/project03Artifacts.js
src/components/Project03Artifacts.js
src/components/Project03Flow.js
src/components/Project03Card.js
src/app/projects/ai-assisted-educational-content-workflow/page.js
```

## 2. Update the homepage

Open:

```text
src/app/page.js
```

Add this import:

```js
import Project03Card from "@/components/Project03Card";
```

Place the card inside the existing `Selected work` section after Project 02:

```jsx
<Project02Card />
<Project03Card />
```

## 3. Update sitemap

Replace `src/app/sitemap.js` with the code from:

```text
sitemap.js.complete.txt
```

## 4. Run locally

```bash
npm run dev
```

Check:

```text
http://localhost:3000/
http://localhost:3000/projects/ai-assisted-educational-content-workflow
```

## 5. Production build

```bash
npm run build
```

## 6. Commit and push

```bash
git add .
git commit -m "Add Project 03 educational content workflow case study"
git push
```
