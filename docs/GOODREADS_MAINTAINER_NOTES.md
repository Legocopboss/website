# Goodreads Carousel — Maintainer Notes (Checkpoint)

Purpose
- A single reference for engineers and agents working on the Mantine-based Goodreads carousel. Contains root causes, command snippets, debugging notes, change history, and suggested next steps.

What broke (symptoms observed)
- Slides stacked vertically (all slides full-width, one-per-row).
- Cards overlapped or occupied entire container width on desktop, leaving large empty margins.
- `Slide X of Y` status text was visible above the carousel (initially desired to hide).
- Ratings / review text formatting and wrapping issues during iterative edits.

Root causes and fixes (detailed)
1) Missing Carousel CSS (critical)
   - Cause: Mantine's carousel relies on package-provided CSS (`@mantine/carousel/styles.css`) to set up the viewport/track/slide styles. Without it there's no `.mantine-Carousel-track` flex layout and the viewport doesn't hide overflow.
   - Fix applied: import the stylesheet globally in `src/index.js`:

```js
// src/index.js
import '@mantine/carousel/styles.css';
```

   - Notes: The package exports `styles.css` (see `node_modules/@mantine/carousel/styles.css`) and marks `*.css` as sideEffects so importing it is required in CRA setups.

2) Slide sizing & card layout
   - Cause: Without carousel CSS, slides were defaulting to container width. Also, card components were allowed to flex-grow causing overlap in some layouts.
   - Fix applied:
     - Set `Carousel` `slideSize="300px"` and `slideGap={24}` so each slide has a fixed width.
     - Make `BookCard` `flex: '0 0 auto'` and `width: 300`.
     - Center slides via `align="center"` and tweak container maxWidth (see recommended desktop fix below).

3) JSX and prop mistakes during edits
   - Examples: `slideGap="24px"` (string) vs `slideGap={24}` (number), accidentally unclosed JSX when patching, extra wrapper divs that changed layout.
   - Best practices: lint and run local dev server (or `npm run build`) after edits; prefer numeric props for Mantine when docs indicate numbers.

4) Accessibility / status text
   - Action taken: Visually-hidden status element (`mantine-VisuallyHidden-root`) was hidden via CSS inside `#goodreads` to remove the visible "Slide X of Y".
   - Recommendation: Prefer visually hidden but accessible patterns: instead of `display:none` (removes from screen readers), use Mantine's `VisuallyHidden` utilities or set styles that preserve `aria-live` semantics while hiding visually (e.g., off-screen positioning). File change currently hides it visually; consider restoring accessible semantics later.

Files changed (high level)
- `src/index.js` — added `import '@mantine/carousel/styles.css'`.
- `src/components/goodreads/Goodreads.jsx` — replaced raw widget with Mantine carousel and `BookCard`; fixed slideSize, breakpoints, card width, outline, shadow, hover, review wrapping, and header alignment.
- `src/components/goodreads/goodreads.css` — added targeted rule to hide slide status within `#goodreads`.
- `docs/GOODREADS_MAINTAINER_NOTES.md` — this file (updated).

Local debugging steps I used (repro)
1. Start dev server locally:

```bash
npm install
npm start
```

2. Open `http://localhost:3000` and scroll to `#goodreads`.
3. Inspect DOM (DevTools) to confirm existence of:
   - `.mantine-Carousel-root` (root)
   - `.mantine-Carousel-viewport` (viewport; should have overflow:hidden)
   - `.mantine-Carousel-track` (track; should be display:flex)
   - `.mantine-Carousel-slide` (slides; should have `flex:0 0 var(--carousel-slide-size)`)
4. If slides appear stacked, confirm `@mantine/carousel/styles.css` is loaded (Search `Network` or `Sources`) and that `.mantine-Carousel-track` style rules are present. If missing, re-add import.

DOM inspection snippets used
- Get slide rects (useful to detect stacking):

```js
document.querySelectorAll('#goodreads .mantine-Carousel-slide').forEach(s => console.log(s.getBoundingClientRect()));
```

Design / UX decisions and options
- Constrain the carousel container width for desktop (recommended): center the carousel in a max-width container (e.g., 1100px) so cards don't float in a huge canvas. This preserves the card scale you like on mobile and improves desktop composition.
- Alternately, use `slideSize` as a percent on large viewports (e.g., `25%` or `30%`) to stretch cards proportionally, or switch to a grid layout for very wide screens.
- To show the user there's more content:
  - Use `align="start"` with a slightly narrower `slideSize` so the next slide peeks in. (Visually obvious next card.)
  - Or overlay arrow controls with stronger contrast (current fix) and an explicit counter `1 / 6` placed on the card.

Recommended code snippets

- Constrain container width (recommended):

```jsx
<Container style={{ paddingTop: 10, paddingBottom: 30, maxWidth: 1100, margin: '0 auto' }}>
  {/* Carousel here */}
</Container>
```

- Responsive `Carousel` breakpoints example:

```jsx
const breakpoints = [
  { maxWidth: 1200, slideSize: '33%' },
  { maxWidth: 900, slideSize: '50%' },
  { maxWidth: 600, slideSize: '100%' },
];

<Carousel slideSize="300px" slideGap={24} breakpoints={breakpoints} align="center" />
```

- Peek next slide variant:

```jsx
<Carousel slideSize="280px" slideGap={20} align="start" />
```

Testing and validation
- Cross-check desktop and narrow viewports using responsive DevTools (Chrome/Firefox).
- Run the following checks if something looks wrong:
  - Is `@mantine/carousel/styles.css` loaded?
  - Does `.mantine-Carousel-track` exist and have `display:flex`?
  - Are `.mantine-Carousel-slide` elements sized with `flex: 0 0 <size>`?

Accessibility notes
- The carousel adds a status element for screen readers. We hid it inside `#goodreads` per the UI direction, but that can reduce discoverability for assistive tech. Prefer an approach that keeps the element in the accessibility tree but visually hidden via off-screen positioning.

Pitfalls to avoid
- Don't pass CSS-like strings into numeric props (e.g., `slideGap="24px"` is wrong; use `slideGap={24}`).
- Avoid accidental JSX syntax errors when patching multiple places; always run a local build or lint pass.

Next recommended actions
- (Short) Constrain the container width to ~1100px to improve desktop composition — low risk.
- (Medium) Add a peek-of-next slide by switching `align` to `start` and reducing `slideSize` slightly.
- (Long) Add unit/UI tests for carousel DOM shape and add a11y checks (axe).

Change log (detailed)
- 2026-08-24: Initial fix — added carousel CSS import, set `slideSize`, fixed `BookCard` flex rules.
- 2026-08-24: Visual polish — shadow, outline, hover, review wrapping; centered headers.
- 2026-09-12: Checkpoint — expanded maintainer notes and recommended next steps.

Contact
- Ask the last committer for context, or review the PR history for the `Goodreads.jsx` changes.

---
Checkpoint taken: notes updated and saved to `docs/GOODREADS_MAINTAINER_NOTES.md`.

