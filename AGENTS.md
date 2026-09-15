**Goodreads Widget — Agent Handoff Notes**

This document captures what I learned, troubleshooting steps, and actionable advice for the next agent who works on the Goodreads -> Mantine carousel replacement in this repository.

**Overview:**
- **Goal:** Replace the Goodreads widget HTML/CSS with Mantine cards inside a responsive carousel, preserving both `to-read/up-next` and `read` shelves, and show image, title, author, rating (star string), review, and link.
- **Outcome:** Working Mantine carousel with responsive slide sizing, visible star-string ratings (STAR_MAP), and bookshelf wrapper styling.

**Key Findings & Root Causes**
- **Mantine carousel requires its stylesheet.** If `@mantine/carousel/styles.css` is not imported (e.g., in `src/index.js`), slides can stack vertically because CSS variables controlling slide size are missing.
- **CSS variables drive layout.** The carousel layout uses `--carousel-slide-size`. When this isn't set by the stylesheet, inline sizing/flex fallbacks may cause unexpected stacking.
- **JS-driven breakpoints are reliable.** Using `useMediaQuery` to compute exact `slideSize` and `slideGap` at runtime ensures consistent results across screen sizes when CSS-only breakpoints are insufficient.

**What I Troubleshot**
- Missing `@mantine/carousel/styles.css` import (fixed by adding import in `src/index.js`).
- Stacked slides due to missing CSS vars — verified by inspecting computed styles with a DOM probe (Playwright helper used during debug).
- Duplicate/competing rating UI — initially both a star-string and Mantine `Rating` were rendered. Resolved by reverting to the star-string mapping (`STAR_MAP`) per user preference.

**Useful Tools & Techniques**
- Use `page.evaluate()` (Playwright) or browser devtools to inspect a slide element and check `getComputedStyle(element).flex` and the presence/value of `--carousel-slide-size`.
- Compute `slideSize` in JS with conditionals (desktop: 25–33%, tablet: 50%, mobile: 100%) and set `slideGap` small for snappy snap behavior.
- Render rating as an enum-like star string when you want a compact, predictable inline representation. Example mapping: `['☆☆☆☆☆','★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★']`.

**Practical Checklist For Next Agent**
- Confirm `@mantine/carousel/styles.css` is imported (usually in `src/index.js`).
- Verify carousel slides compute to the expected percentage widths in desktop/tablet/mobile (inspect `flex` and `--carousel-slide-size`).
- Ensure `STAR_MAP` or rating rendering matches UX requirements (visible string vs icons). Avoid rendering both at once.
- Test the carousel both with JS enabled and consider a sensible static fallback (the original widget included noscript HTML for non-JS users).
- Run the app locally (`npm start`) and test responsive breakpoints, then visually verify text alignment, review wrapping, and card outlines.

**Common Roadblocks & How to Avoid Them**
- CSS conflicts: site-level CSS may override Mantine styles. If layout breaks, temporarily isolate the component or use Mantine `sx` props to scope styles.
- Missing assets: Goodreads images use external URLs — consider graceful fallback or lazy-loading to avoid layout shifts.
- Invisible layout bugs: if only one card displays or cards stack, check for missing CSS imports before changing JS logic.

**Recommended Quick Tests**
1. Start dev server: `npm start` and open the page.
2. Inspect a carousel slide and run in console: `getComputedStyle(document.querySelector('.mantine-Carousel-slide')).getPropertyValue('--carousel-slide-size')`.
3. Check `flex` on the slide (should be `0 0 <percentage>`).
4. Resize to mobile and ensure slides snap 100% width.

**Notes on Breaking Work Down**
- Break features into small verifiable steps: (A) make a static data array and render one `BookCard`; (B) wire Mantine `Carousel` with one slide; (C) add responsive sizing; (D) import carousel CSS; (E) polish visuals and accessibility.
- After each step, run the app and verify the DOM and styles before moving on. This prevents regressions and narrows the scope of debugging.

