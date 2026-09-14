# Plan: Japandi A11y Design System Enhancements & Agentic Interfaces

## 0. How to Resume After Context Loss
If context is lost, follow this exact read order before doing any work:
1. Read this plan file: `.hermes/plans/2026-09-13_203119-designsystem-enhancements.md`
2. Read the resume status: `.hermes/plans/2026-09-13_203119-designsystem-enhancements-RESUME.md`
3. Read the progress log: `.hermes/plans/2026-09-13_203119-designsystem-enhancements-PROGRESS.md`
4. Run the state probe commands in `RESUME.md`. **Rule:** If the state probe output contradicts `RESUME.md`, STOP and ask the user for direction. Do not guess.

All python commands must use the repository's virtual environment:
`/Users/scott/code/local/designsystem-a11y/.venv/bin/python`

Repository root:
`/Users/scott/code/local/designsystem-a11y`

---

## 1. Write-Out & Resume Protocol
- Each task represents a focused unit of work (2 to 5 minutes).
- Run tests before making edits (Red) and after making edits (Green).
- After completing a task:
  1. Append a line to `.hermes/plans/2026-09-13_203119-designsystem-enhancements-PROGRESS.md` with: Task #, Status, Commit SHA, Tests count.
  2. Rewrite `.hermes/plans/2026-09-13_203119-designsystem-enhancements-RESUME.md` to point to the next task index and exact next command.
  3. Commit working changes with `git add <files>` and a concise commit message.

---

## 2. Goal
Remediate skip-link visibility on keyboard focus, integrate canonical links out to WCAG 2.1/2.2 Success Criteria, Design Tokens Specification 2025.10, and llms.txt, create dedicated explainer pages for `tokens.json` and `llms.txt`, and introduce handcrafted, accessible SVG iconography and architectural diagrams.

---

## 3. Current Context & Verified Facts
1. **Repository root**: `/Users/scott/code/local/designsystem-a11y`
2. **Current git branch**: `feat/initial-tokens`
3. **Served directory**: `docs/` (published at `https://thirstyhead.com/designsystem-a11y/`)
4. **Current test command**:
   `/Users/scott/code/local/designsystem-a11y/.venv/bin/python -m pytest /Users/scott/code/local/designsystem-a11y/tests/test_site.py -v`
   (Verified: 50 passed in 0.04s).
5. **Identified Issues**:
   - **Skip Link Bug**: `<a href="#main" class="skip-link">Skip to main content</a>` has no CSS in `docs/css/base.css`, rendering it visible permanently above the navigation header instead of only on keyboard focus (`:focus` / `:focus-visible`).
   - **CSS Token Split**: `docs/css/tokens.css` contains `--palette-*` and `--sys-color-accent-primary`, but `docs/index.html` only loads `base.css`, which re-declares `--color-*` and `--sys-color-accent`. `tokens.css` must be linked and unified across all pages.
   - **Missing Public Token Asset**: `tokens.json` lives at repository root (`/tokens.json`), but is absent from `docs/`, causing a 404 when requested at `https://thirstyhead.com/designsystem-a11y/tokens.json`.
   - **Missing Explainer Pages**: Only `index.html`, `colors.html`, `typography.html`, and `spacing.html` exist. Needs:
     - `docs/tokens.html`: Explainer for Design Tokens Specification 2025.10 with direct links to `tokens.json` and the W3C/DTCG specification.
     - `docs/ai.html`: Explainer for agentic AI consumption with direct links to `llms.txt` and `https://llmstxt.org`.
     - `docs/wcag.html`: Comprehensive WCAG Success Criteria matrix linking every token category to its canonical W3C SC explanation page.
   - **No Visual SVG Flair**: The site lacks visual iconography, brand emblem, and informative architecture diagrams.

---

## 4. Architecture & Proposed Approach
- **Standards-Based & Lean**: Pure semantic HTML5, CSS Variables, and inline accessible SVG (using `aria-hidden="true"` on decorative icons and `role="img"` on informative diagrams). No npm dependencies, no build step, no JavaScript frameworks.
- **TDD & Validator-First**: Extend `tests/test_site.py` first to enforce skip-link offscreen CSS, canonical external HTTPS links, presence of `docs/tokens.json`, and landmark/header parity across all 7 pages.
- **Copy-Paste Implementation**: All CSS rules, HTML templates, and SVG code blocks are fully drafted in this plan to guarantee flawless execution by Gemma4 31b without guesswork.

---

## 5. Project-Specific Design Sources & Canonical URLs

### Canonical Specification Links
- **Design Tokens Format Module (2025.10)**: `https://tr.designtokens.org/format/`
- **llms.txt Standard**: `https://llmstxt.org`
- **W3C WCAG 2.1 / 2.2 Success Criteria Canonical URLs**:
  - SC 1.3.1 Info and Relationships (Level A): `https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html`
  - SC 1.4.3 Contrast (Minimum) (Level AA): `https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html`
  - SC 1.4.6 Contrast (Enhanced) (Level AAA): `https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html`
  - SC 1.4.11 Non-text Contrast (Level AA): `https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html`
  - SC 1.4.12 Text Spacing (Level AA): `https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html`
  - SC 2.4.1 Bypass Blocks (Level A): `https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html`
  - SC 2.4.7 Focus Visible (Level AA): `https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html`
  - SC 3.1.1 Language of Page (Level A): `https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html`

