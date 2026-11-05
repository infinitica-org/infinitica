# Pull Request: UI Refinements for Hero, Landing & Contact Pages

## Title
`feat(ui): refine hero section, remove ribbon & loader, fix button contrast, clean contact page`

---

## Summary
Streamlines the landing and contact page experience by removing heavy animations, fixing text contrast issues, and centering the hero layout.

---

## Key Changes

### 1. Hero Section Refinements
- Centered the headline (`BUILDING`, subtitle, and `INFINITE`) statically in the hero viewport.
- Removed the horizontal translation and kinetic scroll animations that split the text on initial load.
- Removed the 3D ribbon animation (Three.js WebGL canvas, shaders, fake product cards, and the artificial 900vh scroll container), replacing it with a clean standard `100vh` hero section.

### 2. Preloader Removed
- Removed the 0–100 loading counter, logo mark, progress bar, and initial scroll lock (`lenis.stop()`).
- Landing page now renders immediately without a 3-second block.

### 3. Button Contrast Fix & CTA Content Update
- Updated CTA section copy to:
  - Eyebrow: `( BE PART OF WHAT'S NEXT )`
  - Headline: `Build what comes next.`
  - Subtitle: `We are advancing the frontiers of intelligence through research, engineering and ambitious technological work.`
- Fixed illegible white/cream text on `.pill` buttons by enforcing dark text (`#07060b`) and dark SVG strokes on cream background.
- Maintained smooth transition to white text and violet background on hover.

### 4. Contact Page Cleanups
- Removed the green `HUBS ACTIVE` capsule badge from the header.
- Removed pulsing green status dots and indicators from office locations and direct inquiry cards.

---

## Verification
- Verified TypeScript build (`npx tsc --noEmit`) passes with 0 errors.
- Verified responsive layout and typography across mobile and desktop breakpoints.

