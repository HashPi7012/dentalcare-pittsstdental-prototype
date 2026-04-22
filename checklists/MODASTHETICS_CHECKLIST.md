# MODASTHETICS Checklist: Premium Dental Redesign

Track the progress of the high-fidelity aesthetic transformation.

## Phase 0: Ambient Visuals
- [x] Save the final generated "Sanctuary" image as `/images/hero.webp`.
- [x] Implement **Global Left-to-Right Fade** overlay for text legibility.
- [x] Implement **Mobile Radial Legibility Cloud** behind centered text.
- [x] Apply **Zoom & Offset** (Move right) for optimal model framing.
- [x] Implement **Scrolling Background Behavior** (Absolute positioning).
- [x] Apply **Gradient Transition Mask** to the base of the Hero section.
- [x] Delete legacy `/images/hero.png`.
- [x] Ensure the background is the bottom-most layer (`z-[-1]`).

## Phase 1: Foundation & Branding
- [x] Install **Plus Jakarta Sans** and **Outfit** in `layout.tsx`.
- [x] Update `globals.css` with new CSS variables for fonts.
- [x] Implement `rounded-3xl` (24px) as a standard Tailwind utility.
- [x] Create `.bg-gold-glow` utility for interactive hover states.

## Phase 2: Refined Navigation (Polish)
- [x] Retain the `Navigation` state manager (Tracking scroll position).
- [x] Implement **Continuous Pill (Phase 3)**: Gap-fill logic triggered after Hero.
- [x] Implement **Symmetric Morphing**: 300ms soft dissolve on the background bridge.
- [x] Vertical Adjustment: Final merged pill positioned higher for breathing space.
- [x] Redesign **Capsule Radius** (2xl) to match button rounding.
- [x] Apply mandatory `backdrop-blur-xl` for all states.

## Phase 3: Bento Grid Upgrade
- [x] Refactor `experience-grid.tsx` to use the 24px radius and bento-layout.
- [x] Refactor `services-gallery.tsx` with premium card backgrounds and glows.
- [x] **Mobile Sanctuary Layout**: Center Hero text and buttons for mobile viewports.
- [x] Remove foreground image box from the Hero section.
- [x] Apply **Text Spread Shadow** to Hero h1/p for readability on image.
- [x] Update `hero.tsx` with editorial-scale typography (tight tracking).

## Phase 4: Interactive Journeys
- [x] Build `patient-journey.tsx` with Desktop (Horizontal) layout.
- [x] Implement the **Mobile Snake Flow** (Zigzag) with line-draw animation.
- [x] Trigger point: Section visibility (run once).

## Phase 5: Functional Depth
- [x] Create `emergency-portal.tsx` with minimal form.
- [x] Integrate clickable "Quick Nav" map in the emergency section.
- [x] Implement **Calm Heartbeat** Pulse (Subtle sync zoom + opacity) on Emergency CTA.
- [x] Final visual polish: Smooth scroll and micro-hover interactions on all CTAs.

## Phase 6: Refined Majestic Morph
- [x] **Slow the Pace**: Update transition to 1000ms for luxury feel.
- [x] **Restricted Movement**: Widen merged state to `5xl` with `gap-12`.
- [x] **Zero-Seam Logic**: Remove internal capsule borders in merged state.
- [x] **Background Unification**: Ensure a single continuous glass backdrop.