**Final Tips**
- Keep the bookshelf wrapper styles consistent with site variables (`--primary`, background, borders) to match overall theme.
- Prefer predictable text-based ratings if you want exact alignment and no extra layout math.
- Document any external dependencies (e.g., Mantine packages) and ensure `package.json` version constraints are acceptable.

If you'd like, I can also add a short automated checklist script or tests to validate the carousel layout across breakpoints.

---

**Recent Changes & Repo Updates (what I changed during this session)**
- Removed `@mantine/prism` from `package.json` (it was a peer-version mismatch and not referenced in the codebase).
- Pinned `@mantine/*` dependencies to `9.5.2` to avoid npm resolving to `9.6.x` which requires React 19.
- Updated React and React DOM to `^19.2.8` and updated `@testing-library/react` to a version compatible with React 19 so Mantine peers resolve correctly.
- Added `eslint` as a devDependency, ran `npx eslint --fix` across `src/`, and added a `lint` script in `package.json`.
- Added a basic smoke test (`src/App.test.jsx`) and test setup (`src/setupTests.js`) including an `IntersectionObserver` mock and `@testing-library/jest-dom` import.
- Added CI workflow `.github/workflows/ci.yml` that runs `npm ci`, `npm audit` (moderate level), caches npm, runs `eslint`, unit tests, `npm run build`, and Playwright UI tests.

**How to navigate dependency / install issues**
- If you hit peer conflicts (ERESOLVE) during `npm install`, inspect `package.json` for mixed major versions among related packages (Mantine and React are the most common here).
- Quick fixes:
	- Pin the package versions that must remain aligned (example: pin all `@mantine/*` to the same minor/patch).
	- Upgrade React and related libs together if you want to move to a newer major (I upgraded to React 19 here to satisfy newer Mantine peers).
	- As an emergency unblock in CI, use `npm ci --legacy-peer-deps` or set `NPM_CONFIG_LEGACY_PEER_DEPS=true` (not recommended long-term).
- After changing versions, run a clean install locally:
	```bash
	rm -rf node_modules package-lock.json
	npm install
	```

**CI / Pipeline notes**
- CI now enforces: install → `npm audit --audit-level=moderate` → lint → unit tests → build → Playwright UI tests. Failing any of those will block merges.
- To speed debugging in CI: check the `List Mantine packages` step output included in the workflow.
- If Playwright tests are not present yet, the Playwright step can be gated to only run when tests exist or the job can be made conditional.

**Testing notes for next agent**
- `src/setupTests.js` contains polyfills and imports required by tests:
	- `IntersectionObserver` mock (simple stub) — used because some components use intersection-based effects.
	- `@testing-library/jest-dom` import so matchers like `toBeInTheDocument()` are available.
- When adding new tests for Mantine components, either wrap tested components in `MantineProvider` or mock/limit Mantine usage to prevent theme/provider errors.

**Security & Dependabot**
- CI runs `npm audit` at moderate level. For an automated dependency update flow, add Dependabot (`.github/dependabot.yml`) so dependency PRs open automatically.
- If you want deeper scanning, consider adding CodeQL or Snyk in addition to `npm audit`.

**Node / engine warnings**
- Installation logs may show EBADENGINE warnings for packages that require newer Node (for example `email-js` requiring Node >=22). These are warnings, not blockers — but consider updating the package or upgrading the Node runtime in CI if you rely on it.

**If something breaks**
- Reproduce locally with a clean install, then narrow down by rolling back the package you recently changed or running `npm ls <package>` to see which dependency pulled an incompatible version.
- Ask: do you want to standardize on React 19 for the repo, or prefer to keep React 18 and pin Mantine to 9.5.2? I documented the current decision (React 19 + Mantine 9.5.2 pin) in this file.

---

If you'd like, I can now add a `.github/dependabot.yml` to enable automated dependency PRs (recommended). Also I can create a small Playwright smoke test so CI actually validates the main page render. Tell me which to add next.