# Engineer Portfolio

A dark-mode, bento-grid personal portfolio for a full-stack engineer, built
with Next.js (App Router), Tailwind CSS, Framer Motion, and Lucide React.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces a production
build (this was verified to compile cleanly).

## Where to put your content

Almost everything lives in **`lib/data.ts`** — it's the single source of
truth for hero copy, project data (including the architecture nodes, perf
metrics, and mock API response for each project's deep dive), tech stack
entries, timeline entries, and social links. Edit that file first.

Other things to personalize:
- `app/layout.tsx` — page `<title>`, meta description, OpenGraph copy.
- `components/shared/NavBar.tsx` — the name shown in the top-left.
- `components/shared/Footer.tsx` — footer name/year line.
- `components/Contact/ContactForm.tsx` — the `handleSubmit` function is
  mocked with a `setTimeout`; wire it to a real API route, Formspree, or
  email service (see the `SWAP-IN` comment inside).

## Structure

```
app/                  # App Router entry: layout, page, global styles
components/
  Hero/                Hero copy, particle canvas, scramble-text role cycler
  Projects/            Bento gallery, deep-dive modal, and its 3 interactive
                        panels: ArchitectureExplainer, PerformanceToggle, MiniLab
  Stack/               Tech stack matrix with dependency highlighting
  Timeline/             Scroll-linked career timeline
  Contact/              Validated contact form + magnetic social badges
  shared/               CustomCursor, Magnetic wrapper, NavBar, Footer
lib/
  data.ts               All mock content — edit this to make it yours
  utils.ts               Small className helper
```

## Notes on the interactive pieces

- **Particle canvas** (`Hero/ParticleCanvas.tsx`) pauses on tab blur and
  respects `prefers-reduced-motion`, so it won't hurt battery or Core Web
  Vitals on hidden tabs.
- **Architecture Explainer** reads `project.architecture.nodes/edges` — add
  or reposition nodes with the `x`/`y` percentage fields.
- **Performance Toggle** interpolates between `performance.lighthouseBefore
  → lighthouseAfter` and the `metrics` array — swap in your own real
  before/after numbers per project.
- **Mini-Lab** simulates a network call using `miniLab.responseDelayMs` and
  renders `miniLab.mockResponse` as formatted JSON. Swap in a real fetch
  call once you have an API to point at.
- **Custom cursor** only activates on fine-pointer, motion-OK devices, and
  every interactive element that should trigger its "pointer" state has a
  `data-cursor-pointer` attribute — add that attribute to any new
  clickable element you introduce.

## Tech stack

Next.js 14 (App Router) · Tailwind CSS · Framer Motion · Lucide React · TypeScript
