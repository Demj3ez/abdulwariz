# Abdulwariz Yusuff — Portfolio

A premium, recruiter-focused portfolio site built with Next.js 15 (App Router),
TypeScript, Tailwind CSS v4, Framer Motion, and Lucide Icons.

## What's inside

- **Sticky nav** with dark/light mode toggle and a Download CV button
- **Hero** with an animated custom "systems flow" diagram (Strategy -> Operations/Marketing -> Automation)
- **About** with an animated stats row
- **Experience timeline** and **Education**, pulled from the real resume
- **Skills**, grouped into Business Operations, Digital Marketing, Technology, and AI & Automation
- **Featured Projects** grid -> each opens a full case study page at `/projects/[slug]`
  (Problem, Challenges, Approach, Process, Tools, Results, Lessons Learned)
- **Services**, **Testimonials** (placeholder -- swap in real quotes as you collect them),
  **Resume** (inline PDF preview + download), and a **Contact** section with a form
  (opens the visitor's email client -- no backend required)
- SEO metadata, Open Graph tags, JSON-LD structured data, `sitemap.xml`, `robots.txt`
- Fully responsive, accessible (focus states, semantic markup), light/dark theme

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Editing your content

Almost everything on the site (name, bio, experience, skills, projects, services,
testimonials, contact info) lives in one file:

```
src/lib/data.ts
```

Edit that file and the whole site updates -- no need to touch components for
routine content changes.

### Replacing the resume

Swap `public/resume.pdf` with your latest CV (same filename), and the "Download CV"
buttons and the inline resume preview will automatically use the new file.

### Adding a project / case study

Add a new object to the `projects` array in `src/lib/data.ts`. A new card and a new
`/projects/your-slug` case study page are generated automatically -- no extra routing
code needed.

### Testimonials

The `testimonials` array in `src/lib/data.ts` currently holds placeholder quotes,
as requested. Replace `quote`, `name`, and `context` with real client feedback
once you have it.

### Colors & fonts

Design tokens (colors for light/dark mode, fonts) are defined in
`src/app/globals.css` under `:root` and `:root.dark`. Fonts are self-hosted via
`@fontsource/inter` and `@fontsource/jetbrains-mono` (no external network calls
needed at build time).

## Deploying

This is a standard Next.js app -- the fastest path is Vercel:

```bash
npm i -g vercel
vercel
```

Or build it yourself:

```bash
npm run build
npm run start
```

## Tech stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide Icons
- Self-hosted Inter + JetBrains Mono fonts
