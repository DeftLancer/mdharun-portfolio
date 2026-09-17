# Project 04 Website Integration

This pack adds:

- Project 04 case-study page
- Project 04 technical-artifact data
- Expand/copy artifact UI
- Business-documentation workflow diagram
- Homepage Selected Work card

## 1. Copy these files into the portfolio repo

```text
src/data/project04Artifacts.js
src/components/Project04Artifacts.js
src/components/Project04Flow.js
src/components/Project04Card.js
src/app/projects/ai-assisted-sop-knowledge-base-workflow/page.js
```

## 2. Update the homepage

Open:

```text
src/app/page.js
```

Add:

```js
import Project04Card from "@/components/Project04Card";
```

Inside the existing Selected Work section, place it after Project 03:

```jsx
<Project02Card />
<Project03Card />
<Project04Card />
```

## 3. Update sitemap

Replace:

```text
src/app/sitemap.js
```

with the content from:

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
http://localhost:3000/projects/ai-assisted-sop-knowledge-base-workflow
```

## 5. Production build

```bash
npm run build
```

## 6. Commit and push

```bash
git add .
git commit -m "Add Project 04 SOP and knowledge-base workflow case study"
git push
```
