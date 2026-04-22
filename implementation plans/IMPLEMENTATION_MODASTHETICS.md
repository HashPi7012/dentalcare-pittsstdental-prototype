# Implementation Plan: Modern Aesthetics (MODASTHETICS)

This plan outlines the technical implementation of the "Premium Dental Spa" aesthetic for Website 4, focusing on modern layouts, luxury typography, and high-end interactions.

## 1. Goal
Transform the website into a high-fidelity, editorial-style experience that balances clinic professionalism with luxury boutique aesthetics.

## 2. Technical Scope

### A. Core Branding & Typography
- **Hero Sanctuary Approach**: Implement the "Naked Text" design. All wrapping panels/glass boxes are removed.
- **Legibility Strategy**: 
    - **Global Fade**: Overlay a subtle `bg-gradient-to-r from-off-white/40 to-transparent` in `page.tsx` over the image.
    - **Text Lift**: Apply deep spread shadows to `h1` and `p` tags.
- **Background Repositioning**: Zoom (`scale-110`) and Offset (`object-right`) `/images/hero.webp` for optimal subject framing.
- **Hero Transition**: Mandatory linear gradient `mask-image` fade at the base of the Hero section.

### B. Navigation: Refined Morphing Capsule
- **Phase 1 (Split State)**: 
    - **Visual**: Uniform blurred glass with a **blackish tint** (e.g., `bg-black/20`) for high distinctness against the background.
    - **Logic**: Logo capsule (Left) and Nav capsule (Right).
- **Phase 2 (Merged State)**: 
    - **Visual**: **Lighter tint** (e.g., `bg-white/20`) with heavy `backdrop-blur-xl` to blend with the lighter page sections.
- **Refinement**: 
    - **Corners**: Radius adjusted to match button rounding (`rounded-2xl`).
    - **Speed**: Majestic **1000ms** duration with `cubic-bezier(0.2,0.8,0.2,1)` for a luxury feel.
    - **Fused State**: Widened to **5xl** with a generous **gap-12** between logo and links to maintain an authoritative, "big" presence.
    - **Visual Unification**: Background/border logic moved to a single wrapper; internal capsule borders are removed (`border-transparent`) during the merge for a zero-seam glass look.
    - **Blur**: Mandatory for all states.

### C. Bento-Grid Layouts
- Refactor `experience-grid.tsx` and `services-gallery.tsx` into asymmetrical Bento grids.
- Implement soft border glows (`bg-gold-main/10`) on hover.

### D. 4-Stage Patient Journey (Animated)
- **Steps**: 1. Consultation, 2. Design, 3. Treatment, 4. Transformation.
- **Visual**: 
    - Desktop: Horizontal line connection.
    - Mobile: Animated "Snake" flow (zigzag).
- **Behavior**: Auto-animates once when section enters viewport.

### E. Emergency Portal
- Minimalist rapid-response form.
- Premium clickable map for quick navigation.
- Deep integration with the header's "Emergency" CTA.

## 3. Implementation Steps
1.  **Global Foundation**: Update `layout.tsx` (fonts) and `globals.css` (variables/radius).
2.  **Navigation Logic**: Build the `framer-motion` scroll-morphing header.
3.  **Hero Refinement**: Implement the "Sanctuary" look—remove foreground image boxes and glass panels. Apply the Global Fade.
4.  **Journey Component**: Create the `PatientJourney` component with adaptive mobile snake logic.
5.  **Emergency Section**: Build the map/form section with the heartbeat pulse.
6.  **Cleanup**: Delete legacy `/images/hero.png`.

## 4. Design Tone
- **Primary Color**: Medical Gold (`#C5A059`) with light glows.
- **Background Layer**: Use the provided lifestyle image (/images/hero.webp) as a full-page background (bottom-most layer). 
- **Behavior**: The image will **scroll with the page** (absolute positioning) rather than staying fixed, providing a natural parallax feel when combined with the global fade.
- **Interactivity**: Consistent `backdrop-blur` and "Calm heart-beat" pulse for the Emergency CTA (Subtle zoom + slow/low-threat opacity cycle).
- **Interactive**: Low-friction, non-pushy CTAs.