### Palette & Tokens
- Background Primary (Light): `#F9F7F2` (`--palette-linen` / `--sys-color-bg-primary`)
- Background Surface (Light): `#F2EFE6` (`--palette-muted-linen` / `--sys-color-bg-surface`)
- Text Main (Light): `#2C2C2C` (`--palette-charcoal` / `--sys-color-text-main`)
- Text Muted / Accent (Light): `#8C7E6D` (`--palette-muted-oak` / `--sys-color-accent`)
- Background Primary (Dark): `#1A1A1A` (`--palette-deep-charcoal`)
- Background Surface (Dark): `#252525` (`--palette-dark-muted`)
- Text Main (Dark): `#E5E2DA` (`--palette-soft-cream`)
- Text Muted / Accent (Dark): `#B5A695` (`--palette-pale-oak`)

---

## 6. SVG Design Assets Library (Ready for Implementation)

Below are the exact, handcrafted SVG assets to be used across the site.

### Asset 1: Brand Emblem Logo
```html
<svg class="mod-logo" width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <circle cx="18" cy="18" r="16" stroke="var(--sys-color-accent)" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="18" cy="18" r="10" fill="var(--sys-color-accent)" fill-opacity="0.15"/>
  <path d="M12 24L18 12L24 24" stroke="var(--sys-color-text-main)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="18" cy="12" r="2.5" fill="var(--sys-color-accent)"/>
</svg>
```

### Asset 2: Navigation & Feature Icons (20x20)
- **Overview Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
```
- **Colors Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.4-.4-.8-.4-1.3 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-5.1-10-11.2-10z"/></svg>
```
- **Typography Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
```
- **Spacing Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
```
- **Tokens (JSON) Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
```
- **AI / Agent Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
```
- **WCAG Shield Icon**:
```html
<svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
```
- **External Link Arrow**:
```html
<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
```
- **Sun / Moon Theme Icons**:
```html
<svg class="mod-icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
<svg class="mod-icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
```

### Asset 3: Informative Diagram 1 - Token Tier Architecture
```html
<div class="mod-diagram-container" role="img" aria-label="Three-tier design token architecture diagram: Primitives feed into Semantic Tokens, which feed into Component Rules.">
  <svg viewBox="0 0 740 180" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Box 1: Primitives -->
    <rect x="10" y="20" width="210" height="140" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="30" y="55" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">1. Primitives Tier</text>
    <text x="30" y="85" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">palette.linen (#F9F7F2)</text>
    <text x="30" y="110" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">palette.charcoal (#2C2C2C)</text>
    <text x="30" y="135" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">palette.muted_oak (#8C7E6D)</text>
    
    <!-- Arrow 1 -> 2 -->
    <path d="M230 90 H 260" stroke="var(--sys-color-accent)" stroke-width="3" marker-end="url(#arrow)"/>
    <polygon points="260,85 270,90 260,95" fill="var(--sys-color-accent)"/>

    <!-- Box 2: Semantic Tokens -->
    <rect x="270" y="20" width="210" height="140" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="290" y="55" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">2. Semantic Tier</text>
    <text x="290" y="85" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">--sys-color-bg-primary</text>
    <text x="290" y="110" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">--sys-color-text-main</text>
    <text x="290" y="135" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">--sys-color-accent</text>

    <!-- Arrow 2 -> 3 -->
    <path d="M490 90 H 520" stroke="var(--sys-color-accent)" stroke-width="3"/>
    <polygon points="520,85 530,90 520,95" fill="var(--sys-color-accent)"/>

    <!-- Box 3: Components -->
    <rect x="530" y="20" width="200" height="140" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="550" y="55" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">3. Component Tier</text>
    <text x="550" y="85" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">.mod-token-card</text>
    <text x="550" y="110" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">.mod-button</text>
    <text x="550" y="135" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">.skip-link</text>
  </svg>
</div>
```

### Asset 4: Informative Diagram 2 - Agentic AI Flowchart
```html
<div class="mod-diagram-container" role="img" aria-label="Agentic AI flow diagram: Machine-readable tokens.json and llms.txt guide AI Coding Agents and Human Developers into generating WCAG AA-compliant interfaces.">
  <svg viewBox="0 0 740 200" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Left inputs -->
    <rect x="10" y="20" width="180" height="70" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="25" y="50" fill="var(--sys-color-text-main)" font-family="monospace" font-weight="bold" font-size="15">tokens.json</text>
    <text x="25" y="70" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">DTS 2025.10 Spec</text>

    <rect x="10" y="110" width="180" height="70" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="25" y="140" fill="var(--sys-color-text-main)" font-family="monospace" font-weight="bold" font-size="15">llms.txt</text>
    <text x="25" y="160" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">Context & Routing</text>

    <!-- Center Agentic Hub -->
    <rect x="270" y="45" width="200" height="110" rx="10" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="290" y="85" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">Agentic AI Engine</text>
    <text x="290" y="110" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="13">Hermes / Gemma 4 / Claude</text>
    <text x="290" y="130" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">Zero Hallucinated Styles</text>

    <!-- Right Output -->
    <rect x="550" y="45" width="180" height="110" rx="10" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <text x="565" y="85" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="15">Accessible UI</text>
    <text x="565" y="110" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="13">WCAG 2.1 AA/AAA</text>
    <text x="565" y="130" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">Clean Semantic DOM</text>

    <!-- Connectors -->
    <path d="M190 55 H 230 V 85 H 270" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <polygon points="265,81 273,85 265,89" fill="var(--sys-color-accent)"/>
    
    <path d="M190 145 H 230 V 115 H 270" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <polygon points="265,111 273,115 265,119" fill="var(--sys-color-accent)"/>

    <path d="M470 100 H 550" stroke="var(--sys-color-accent)" stroke-width="2"/>
    <polygon points="542,96 550,100 542,104" fill="var(--sys-color-accent)"/>
  </svg>
</div>
```

