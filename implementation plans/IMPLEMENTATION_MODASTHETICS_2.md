# Phase 7: Premium Aesthetic Overhaul

Comprehensive upgrade to elevate every section of the website to a top-notch editorial standard, adding real clinic data, expanding content, and refining visual flow.

## Proposed Changes

### A. Accreditations Marquee (Replaces Trust Bar)

**File**: `src/components/trust-bar.tsx`

Replace the static dark Trust Bar with an **infinite auto-scrolling marquee** of accreditation logos.

- **Source**: Use the 12 sharpened, transparent-background images from `/images/Acreditations/` (`acred-v2-1.png` to `acred-v2-12.png`)
- **Visual**: `bg-off-white` strip with a thin `border-gold-main/10` top and bottom. Full visibility at all times (no grayscale/low opacity).
- **Size**: Logos maintained at `h-32` (128px), but container tightened to `h-[136px]` and section padding reduced for a slimmer overall banner profile.
- **Animation**: Pure CSS `@keyframes` infinite horizontal scroll. Duration reduced to **25s** for a more dynamic feel. Logos duplicated for seamless loop. Marquee pauses on hover for readability.
- **Label**: Small "Accredited & Recognised By" text above the strip in `tracking-widest uppercase`

---

### B. Works Done Stats Section (NEW)

**File**: `src/components/works-done.tsx` (NEW)

New section placed **between Experience Grid and Services Gallery**.

- **Layout**: 5 stat blocks in a horizontal row (responsive: 2-col grid on mobile, 5-col on desktop)
- **Each block**: Custom branded SVG icon (left) + number (top-right, large bold) + label (bottom-right, uppercase tracking)
- **Animation**: Numbers count up from 0 to target on scroll-into-view using `framer-motion` `useInView` + `useMotionValue` + `animate`
- **Data**:

| Icon (Custom SVG) | Number | Label |
|---|---|---|
| Implant pin | 5,217+ | IMPLANTS |
| Teeth row | 2,576+ | INVISALIGNS |
| Crown cap | 21,219+ | DENTAL CROWNS |
| Veneer brush | 18,653+ | DENTAL VENEERS |
| Smile sparkle | 6,861+ | FULL MOUTH REHAB |

- **Style**: `bg-white` section, gold accent on icons, charcoal numbers, `font-heading font-extrabold` for the counts
- **Dividers**: Subtle vertical gold lines between each stat block (desktop only)

---

### C. Experience Grid Redesign

**File**: `src/components/experience-grid.tsx`

Expand from 4 tiles to **6 tiles** in a richer asymmetric bento layout.

- **Each Tile**: Features a high-fidelity background image (generated) with specific legibility layers:
    - **Gradient Overlays**: Subtle dark or light fades to ensure text pops.
    - **Glassmorphism**: Icons and labels sit on subtle backdrop-blur containers where needed.
    - **Hover Depth**: Images scale slightly (`scale-105`) on hover for a parallax feel.
- **Tiles Breakdown**:
    - **Tile 1**: CEREC Same-Day Crowns (Image: `cerec_tech.png`)
    - **Tile 2**: Five-Star Spa Amenities (Image: `spa_lounge.png`)
    - **Tile 3**: Needle-Free Laser Care (Icon-focused)
    - **Tile 4**: Sleep Dentistry (Icon-focused)
    - **Tile 5**: Digital Smile Design (Image: `digital_smile_design.png`)
    - **Tile 6**: 99.8% Success Rate (Animated counter)

All tiles use the existing `rounded-3xl` and `border-gold-light/10` design language.

---

### D. Services Gallery Expansion

**File**: `src/components/services-gallery.tsx`

Expand from 3 services to **6 services**.

**Existing** (keep):
1. Porcelain Veneers
2. Invisalign Aligners
3. Zoom! Whitening (Teeth Whitening)

**New** (add):
4. Orthodontic Braces — generate image
5. Gum Contouring — generate image
6. Gum Grafting — generate image

- **Layout change**: Switch from 3-col to a **2-row × 3-col** responsive grid
- **Staggered reveal**: Each card enters with a cascading `whileInView` animation with varying Y-offsets
- **Hover lift**: Add `hover:translate-y-[-4px]` for a subtle depth effect

---

### E. Beyond the Smile: Patient Journeys

**File**: `src/components/transformation-gallery.tsx` (NEW)
**Delete**: `src/components/results-slider.tsx`

Replace the broken results slider with a **high-fidelity curated transformation gallery**.

