# Design Tokens: Five Star Dental Spa

This document defines the visual language and design system for the Pitt Street Dental Centre landing page.

## 1. Color Palette

### Primary (Medical Gold)
*   **Gold Main**: `#C5A059`
*   **Gold Light**: `#D4B982`
*   **Gold Dark**: `#A68241`
*   **Gold Gradient**: `linear-gradient(135deg, #C5A059 0%, #D4B982 50%, #A68241 100%)` (Metallic Shimmer)

### Secondary (Spa Teal)
*   **Teal Muted**: `#5F7D7B`
*   **Teal Light**: `#8BA3A1`
*   **Teal Dark**: `#3E5251`

### Accents & Neutrals
*   **Emergency (Rosewood)**: `#9E4244` (A sophisticated, non-panic red)
*   **Off-White (Clinic Core)**: `#F9F9F9`
*   **Pure White**: `#FFFFFF`
*   **Charcoal (Text Core)**: `#1A1A1A`
*   **Slate Grey (Subtext)**: `#4A4A4A`

## 2. Typography

*   **Heading Font**: *Plus Jakarta Sans* (Sans-Serif)
    -   *Weight*: 700 (Bold), 800 (Extra-Bold)
    -   *Style*: High-impact, modern, tech-premium. Tight letter-spacing (`tracking-tighter`).
*   **Body Font**: *Outfit* (Sans-Serif)
    -   *Weight*: 300 (Light), 400 (Regular)
    -   *Style*: Extremely sleek, geometric, and "Editorial" luxury.

## 3. Architectural Standard

*   **Corner Radius**: `24px` (`rounded-3xl`)
    -   *Application*: All main sections, bento-grid cards, and modals.
*   **Visual Strategy**: "Soft Architectural" – minimal flat lines, maximum curved transitions.

## 3. CTA Logic & Placement

To ensure high conversion for the Sydney CBD professional, CTAs are placed strategically with distinct tiers.

### Tier 1: Primary [Book a Consultation]
*   **Style**: Solid Medical Gold Gradient, White text, premium shadow.
*   **Placements**:
    1.  **Nav Sticky**: Right-aligned, always visible.
    2.  **Hero Section**: Large center-aligned or left-aligned button.
    3.  **The Experience Layer**: After highlighting spa amenities.
    4.  **Final Push**: Above the footer contact map.

### Tier 2: Secondary [Download 2026 Price List]
*   **Style**: Ghost button with Medical Gold border or subtle Teal background.
*   **Placements**:
    1.  **Services Gallery**: Positioned after cosmetic services.
    2.  **Pricing Section**: High-contrast banner lead magnet.

### Tier 3: Emergency [Priority Response]
*   **Style**: Text link or minimalistic ghost button in Rosewood (#9E4244).
*   **Placements**:
    1.  **Nav Sticky**: Left of the primary CTA.
    2.  **Footer**: Quick link for urgent care.

## 4. Interaction Tokens
*   **Transitions**: `cubic-bezier(0.2, 0.8, 0.2, 1)` (Luxury ease-out)
*   **Duration**: 300ms (Global), 1000ms (Majestic Nav Morph)
*   **Blur**: `backdrop-blur-xl` (24px) for premium glassmorphism.
*   **Shadows**:
    -   *Glow*: `0 0 20px rgba(197, 160, 89, 0.2)` (Subtle gold aura)
    -   *Text Lift*: `0 4px 40px rgba(0,0,0,0.15)` (Spread shadow for readability)
    -   *Legibility Cloud*: `radial-gradient(circle at center, rgba(249, 249, 249, 0.9) 0%, transparent 70%)` (Mobile atmosphere)

## 5. Global Visuals
*   **Page Background**: `/images/hero.webp` (Optimized Sanctuary Shot)
*   **Background Style**: "Naked" editorial (No visible panels) with a Left-to-Right Global Fade.
*   **Navigation Morphing**:
    - *Stage 1*: Split Capsules (Wide Gap).
    - *Stage 2*: Inward symmetric interpolation.
    - *Stage 3*: Majestic Fused Pill (1000ms transition) to **5xl** width with **gap-12** spacing. Internal borders removed for a single continuous glass container.