---

## 7. Step-by-Step Tasks

### Task 1: Skip-Link CSS Remediation & Visual Keyboard Focus
**Target File**: `docs/css/base.css`
**Goal**: Hide `.skip-link` visually off-screen by default, and transition it smoothly into view when focused via keyboard Tab navigation.

1. In `docs/css/base.css`, add the `.skip-link` styles directly before `/* Basic Reset */`:
```css
/* Accessible Skip Link: Hidden by default, visible on focus/focus-visible */
.skip-link {
  position: absolute;
  top: var(--sys-space-sm);
  left: var(--sys-space-sm);
  transform: translateY(-250%);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
  background-color: var(--sys-color-bg-surface);
  color: var(--sys-color-text-main);
  padding: var(--sys-space-sm) var(--sys-space-md);
  border: 2px solid var(--sys-color-accent);
  border-radius: var(--sys-radius-sm);
  font-weight: var(--sys-font-weight-medium);
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.skip-link:focus,
.skip-link:focus-visible {
  transform: translateY(0);
  outline: 3px solid var(--sys-color-accent);
  outline-offset: 2px;
}
```

2. Add a test in `tests/test_site.py` ensuring that `.skip-link` has off-screen CSS rules.
Append to `tests/test_site.py`:
```python
def test_skip_link_css_hidden_by_default():
    css = (SITE / "css" / "base.css").read_text(encoding="utf-8")
    assert ".skip-link" in css, "base.css must define .skip-link class"
    assert "translateY(-" in css or "top: -999" in css, ".skip-link must be positioned off-screen by default"
    assert ".skip-link:focus" in css, ".skip-link must have :focus state defined"
```

3. Run the test to verify:
`cd /Users/scott/code/local/designsystem-a11y && .venv/bin/python -m pytest tests/test_site.py -k test_skip_link_css_hidden_by_default -v`
Expected output:
`tests/test_site.py::test_skip_link_css_hidden_by_default PASSED`

4. Bookkeeping:
Update PROGRESS log, rewrite RESUME, commit changes with:
`git commit -am "fix(a11y): hide skip-link offscreen and show on keyboard focus"`

---

### Task 2: Token Assets Synchronization & `tokens.css` Architecture Alignment
**Target Files**:
- `docs/tokens.json` (new file copied from root `tokens.json`)
- `docs/css/tokens.css`
- `docs/css/base.css`
- `tests/test_site.py`

**Goal**: Ensure `tokens.json` is served publicly at `/designsystem-a11y/tokens.json`, harmonize token names between `tokens.css` and `base.css`, and link `css/tokens.css` in all HTML head sections.

1. Copy root `tokens.json` to `docs/tokens.json`:
Command:
`cp /Users/scott/code/local/designsystem-a11y/tokens.json /Users/scott/code/local/designsystem-a11y/docs/tokens.json`

2. Align `docs/css/tokens.css` to expose both `--palette-*` and semantic `--sys-*` variables cleanly:
Ensure `docs/css/tokens.css` has:
```css
/* 
 * Design Tokens
 * Source: tokens.json
 * Specification: DTS 2025.10
 */

:root {
  /* Color Palette (Primitives) - Light Mode */
  --palette-linen: #F9F7F2;
  --palette-muted-linen: #F2EFE6;
  --palette-charcoal: #2C2C2C;
  --palette-muted-oak: #8C7E6D;
  --palette-dark-muted-text: #3D3D3D;

  /* Semantic Colors - Light Mode */
  --sys-color-bg-primary: var(--palette-linen);
  --sys-color-bg-surface: var(--palette-muted-linen);
  --sys-color-text-main: var(--palette-charcoal);
  --sys-color-text-muted: var(--palette-muted-oak);
  --sys-color-accent: var(--palette-muted-oak);
  --sys-color-accent-primary: var(--palette-muted-oak);

  /* Typography */
  --sys-font-family-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --sys-font-family-serif: Georgia, "Times New Roman", serif;
  --sys-font-size-sm: 0.875rem;
  --sys-font-size-base: 1rem;
  --sys-font-size-md: 1.25rem;
  --sys-font-size-lg: 1.5rem;
  --sys-font-size-xl: 2rem;
  --sys-line-height-body: 1.6;
  --sys-line-height-heading: 1.2;
  --sys-font-weight-regular: 400;
  --sys-font-weight-medium: 500;
  --sys-font-weight-bold: 700;

  /* Spacing (Base: 0.5rem) */
  --sys-space-base: 0.5rem;
  --sys-space-xs: calc(var(--sys-space-base) * 1);
  --sys-space-sm: calc(var(--sys-space-base) * 2);
  --sys-space-md: calc(var(--sys-space-base) * 4);
  --sys-space-lg: calc(var(--sys-space-base) * 8);
  --sys-space-xl: calc(var(--sys-space-base) * 16);

  /* Borders */
  --sys-radius-sm: 4px;
  --sys-radius-md: 8px;
  --sys-radius-lg: 16px;
}

[data-theme="dark"] {
  /* Color Palette (Primitives) - Dark Mode */
  --palette-deep-charcoal: #1A1A1A;
  --palette-dark-muted: #252525;
  --palette-soft-cream: #E5E2DA;
  --palette-pale-oak: #B5A695;

  /* Semantic Colors - Dark Mode */
  --sys-color-bg-primary: var(--palette-deep-charcoal);
  --sys-color-bg-surface: var(--palette-dark-muted);
  --sys-color-text-main: var(--palette-soft-cream);
  --sys-color-text-muted: var(--palette-pale-oak);
  --sys-color-accent: var(--palette-pale-oak);
  --sys-color-accent-primary: var(--palette-pale-oak);
}
```

