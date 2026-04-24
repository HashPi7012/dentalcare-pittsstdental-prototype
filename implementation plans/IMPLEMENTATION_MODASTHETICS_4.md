# Implementation Plan: Phase 10 - Final Polish & UX Optimization

This phase focuses on performance reliability, visual clarity in branding, and refining the mobile UX to remove friction.

## User Review Required

> [!IMPORTANT]
> **Marquee Empty Spaces**: To fix the issue where logos load slowly and leave empty spaces, I am setting the first 4 images in the marquee to `priority`. This forces the browser to load them immediately, ensuring the carousel looks full from the first frame.
> **Sticky Button Threshold**: The "Book Online" floating bar will now only appear once the Hero section is scrolled past, keeping the entry experience clean.

## Proposed Changes

### 1. Trust Bar (Reliability & Speed)
**File**: `src/components/trust-bar.tsx`
- [MODIFY] Add `priority={idx < 4}` to the `Image` components inside the marquee loop.
- [MODIFY] Increase scroll animation duration in `src/app/globals.css` by 25% (Slower).
  - Mobile: 18s → 23s.
  - Desktop: 25s → 32s.

### 2. Navigation Branding
**File**: `src/components/navigation.tsx`
- [MODIFY] Replace `bg-gold-shimmer` gradient text in the logo with solid `text-gold-main` for maximum legibility.
- [MODIFY] Ensure the "Clinic" text has a solid, non-fading color state.

### 3. Floating Mobile Action Bar
**File**: `src/components/mobile-action-bar.tsx`
- [MODIFY] Add scroll-tracking state.
- [MODIFY] Only render/display the bar once `scrollY` > `window.innerHeight * 0.8`.

### 4. Experience Grid (Content & Mobile UX)
**File**: `src/components/experience-grid.tsx`
- [DELETE] Remove the "Explore Amenities" button from the section header.
- [MODIFY] **AI Image Integration**:
  - Add `laser_dental_tech.png` to the "Laser Excellence" card.
  - Add `sleep_dentistry.png` to the "Sleep Dentistry" card.
- [MODIFY] **Mobile Symbol Standardization**:
  - Scale down icons to a consistent size.
  - Position icons at the top-right to prevent text overlap.
  - Add a subtle background glow behind icons for legibility on top of images.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure all new image imports are valid.

### Manual Verification
- **Network Throttling**: Test the Marquee on a "Slow 3G" connection in dev tools to verify that the `priority` images prevent the "empty carousel" look.
- **Scroll Test**: Verify the "Book Online" bar fades in smoothly only after the Hero.
- **Visual Audit**: Confirm the logo text is solid and clearly readable in both transparent and merged states.
