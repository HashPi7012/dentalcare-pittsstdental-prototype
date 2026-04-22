# Implementation Plan: Phase 8 - Mobile UX Optimization & Navigation Refinement

This phase focuses on streamlining the mobile experience through vertical expansion logic ("Reveal" buttons), enhancing site navigation for conversion, and optimizing the visual scale of brand assets on smaller screens.

## User Review Required

> [!IMPORTANT]
> **Mobile Reveal Logic**: Experience Grid, Services Gallery, and Patient Journeys will now show only 3 blocks initially on mobile. Clicking "Explore All" will expand the section vertically in-place.
> **Navigation**: A new "Smiles" link will be added to both Desktop and Mobile menus for direct access to results.

## Proposed Changes

### 1. Navigation & Footer Enhancements
**Files**: `src/components/navbar.tsx`, `src/components/footer.tsx`

- [MODIFY] `navbar.tsx`: Add "Smiles" to `navItems` array and mobile menu. Link to `#transformations`.
- [MODIFY] `footer.tsx`: Update the "Emergency Dental" link to point to `#emergency`.

### 2. Mobile Section Refinement (3-Block Limit + Reveal)
**Files**: `src/components/experience-grid.tsx`, `src/components/services-gallery.tsx`, `src/components/transformation-gallery.tsx`

- **Experience Grid**: 
  - On mobile (`sm` and `md` breakpoints), show only the first 3 tiles.
  - Add a "Explore All Differentiators" button at the bottom of the grid.
  - Use `AnimatePresence` for a smooth vertical expansion when clicked.
- **Services Gallery**:
  - Limit to 3 cards on mobile.
  - Add "Explore Full Suite" button.
- **Transformation Gallery**:
  - Adjust existing "View All" logic to trigger after 3 images instead of 6 on mobile.
  - Update button text to "Explore All Transformations".

### 3. Marquee Optimization
**File**: `src/components/trust-bar.tsx`

- [MODIFY] Reduce logo height on mobile (`h-16` or `h-20` instead of `h-32`).
- [MODIFY] Increase scrolling speed on mobile (reduce duration from `25s` to `18s`) to maintain visual momentum with smaller assets.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no regression in static generation.
- Browser test: Verify anchor links (`#transformations`, `#emergency`) jump to correct sections.

### Manual Verification
- **Mobile Emulation**: Use Chrome DevTools to verify that only 3 blocks are visible initially in the target sections.
- **Expansion**: Click "Explore All" on mobile to ensure smooth vertical growth without layout jumps.
- **Marquee**: Verify logos are appropriately sized and moving fluidly on mobile.