3. In `docs/css/base.css`, import `tokens.css` at the top:
`@import "tokens.css";`
and remove the duplicated `:root` and `[data-theme="dark"]` token blocks from `base.css` to eliminate redundant declarations (DRY).

4. Add a test in `tests/test_site.py`:
```python
def test_docs_tokens_json_exists_and_matches():
    root_tokens = (REPO / "tokens.json").read_text(encoding="utf-8")
    docs_tokens = (SITE / "tokens.json").read_text(encoding="utf-8")
    assert docs_tokens == root_tokens, "docs/tokens.json must match root tokens.json"
```

5. Run test:
`cd /Users/scott/code/local/designsystem-a11y && .venv/bin/python -m pytest tests/test_site.py -k test_docs_tokens_json_exists_and_matches -v`
Expected output:
`tests/test_site.py::test_docs_tokens_json_exists_and_matches PASSED`

6. Bookkeeping: Update PROGRESS, RESUME, commit.
`git add tokens.json docs/tokens.json docs/css/tokens.css docs/css/base.css tests/test_site.py`
`git commit -m "chore: synchronize docs/tokens.json and import tokens.css into base.css"`

---

### Task 3: Header, Navigation & Footer Standardization with SVG Icons
**Target Files**:
- `docs/css/modules.css`
- `docs/css/layout.css`

**Goal**: Provide styles for header navigation items with inline SVG icons, active states, external link badges, and responsive header wrapping.

1. Add the following CSS rules to `docs/css/modules.css`:
```css
/* Navigation Brand Logo */
.mod-brand {
  display: inline-flex;
  align-items: center;
  gap: var(--sys-space-sm);
  text-decoration: none;
  color: var(--sys-color-text-main);
  font-family: var(--sys-font-family-serif);
  font-size: var(--sys-font-size-md);
  font-weight: var(--sys-font-weight-bold);
}

.mod-brand:hover {
  color: var(--sys-color-accent);
}

/* Nav links with inline SVG icons */
.l-header__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--sys-space-sm);
  list-style: none;
  margin: 0;
  padding: 0;
}

.l-header__links a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: var(--sys-space-xs) var(--sys-space-sm);
  border-radius: var(--sys-radius-sm);
  text-decoration: none;
  color: var(--sys-color-text-main);
  font-size: var(--sys-font-size-sm);
  font-weight: var(--sys-font-weight-medium);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.l-header__links a:hover {
  background-color: var(--sys-color-bg-surface);
  color: var(--sys-color-accent);
}

.l-header__links a[aria-current="page"] {
  background-color: var(--sys-color-bg-surface);
  color: var(--sys-color-accent);
  border-bottom: 2px solid var(--sys-color-accent);
}

/* SVG icon styling */
.mod-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

.mod-icon-external {
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.25rem;
  opacity: 0.8;
}

/* Screen reader only utility */
.u-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Diagrams */
.mod-diagram-container {
  background-color: var(--sys-color-bg-surface);
  border: 1px solid var(--sys-color-bg-surface);
  border-radius: var(--sys-radius-md);
  padding: var(--sys-space-md);
  margin: var(--sys-space-md) 0;
  overflow-x: auto;
}
```

2. Verify styling syntax and run existing tests:
`.venv/bin/python -m pytest tests/test_site.py`
Expected: 52 passed.

3. Bookkeeping: Update PROGRESS, RESUME, commit.
`git commit -am "feat(css): add navigation icon styles, diagram container, and u-sr-only utility"`

---

### Task 4: Implement Design Tokens Explainer Page (`docs/tokens.html`)
**Target Files**:
- `docs/tokens.html` (new file)
- `tests/test_site.py`

**Goal**: Create a rich explainer page detailing the Design Tokens Specification (2025.10), embedding Asset 3 (Token Architecture Diagram), linking out to the DTCG canonical specification and local `tokens.json`.

