/**
 * DaTypoDisplay.tsx
 * ─────────────────────────────────────────────────────────────
 * Heading-scale variants: Display, Headline, Title.
 * These are structural — they define page and section hierarchy.
 *
 * Weight rules
 * ────────────
 * Display  → extrabold   large type earns heavy weight
 * Headline → bold        section anchors, still prominent
 * Title    → semibold    component-level, not competing with headlines
 *
 * Leading rules
 * ─────────────
 * tight (1.2)  → display sizes — compressed for impact
 * snug  (1.4)  → headlines — readable multi-line headings
 * normal (1.5) → titles — component context, matches body rhythm
 * ─────────────────────────────────────────────────────────────
 */

import type { TypoVariantDef } from "./DaTypoVariants";

export const DaTypoDisplayVariants = {

  // ── Display ──────────────────────────────────────────────────
  // Hero / page-title scale. 1–4 words, above the fold.
  // Always extrabold — these are the largest text on any page.

  displayLg: {
    tag:     "h1",
    size:    "6xl",       // 36→64px fluid
    weight:  "extrabold",
    leading: "tight",     // 1.2 — compressed for large type
    color:   "primary",
    font:    "sans",
  },

  displayMd: {
    tag:     "h1",
    size:    "5xl",       // 36→56px fluid
    weight:  "extrabold",
    leading: "tight",
    color:   "primary",
    font:    "sans",
  },

  displaySm: {
    tag:     "h2",
    size:    "3xl",       // 28→48px fluid
    weight:  "bold",      // steps down one from extrabold
    leading: "tight",
    color:   "primary",
    font:    "sans",
  },


  // ── Headline ─────────────────────────────────────────────────
  // Section-level anchors. Cards, modals, page sub-sections.
  // Bold at large, semibold at small — weight eases as size shrinks.

  headlineLg: {
    tag:     "h2",
    size:    "3xl",       // 22→32px fluid
    weight:  "bold",
    leading: "snug",      // 1.4 — comfortable multi-line
    color:   "primary",
    font:    "sans",
  },

  headlineMd: {
    tag:     "h3",
    size:    "2xl",       // 20→24px fluid
    weight:  "semibold",  // steps down from bold at this size
    leading: "snug",
    color:   "primary",
    font:    "sans",
  },

  headlineSm: {
    tag:     "h4",
    size:    "xl",        // 18→22px fluid
    weight:  "semibold",
    leading: "snug",
    color:   "primary",
    font:    "sans",
  },


  // ── Title ────────────────────────────────────────────────────
  // Component-level labels. Drawer headers, list group titles,
  // tab labels, sidebar section headers.
  // Always semibold — prominent but not competing with headlines.
  // Leading is normal across all — titles live in tight UI spaces.

  titleLg: {
    tag:     "h5",
    size:    "lg",        // 16→20px fluid
    weight:  "semibold",
    leading: "normal",    // 1.5 — consistent with component rhythm
    color:   "primary",
    font:    "sans",
  },

  titleMd: {
    tag:     "h6",
    size:    "base",      // 16px fixed
    weight:  "semibold",
    leading: "normal",
    color:   "primary",
    font:    "sans",
  },

  titleSm: {
    tag:     "h6",
    size:    "sm",        // 14px fixed
    weight:  "semibold",
    leading: "normal",
    color:   "secondary", // de-emphasised — used for section meta labels
    font:    "sans",
  },
  // ── Caption ──────────────────────────────────────────────────
  // Metadata, helper text, timestamps, supporting micro-copy.
  // Never competes with body — always tertiary color, normal weight.

  captionMd: {
    tag:     "p",
    size:    "sm",        // 12px fixed
    weight:  "normal",
    leading: "normal",    // 1.5 — readable at small size
    color:   "tertiary",  // de-emphasised — metadata / supporting copy
    font:    "sans",
  },

  captionSm: {
    tag:     "p",
    size:    "xs",        // 12px fixed
    weight:  "normal",
    leading: "tight",     // 1.2 — compact inline contexts
    color:   "tertiary",
    font:    "sans",
  },

    // ── Overline ─────────────────────────────────────────────────
  // Section labels, UI identifiers, category markers.
  // Always subtle but structured — uppercase with tracking.

    overlineSm: {
    tag:     "p",
    size:    "xs",        // 12px fixed
    weight:  "normal",
    leading: "tight",     // 1.2 — compact inline contexts
    color:   "tertiary",
    font:    "sans",
  },


} as const satisfies Record<string, TypoVariantDef>;