- **Layout**: 3×3 grid of transformation cards
- **Initial State**: Row 1 fully visible. Row 2 half-concealed by a gradient mask. Row 3 hidden
- **Reveal CTA**: "View All Transformations" pill button at the gradient boundary. On click, gradient animates away and all 9 images cascade in
- **Each Card**: Transformation image + bottom overlay strip with procedure name + description

**Image → Description Mapping**:

| File | Procedure | Description |
|---|---|---|
| `2 weeks apart.webp` | Porcelain Veneers | "Complete Smile Redesign — 2 Weeks" |
| `2 weeks apart_2.webp` | Full Mouth Restoration | "Full Arch Reconstruction — 2 Weeks" |
| `2 weeks apart_3.webp` | Porcelain Veneers | "Alignment & Shade Perfection — 2 Weeks" |
| `2 weeks apart_4.webp` | Porcelain Veneers | "Total Smile Transformation — 2 Weeks" |
| `2 weeks apart_5.webp` | Porcelain Veneers | "Natural-Look Veneer Suite — 2 Weeks" |
| `2 weeks apart_6.webp` | Porcelain Veneers | "Cosmetic Refinement — 2 Weeks" |
| `12 months apart.png` | Invisalign Aligners | "Invisible Alignment Journey — 12 Months" |
| `12 months apart.webp` | Invisalign Aligners | "Complete Orthodontic Correction — 12 Months" |
| `vineers...invisalign...webp` | Veneers + Invisalign | "Combined Veneer & Alignment Makeover" |

---

### F. Testimonials Center-Stage Slider
Replace the generic 3-column grid with a **Premium Center-Stage Horizontal Slider**.

- **Layout**: "Center-Stage" design showing 3 cards simultaneously. The center card is 100% scale and fully opaque, while the side cards are scaled down to 85%, have 40% opacity, and are slightly blurred.
- **Content**: 8 high-end patient reviews.
- **Card Design**: Clean white `bg-white` with a thin `border-gold-main/20` and `shadow-xl`. 
- **Trust Elements**: 
  - 5 Gold Stars
  - Custom "Verified by Google" badge (Google logo + checkmark).
  - High-quality avatar placeholders.
- **Animation**: `framer-motion` sliding `x` values (`-105%`, `0%`, `105%`) stepping every 6 seconds.

---

### G. Pricing Banner → Glassmorphic Card

**File**: `src/components/pricing-banner.tsx`

Convert edge-to-edge dark band into a **centered floating card**.

- **Container**: `max-w-4xl mx-auto rounded-3xl backdrop-blur-xl bg-charcoal/90 border border-gold-main/20`
- **Gold glow**: Subtle `shadow-gold-main/10` outer glow
- **Breathing room**: Extra padding on surrounding section

---

### H. FAQ Accordion Polish

**File**: `src/components/faq-accordion.tsx`

- Corners: `rounded-lg` → `rounded-2xl`
- Borders: `border-teal-light/20` → `border-gold-light/10`
- Expanded state: Left-edge gold accent bar (`border-l-2 border-gold-main`)
- Heading font: `font-heading` for consistency

---

### I. Section Transitions (Fluid Flow)

**Files**: Multiple section components

Add CSS `mask-image` gradient bleeds at the top and bottom of key sections.
Sections affected: Experience Grid, Services Gallery, Patient Journey, Testimonials, FAQ.

---

### J. Footer Map Refinement

**File**: `src/components/footer.tsx`

- Replace CSS `invert + hue-rotate` hack with a clean `bg-charcoal/50` overlay
- Add golden border ring: `border-2 border-gold-main/20`

---

### K. CTA Button Micro-Interactions

**File**: `src/app/globals.css`

- Add `active:scale-[0.97]` press state to primary CTA buttons
- Brief ring pulse on click for tactile feedback

---

### L. Page Layout Update

**File**: `src/app/page.tsx`

Updated component ordering:

```
<Navigation />
<Hero />
<AccreditationsMarquee />     ← was TrustBar
<ExperienceGrid />             ← redesigned (6 tiles)
<WorksDone />                  ← NEW stats section
<ServicesGallery />            ← expanded (6 services)
<PatientJourney />
<TransformationGallery />      ← was ResultsSlider
<PricingBanner />              ← glassmorphic card
<Testimonials />               ← editorial spotlight
<FAQAccordion />               ← polished
<EmergencyPortal />
<Footer />                     ← map refinement
<MobileActionBar />
```

## Asset Generation Required

1. **3 service images** (Orthodontic Braces, Gum Contouring, Gum Grafting) — via `generate_image`
2. **5 custom SVG dental icons** (implant, invisalign, crown, veneer, rehab) — coded inline