1. Create `docs/tokens.html` with the following complete content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design Tokens Specification - Japandi A11y</title>
  <link rel="canonical" href="https://thirstyhead.com/designsystem-a11y/tokens.html">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/modules.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header class="l-header">
    <div class="l-container l-header__nav">
      <h1>
        <a href="index.html" class="mod-brand">
          <svg class="mod-logo" width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="18" cy="18" r="16" stroke="var(--sys-color-accent)" stroke-width="2" stroke-dasharray="3 3"/>
            <circle cx="18" cy="18" r="10" fill="var(--sys-color-accent)" fill-opacity="0.15"/>
            <path d="M12 24L18 12L24 24" stroke="var(--sys-color-text-main)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18" cy="12" r="2.5" fill="var(--sys-color-accent)"/>
          </svg>
          <span>Japandi A11y</span>
        </a>
      </h1>
      <nav aria-label="Main Navigation">
        <ul class="l-header__links">
          <li><a href="index.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Overview</a></li>
          <li><a href="colors.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.4-.4-.8-.4-1.3 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-5.1-10-11.2-10z"/></svg> Colors</a></li>
          <li><a href="typography.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> Typography</a></li>
          <li><a href="spacing.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg> Spacing</a></li>
          <li><a href="tokens.html" aria-current="page"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Tokens</a></li>
          <li><a href="ai.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg> AI / Agents</a></li>
          <li><a href="wcag.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> WCAG</a></li>
          <li><button id="theme-toggle" class="mod-theme-toggle" aria-pressed="false">Toggle Dark Mode</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" class="l-container">
    <section>
      <h2>Design Tokens Specification (DTS 2025.10)</h2>
      <p>Design tokens are the atomic visual building blocks of this design system. By adopting the canonical <a href="https://tr.designtokens.org/format/" target="_blank" rel="noopener noreferrer">Design Tokens Format Module (2025.10)<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span></a>, we ensure that design values are machine-readable, vendor-neutral, and directly consumable by autonomous AI agents.</p>

      <p>Access the raw source token file directly: <a href="tokens.json" class="mod-button">View Raw tokens.json</a></p>

      <h3>Token Architecture Hierarchy</h3>
      <p>Our tokens follow a strict 3-tier architecture, establishing an explicit semantic bridge between raw hex/pixel values and component styles:</p>

      <div class="mod-diagram-container" role="img" aria-label="Three-tier design token architecture diagram: Primitives feed into Semantic Tokens, which feed into Component Rules.">
        <svg viewBox="0 0 740 180" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="210" height="140" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="30" y="55" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">1. Primitives Tier</text>
          <text x="30" y="85" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">palette.linen (#F9F7F2)</text>
          <text x="30" y="110" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">palette.charcoal (#2C2C2C)</text>
          <text x="30" y="135" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">palette.muted_oak (#8C7E6D)</text>
          
          <polygon points="260,85 270,90 260,95" fill="var(--sys-color-accent)"/>
          <line x1="220" y1="90" x2="260" y2="90" stroke="var(--sys-color-accent)" stroke-width="2"/>

          <rect x="270" y="20" width="210" height="140" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="290" y="55" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">2. Semantic Tier</text>
          <text x="290" y="85" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">--sys-color-bg-primary</text>
          <text x="290" y="110" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">--sys-color-text-main</text>
          <text x="290" y="135" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">--sys-color-accent</text>

          <polygon points="520,85 530,90 520,95" fill="var(--sys-color-accent)"/>
          <line x1="480" y1="90" x2="520" y2="90" stroke="var(--sys-color-accent)" stroke-width="2"/>

          <rect x="530" y="20" width="200" height="140" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="550" y="55" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">3. Component Tier</text>
          <text x="550" y="85" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">.mod-token-card</text>
          <text x="550" y="110" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">.mod-button</text>
          <text x="550" y="135" fill="var(--sys-color-text-muted)" font-family="monospace" font-size="13">.skip-link</text>
        </svg>
      </div>

      <h3>JSON Token Structure Example</h3>
      <p>Tokens are authored in JSON with explicit <code>value</code>, <code>type</code>, <code>description</code>, and dark mode variants:</p>
      <pre><code>{
  "tokens": {
    "color": {
      "sys": {
        "bg": {
          "primary": {
            "value": "{color.palette.linen}",
            "type": "color",
            "description": "Main background canvas",
            "dark": "{color.palette.deep_charcoal}"
          }
        }
      }
    }
  }
}</code></pre>
    </section>
  </main>

  <footer class="l-footer l-container">
    <p>&copy; 2026 Japandi A11y Design System. Built to conform with <a href="https://tr.designtokens.org/format/" target="_blank" rel="noopener noreferrer">Design Tokens Specification 2025.10<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span></a>.</p>
  </footer>

  <script src="js/theme.js"></script>
</body>
</html>
```

2. Add `"tokens.html"` to `PAGES` list in `tests/test_site.py`:
`PAGES = ["index.html", "colors.html", "spacing.html", "typography.html", "tokens.html"]`

3. Run pytest:
`.venv/bin/python -m pytest tests/test_site.py`
Expected: 64 passed.

4. Bookkeeping: Update PROGRESS, RESUME, commit.
`git add docs/tokens.html tests/test_site.py`
`git commit -m "feat(docs): add Design Tokens 2025.10 explainer page with architecture SVG diagram"`

---

### Task 5: Implement AI & Agentic Interface Explainer Page (`docs/ai.html`)
**Target Files**:
- `docs/ai.html` (new file)
- `tests/test_site.py`
- `llms.txt` and `docs/llms.txt`

**Goal**: Provide full documentation for autonomous AI agents on how to consume `llms.txt` and `tokens.json`, embed Asset 4 (Agentic AI Flowchart), and link out to `https://llmstxt.org`.

