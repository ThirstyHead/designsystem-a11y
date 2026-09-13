# Japandi A11y Design System: Governance & Implementation Guide

This document serves as the conceptual blueprint for the Japandi A11y Design System. While `tokens.json` provides the raw data, this guide provides the logic, philosophy, and patterns required to extend the system consistently across multiple projects.

## 1. Design Philosophy: Japandi
The "Japandi" aesthetic is a fusion of Japanese minimalism and Scandinavian functionality. For the purposes of this design system, this translates to:

- **Minimalism**: Remove all non-essential decorative elements. Every pixel must serve a functional or accessibility purpose.
- **Warmth**: Avoid "clinical" whites and blacks. Use warm neutrals (Linen, Oak, Charcoal) to create a welcoming, human-centric environment.
- **Functionality**: Prioritize clarity, readability, and ease of navigation over visual flair.
- **Whitespace**: Use generous spacing (`--sys-space-lg` and `--sys-space-xl`) to reduce cognitive load and create a sense of calm.

## 2. Accessibility Governance
Accessibility is not a feature; it is the foundation. All implementations must adhere to the following:

### WCAG 2.1 AA Compliance
- **Contrast**: All text/background pairs must maintain a minimum contrast ratio of 4.5:1.
- **Focus States**: Never remove `outline`. Use `--sys-color-accent` for high-visibility focus rings.
- **Semantics**: Use native HTML5 landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`) and a strict heading hierarchy (one `<h1>` per page, no skipped levels).
- **Language**: Always define `<html lang="en">`.

### The Contrast Matrix
When introducing new color tokens, they must be validated against the primary background tokens:
- `[New Token]` $\rightarrow$ `--sys-color-bg-primary` $\ge$ 4.5:1
- `[New Token]` $\rightarrow$ `--sys-color-bg-surface` $\ge$ 4.5:1

## 3. Token Usage Guidelines
Tokens are categorized by their role. Always use the **Semantic Token** rather than the **Primitive Value**.

### Color Mapping
| Semantic Token | Usage | Intent |
| :--- | :--- | :--- |
| `--sys-color-bg-primary` | Page background | The base canvas of the application. |
| `--sys-color-bg-surface` | Cards, Modals, Sidebars | To create depth and separate content areas. |
| `--sys-color-text-main` | Body text, Headings | Maximum readability and contrast. |
| `--sys-color-text-muted` | Captions, Metadata | Secondary information; still AA compliant. |
| `--sys-color-accent` | Links, Buttons, Focus | Directs attention to interactive elements. |

### Typography Mapping
- **Headings**: Use `--sys-font-family-serif` to provide a sophisticated, editorial feel.
- **Body**: Use `--sys-font-family-sans` for maximum legibility across devices.
- **Scale**: Use the defined scale (`sm` $\rightarrow$ `xl`) to maintain vertical rhythm.

## 4. Component Recipes
To ensure consistency, use these standardized token combinations:

### The "Japandi Card"
- **Background**: `--sys-color-bg-surface`
- **Border Radius**: `--sys-radius-md`
- **Padding**: `--sys-space-md`
- **Text**: `--sys-color-text-main`
- **Border**: 1px solid `--sys-color-text-muted` (optional, for high-contrast mode)

### The "Primary Action" (Button/Link)
- **Text Color**: `--sys-color-bg-primary` (or high contrast alternative)
- **Background Color**: `--sys-color-accent`
- **Focus State**: 3px solid `--sys-color-accent` with `outline-offset: 2px`
- **Padding**: `--sys-space-sm` (vertical) / `--sys-space-md` (horizontal)

## 5. Extension Guide
When adding new tokens to `tokens.json`:
1. **Define the Primitive**: Add the raw hex/value to the palette.
2. **Create the Semantic Alias**: Map the primitive to a `--sys-` variable.
3. **Validate**: Run the accessibility audit script to ensure the new token meets contrast requirements.
4. **Document**: Update this guide if the new token introduces a new usage pattern.
