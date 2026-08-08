---
name: Zinger Gourmet
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#ffb59c'
  on-secondary: '#5c1900'
  secondary-container: '#b73a00'
  on-secondary-container: '#ffddd2'
  tertiary: '#fbbc00'
  on-tertiary: '#402d00'
  tertiary-container: '#b88900'
  on-tertiary-container: '#372700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#822700'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#fbbc00'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: beVietnamPro
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: beVietnamPro
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-md:
    fontFamily: beVietnamPro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: beVietnamPro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: beVietnamPro
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  price-display:
    fontFamily: beVietnamPro
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  max-width-desktop: 1200px
---

## Brand & Style

The design system is engineered for a premium, high-energy fast-food experience that positions "Zinger" as a gourmet leader in the digital space. The brand personality is aggressive yet refined—mixing the heat of the kitchen with the sleekness of high-end technology. It targets a modern, tech-savvy audience that values both speed and culinary quality.

The visual style utilizes **Glassmorphism** as its primary structural driver. Surfaces are not solid; they are translucent layers that allow vibrant brand colors and food photography to bleed through, creating a sense of depth and culinary "atmosphere." This is balanced with a **Minimalist** approach to layout to ensure the ordering process remains frictionless and fast. The emotional response should be one of "high-end craving"—urgent, sophisticated, and polished.

## Colors

This design system utilizes a "Fiery Night" palette. The foundation is a deep Charcoal/Black (`#121212`) which provides the necessary contrast for the glass effects. 

- **Primary (Fiery Red):** Used for primary actions, price highlights, and critical UI states. It represents the heat and energy of the brand.
- **Secondary (Burnt Orange):** Used for hover states, accents, and secondary buttons to provide tonal depth.
- **Tertiary (Amber Gold):** Reserved exclusively for premium callouts, star ratings, and currency symbols to evoke a "gourmet" feel.
- **Glass Surfaces:** Semi-transparent white or primary-tinted overlays are used to create the frosted glass effect against the dark background.

## Typography

The design system employs **beVietnamPro** for its contemporary, approachable, and energetic geometric qualities. For Arabic scripts, the system defaults to **Cairo**, ensuring the bold, architectural feel of the brand remains consistent across languages.

Typography is used to establish a clear hierarchy:
- **Displays:** Extra-bold weights with tight letter spacing for a high-impact, "loud" brand voice.
- **Body:** Clean, legible weights with generous line heights to ensure readability against dark, blurred backgrounds.
- **Prices:** Always rendered in a heavier weight using the Tertiary Amber Gold to ensure immediate financial visibility.
- **Labels:** Small-caps are used for category tags (e.g., "SPICY", "NEW") to add an editorial layer to the menu.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Mobile:** A 4-column system with 20px outside margins. Most menu items occupy a 2-column "card" span in a staggered or masonry-style view to emphasize product photography.
- **Desktop:** Scales to a 12-column grid. Large "Hero" glass panels span 8 columns, with checkout or filters occupying the remaining 4.
- **Rhythm:** An 8px linear scale (4, 8, 16, 24, 40...) governs all padding and margins to maintain a tight, systematic feel.
- **Safe Areas:** Generous bottom-padding is reserved for persistent "Floating Action Buttons" (FAB) common in high-speed ordering apps.

## Elevation & Depth

Visual hierarchy is managed through **Backdrop Blurs** and **Tonal Layering** rather than traditional heavy shadows.

1.  **Level 0 (Base):** Solid Charcoal (`#121212`).
2.  **Level 1 (Cards):** Surface with `backdrop-filter: blur(20px)` and a 1px border of `rgba(255, 255, 255, 0.1)`. This creates the "frosted glass" look.
3.  **Level 2 (Modals/Overlays):** Increased blur (40px) with a subtle inner glow on the top edge to simulate a light source from above.
4.  **Shadows:** Use a single "Brand Glow" shadow for primary buttons—a soft, low-opacity spread of the Primary Red (`#FF4500`) to make them appear as if they are emitting heat.

## Shapes

The design system uses **Rounded (0.5rem / 8px)** as the base radius. This provides a modern, professional feel that is friendly but not "bubbly."

- **Cards & Inputs:** Use the base 8px radius.
- **Primary Buttons:** Use `rounded-xl` (24px) or full pill-shape to distinguish them from structural elements.
- **Image Containers:** Must match the parent card radius exactly to maintain the "Glass Panel" aesthetic.
- **Decorative Elements:** Use subtle 45-degree angled clips on secondary containers to hint at the "Z" in Zinger.

## Components

- **Buttons:** Primary buttons are solid gradients (Primary Red to Secondary Orange) with white text. Secondary buttons use the "Glass" style with a Primary Red border.
- **Gourmet Cards:** Feature a high-resolution "hero" image that bleeds to the top edge, with a glass-morphic bottom section containing the title and price.
- **Price Chips:** Small, semi-transparent black pills with Tertiary Gold text, often floating in the top-right corner of product images.
- **Input Fields:** Dark, semi-transparent backgrounds with a 1px bottom-border that glows Primary Red when focused.
- **Progress Indicators:** A "Heat Gauge" style progress bar for order tracking, transitioning from Amber to Fiery Red as the order approaches delivery.
- **Navigation:** A persistent glass-morphic bottom navigation bar with blurred background to ensure content is visible underneath as the user scrolls.