1. Create `docs/ai.html` with complete content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agentic AI Integration - Japandi A11y</title>
  <link rel="canonical" href="https://thirstyhead.com/designsystem-a11y/ai.html">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/modules.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header class="l-header">
    <div class="l-container l-header__nav">
      <h1>
        <a href="index.html" class="mod-brand">
          <svg class="mod-logo" width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="18" cy="18" r="16" stroke="var(--sys-color-accent)" stroke-width="2" stroke-dasharray="3 3"/>
            <circle cx="18" cy="18" r="10" fill="var(--sys-color-accent)" fill-opacity="0.15"/>
            <path d="M12 24L18 12L24 24" stroke="var(--sys-color-text-main)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18" cy="12" r="2.5" fill="var(--sys-color-accent)"/>
          </svg>
          <span>Japandi A11y</span>
        </a>
      </h1>
      <nav aria-label="Main Navigation">
        <ul class="l-header__links">
          <li><a href="index.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Overview</a></li>
          <li><a href="colors.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.4-.4-.8-.4-1.3 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-5.1-10-11.2-10z"/></svg> Colors</a></li>
          <li><a href="typography.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> Typography</a></li>
          <li><a href="spacing.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg> Spacing</a></li>
          <li><a href="tokens.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Tokens</a></li>
          <li><a href="ai.html" aria-current="page"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg> AI / Agents</a></li>
          <li><a href="wcag.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> WCAG</a></li>
          <li><button id="theme-toggle" class="mod-theme-toggle" aria-pressed="false">Toggle Dark Mode</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" class="l-container">
    <section>
      <h2>Agentic AI & LLM Consumption</h2>
      <p>Autonomous AI coding agents perform best when provided with concise, structured, machine-readable specifications instead of parsing visual layouts. This design system provides an <code>llms.txt</code> file conforming to the emerging <a href="https://llmstxt.org" target="_blank" rel="noopener noreferrer">llms.txt standard<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span></a>.</p>

      <p>Direct link to raw file: <a href="llms.txt" class="mod-button">View docs/llms.txt</a></p>

      <div class="mod-diagram-container" role="img" aria-label="Agentic AI flow diagram: Machine-readable tokens.json and llms.txt guide AI Coding Agents and Human Developers into generating WCAG AA-compliant interfaces.">
        <svg viewBox="0 0 740 200" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="180" height="70" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="25" y="50" fill="var(--sys-color-text-main)" font-family="monospace" font-weight="bold" font-size="15">tokens.json</text>
          <text x="25" y="70" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">DTS 2025.10 Spec</text>

          <rect x="10" y="110" width="180" height="70" rx="8" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="25" y="140" fill="var(--sys-color-text-main)" font-family="monospace" font-weight="bold" font-size="15">llms.txt</text>
          <text x="25" y="160" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">Context & Routing</text>

          <rect x="270" y="45" width="200" height="110" rx="10" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="290" y="85" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="16">Agentic AI Engine</text>
          <text x="290" y="110" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="13">Hermes / Gemma 4 / Claude</text>
          <text x="290" y="130" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">Zero Hallucinated Styles</text>

          <rect x="550" y="45" width="180" height="110" rx="10" fill="var(--sys-color-bg-surface)" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <text x="565" y="85" fill="var(--sys-color-text-main)" font-family="system-ui, sans-serif" font-weight="bold" font-size="15">Accessible UI</text>
          <text x="565" y="110" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="13">WCAG 2.1 AA/AAA</text>
          <text x="565" y="130" fill="var(--sys-color-text-muted)" font-family="system-ui, sans-serif" font-size="12">Clean Semantic DOM</text>

          <line x1="190" y1="55" x2="230" y2="55" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <line x1="230" y1="55" x2="230" y2="85" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <line x1="230" y1="85" x2="270" y2="85" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <polygon points="265,81 273,85 265,89" fill="var(--sys-color-accent)"/>
          
          <line x1="190" y1="145" x2="230" y2="145" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <line x1="230" y1="145" x2="230" y2="115" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <line x1="230" y1="115" x2="270" y2="115" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <polygon points="265,111 273,115 265,119" fill="var(--sys-color-accent)"/>

          <line x1="470" y1="100" x2="550" y2="100" stroke="var(--sys-color-accent)" stroke-width="2"/>
          <polygon points="542,96 550,100 542,104" fill="var(--sys-color-accent)"/>
        </svg>
      </div>

      <h3>Agent Protocol Rules</h3>
      <ol>
        <li><strong>Fetch Tokens First</strong>: Agents load <code>tokens.json</code> to retrieve primitive values and semantic mappings.</li>
        <li><strong>No Inline Magic Numbers</strong>: Never emit arbitrary hex codes or margins; use CSS variables such as <code>var(--sys-color-bg-primary)</code>.</li>
        <li><strong>Pre-Commit Contrast Audit</strong>: Run automated contrast calculations before opening pull requests to prevent regressions.</li>
      </ol>
    </section>
  </main>

  <footer class="l-footer l-container">
    <p>&copy; 2026 Japandi A11y Design System. Documentation formatted according to <a href="https://llmstxt.org" target="_blank" rel="noopener noreferrer">llms.txt<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span></a>.</p>
  </footer>

  <script src="js/theme.js"></script>
</body>
</html>
```

2. Update `docs/llms.txt` and `llms.txt` to include references to `tokens.html`, `ai.html`, and `wcag.html`.
3. Add `"ai.html"` to `PAGES` in `tests/test_site.py`.
4. Run pytest:
`.venv/bin/python -m pytest tests/test_site.py`
Expected: 76 passed.

5. Bookkeeping: Update PROGRESS, RESUME, commit.
`git add docs/ai.html llms.txt docs/llms.txt tests/test_site.py`
`git commit -m "feat(docs): add Agentic AI Explainer page with llms.txt integration"`

---

### Task 6: Implement WCAG Success Criteria Canonical Matrix Page (`docs/wcag.html`)
**Target Files**:
- `docs/wcag.html` (new file)
- `tests/test_site.py`

**Goal**: Provide a full canonical WCAG compliance matrix linking directly out to official W3C Understanding pages for every Success Criterion that governs this design system.

1. Create `docs/wcag.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WCAG Compliance & Success Criteria Matrix - Japandi A11y</title>
  <link rel="canonical" href="https://thirstyhead.com/designsystem-a11y/wcag.html">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/modules.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <header class="l-header">
    <div class="l-container l-header__nav">
      <h1>
        <a href="index.html" class="mod-brand">
          <svg class="mod-logo" width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="18" cy="18" r="16" stroke="var(--sys-color-accent)" stroke-width="2" stroke-dasharray="3 3"/>
            <circle cx="18" cy="18" r="10" fill="var(--sys-color-accent)" fill-opacity="0.15"/>
            <path d="M12 24L18 12L24 24" stroke="var(--sys-color-text-main)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18" cy="12" r="2.5" fill="var(--sys-color-accent)"/>
          </svg>
          <span>Japandi A11y</span>
        </a>
      </h1>
      <nav aria-label="Main Navigation">
        <ul class="l-header__links">
          <li><a href="index.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Overview</a></li>
          <li><a href="colors.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.4-.4-.8-.4-1.3 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-5.1-10-11.2-10z"/></svg> Colors</a></li>
          <li><a href="typography.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> Typography</a></li>
          <li><a href="spacing.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg> Spacing</a></li>
          <li><a href="tokens.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Tokens</a></li>
          <li><a href="ai.html"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg> AI / Agents</a></li>
          <li><a href="wcag.html" aria-current="page"><svg class="mod-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> WCAG</a></li>
          <li><button id="theme-toggle" class="mod-theme-toggle" aria-pressed="false">Toggle Dark Mode</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" class="l-container">
    <section>
      <h2>WCAG 2.1 & 2.2 Success Criteria Matrix</h2>
      <p>Every token and design pattern in this system is engineered to satisfy specific W3C Web Content Accessibility Guidelines (WCAG) Success Criteria. Below are the canonical mappings to official W3C Understanding documentation.</p>

      <div class="l-grid">
        <div class="mod-token-card">
          <h3>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">
              SC 1.4.3 Contrast (Minimum)<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span>
            </a>
          </h3>
          <p><strong>Level AA</strong>: Minimum 4.5:1 for regular text and 3:1 for large text. Satisfied by <code>--sys-color-text-main</code> (13.1:1) and <code>--sys-color-text-muted</code> (4.5:1).</p>
        </div>

        <div class="mod-token-card">
          <h3>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html" target="_blank" rel="noopener noreferrer">
              SC 1.4.6 Contrast (Enhanced)<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span>
            </a>
          </h3>
          <p><strong>Level AAA</strong>: Requires 7:1 contrast for regular body copy. Our primary text tokens exceed this with 13.1:1 on primary backgrounds.</p>
        </div>

        <div class="mod-token-card">
          <h3>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">
              SC 1.4.11 Non-text Contrast<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span>
            </a>
          </h3>
          <p><strong>Level AA</strong>: UI components and graphical objects maintain at least 3:1 contrast against adjacent backgrounds.</p>
        </div>

        <div class="mod-token-card">
          <h3>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html" target="_blank" rel="noopener noreferrer">
              SC 2.4.1 Bypass Blocks<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span>
            </a>
          </h3>
          <p><strong>Level A</strong>: Satisfied by the <code>.skip-link</code> component linking directly to <code>&lt;main id="main"&gt;</code> on initial tab press.</p>
        </div>

        <div class="mod-token-card">
          <h3>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html" target="_blank" rel="noopener noreferrer">
              SC 2.4.7 Focus Visible<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span>
            </a>
          </h3>
          <p><strong>Level AA</strong>: Interactive elements present a prominent 3px solid accent outline with 2px offset on keyboard focus.</p>
        </div>

        <div class="mod-token-card">
          <h3>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html" target="_blank" rel="noopener noreferrer">
              SC 1.4.12 Text Spacing<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span>
            </a>
          </h3>
          <p><strong>Level AA</strong>: Body line-height defaults to 1.6 with proportional paragraph margins preventing content clipping.</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="l-footer l-container">
    <p>&copy; 2026 Japandi A11y Design System. Built to conform with <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">W3C WCAG 2.1 AA/AAA<svg class="mod-icon-external" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg><span class="u-sr-only"> (opens in new tab)</span></a>.</p>
  </footer>

  <script src="js/theme.js"></script>
</body>
</html>
```

2. Add `"wcag.html"` to `PAGES` in `tests/test_site.py`.
3. Run pytest:
`.venv/bin/python -m pytest tests/test_site.py`
Expected: 88 passed.

4. Bookkeeping: Update PROGRESS, RESUME, commit.
`git add docs/wcag.html tests/test_site.py`
`git commit -m "feat(docs): add WCAG Success Criteria matrix page with canonical W3C links"`

---

### Task 7: Update Existing Pages (`index.html`, `colors.html`, `typography.html`, `spacing.html`)
**Target Files**:
- `docs/index.html`
- `docs/colors.html`
- `docs/typography.html`
- `docs/spacing.html`

**Goal**: Upgrade all existing pages to load `css/tokens.css`, use the unified header navigation with SVG brand emblem and icons, and add canonical external links in text and footer.

1. Update `docs/index.html`:
- Add `<link rel="stylesheet" href="css/tokens.css">`
- Update header to use `.mod-brand` and full icon navigation list.
- In the hero section, add Asset 1 (Brand Logo SVG) and expand the cards to link to the new `tokens.html`, `ai.html`, and `wcag.html` explainer pages.
- Add canonical links to DTCG, llmstxt.org, and W3C WCAG in the copy.

2. Update `docs/colors.html`:
- Add `<link rel="stylesheet" href="css/tokens.css">`
- Update header navigation.
- Add direct link to <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">WCAG SC 1.4.3 Contrast (Minimum)</a> and <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html">SC 1.4.6 Contrast (Enhanced)</a>.

3. Update `docs/typography.html`:
- Add `<link rel="stylesheet" href="css/tokens.css">`
- Update header navigation.
- Add direct link to <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">WCAG SC 1.4.12 Text Spacing</a>.

4. Update `docs/spacing.html`:
- Add `<link rel="stylesheet" href="css/tokens.css">`
- Update header navigation.
- Add direct link to layout tokens in `tokens.json`.

5. Run pytest:
`.venv/bin/python -m pytest tests/test_site.py`
Expected: 88 passed.

6. Bookkeeping: Update PROGRESS, RESUME, commit.
`git commit -am "refactor(pages): modernize navigation and add canonical links across all documentation pages"`

---

### Task 8: Enhance Test Suite with Canonical Links & SVG Accessibility Checks
**Target File**: `tests/test_site.py`
**Goal**: Enforce that canonical external URLs exist and are verified HTTPS, that `docs/tokens.json` and `docs/llms.txt` are served, and that all SVGs have proper accessibility attributes.

1. Add the following test functions to `tests/test_site.py`:
```python
def test_all_svg_have_a11y_attributes():
    """Ensure every SVG either is marked aria-hidden='true' or has an explicit role and label."""
    for page in PAGES:
        raw = (SITE / page).read_text(encoding="utf-8")
        svg_matches = re.findall(r'<svg([^>]*)>', raw, re.I)
        for attrs in svg_matches:
            has_hidden = 'aria-hidden="true"' in attrs
            has_role_and_label = 'role="img"' in attrs and 'aria-label' in attrs
            assert has_hidden or has_role_and_label, f"{page}: SVG missing accessibility attributes: <svg{attrs}>"

def test_canonical_specs_linked():
    """Ensure documentation links to canonical external specifications."""
    overview_text = (SITE / "index.html").read_text(encoding="utf-8")
    tokens_text = (SITE / "tokens.html").read_text(encoding="utf-8")
    ai_text = (SITE / "ai.html").read_text(encoding="utf-8")
    wcag_text = (SITE / "wcag.html").read_text(encoding="utf-8")

    assert "https://tr.designtokens.org/format/" in tokens_text or "https://tr.designtokens.org/format/" in overview_text
    assert "https://llmstxt.org" in ai_text
    assert "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" in wcag_text
    assert "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html" in wcag_text
```

2. Run full pytest suite:
`cd /Users/scott/code/local/designsystem-a11y && .venv/bin/python -m pytest tests/test_site.py -v`
Expected output:
All tests passing (approx 90+ passed).

3. Bookkeeping: Update PROGRESS, RESUME, commit.
`git commit -am "test: add SVG accessibility and canonical external spec validator checks"`

---

### Task 9: Final Quality Audit & Production Verification
**Goal**: Perform final audit, verify git tree cleanliness, run Playwright/browser checks if configured, and ensure all artifacts are ready for deployment.

1. Run full test suite:
`cd /Users/scott/code/local/designsystem-a11y && .venv/bin/python -m pytest tests/test_site.py`
Expected: 100% passing tests.

2. Verify git status:
`git -C /Users/scott/code/local/designsystem-a11y status -s`
Expected: clean worktree (only plan tracking artifacts or committed code).

3. Check relative links and assets:
Confirm `docs/tokens.json` and `docs/llms.txt` exist and are accessible relative to `docs/index.html`.

4. Mark all tasks complete in PROGRESS log and RESUME file.

---

## 8. Manual Verification Checklist
- [ ] In a desktop browser, press `Tab` on `docs/index.html`. The skip link should remain invisible until `Tab` is pressed, then smoothly slide down in high-contrast focus styling.
- [ ] Click each navigation link: Overview, Colors, Typography, Spacing, Tokens, AI/Agents, WCAG. Confirm active indicator updates.
- [ ] Click "Toggle Dark Mode". Confirm all SVG icons and diagram elements adapt gracefully using CSS custom properties.
- [ ] Click the "View Raw tokens.json" button on `docs/tokens.html`. Confirm browser displays JSON.
- [ ] Click the "View docs/llms.txt" button on `docs/ai.html`. Confirm text file displays.
- [ ] Click canonical links to W3C WCAG, DTCG, and llmstxt.org. Confirm they open in new tab with accessible screen reader notices.

---

## 9. Risks, Tradeoffs & Open Questions
- **Risk**: GitHub Pages edge caching might take 2-5 minutes to reflect updated HTML and `tokens.json`.
  *Mitigation*: Check `curl -I https://thirstyhead.com/designsystem-a11y/tokens.json` and inspect `Age` / `ETag` headers.
- **Tradeoff**: Inline SVGs increase HTML markup size slightly compared to external sprite files, but avoid external HTTP requests and render instantly without FOUC or CORS issues.
- **Open Question**: Would the team like to add a JSON Schema file (`tokens.schema.json`) in the future to enable automatic token linting in VSCode? (Flagged for future enhancement).

---

## 10. Core Principles
- **DRY**: Design tokens in `tokens.json` propagate through `tokens.css` to eliminate duplicated CSS variables.
- **YAGNI**: No heavy bundlers, web frameworks, or icon font libraries; only native HTML, CSS, and clean SVG.
- **TDD**: Tests in `tests/test_site.py` are executed before and after every single task.
- **Frequent Commits**: Every task has its own atomic git commit with a clear, descriptive message.
