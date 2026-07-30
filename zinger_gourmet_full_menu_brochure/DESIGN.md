---
name: High-Heat Gourmet
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5b4039'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#907067'
  outline-variant: '#e4beb4'
  surface-tint: '#b12d00'
  primary: '#ad2b00'
  on-primary: '#ffffff'
  primary-container: '#d73a05'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb5a1'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#00628a'
  on-tertiary: '#ffffff'
  tertiary-container: '#007dae'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a1'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#882000'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#84cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  price-display:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '900'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

This design system is built for a premium, high-energy culinary experience. The brand personality is bold, confident, and unapologetically vibrant, moving away from traditional fast-food tropes into a "fast-fine" gourmet aesthetic. The target audience is urban professionals and food enthusiasts who value quality, speed, and visual appeal.

The design style is **High-Contrast / Bold** mixed with **Modern Minimalism**. It utilizes aggressive splashes of color paired with expansive white space to ensure that high-resolution food photography remains the focal point. The interface feels kinetic and urgent yet polished and premium, using thick strokes, tight grids, and oversized typography to command attention.

## Colors

The palette is dominated by **Vibrant Orange**, a high-arousal color intended to stimulate appetite and convey energy. This is supported by **Golden Yellow** as a secondary accent for highlights, ratings, and promotional tags.

- **Primary (#FF5625):** Used for primary actions, price points, and brand elements.
- **Secondary (#FFD700):** Reserved for "Gold Level" menu items, badges, and star ratings.
- **Surface (#F5F5F5):** Provides a soft contrast against the pure white background to define card boundaries without using heavy borders.
- **Text (#1A1A1A):** A near-black neutral ensures maximum legibility and a premium "ink" feel.

## Typography

The typography system relies on **Montserrat** for its geometric power and "loud" presence in headlines. This is paired with **Work Sans** for body copy to maintain professional readability and a grounded feel. **Barlow Condensed** is used for utility labels and secondary navigation to provide a functional, industrial contrast.

- **Headlines:** Use heavy weights (800-900) with tight letter spacing to create a high-impact "poster" effect.
- **Price Points:** Always rendered in Montserrat Bold to ensure they feel as substantial as the food descriptions.
- **Labels:** Use Barlow Condensed in all-caps for categories and metadata to save horizontal space and add a modern, editorial edge.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is based on an 8px root scale, ensuring mathematical harmony across all components.

- **Grid:** Large gutters (24px) are essential to prevent the high-contrast elements from feeling cluttered.
- **Photography:** Food imagery should frequently break the grid or occupy full-bleed containers to emphasize scale and quality.
- **White Space:** Heavy vertical padding (80px+) between menu sections is required to give the "High-Heat" colors room to breathe, preventing visual fatigue.

## Elevation & Depth

This design system uses **Tonal Layers** and **Ambient Shadows** to create a sense of physical presence.

- **Cards:** Use extremely soft, large-radius shadows (Blur: 30px, Opacity: 4%, Color: #1A1A1A) to make menu items appear as if they are resting lightly on the surface.
- **Primary Buttons:** Utilize a subtle bottom-heavy shadow to create a "tactile" pressable feel.
- **Depth Hierarchy:** The background is always #FFFFFF. Level 1 surfaces (cards, search bars) use #F5F5F5 or white with a shadow. Level 2 surfaces (modals, active item details) use a high-contrast primary color background to "pop" off the screen.

## Shapes

The shape language is **Rounded**, using an 8px base radius for standard elements and 16px-24px for large cards. This softens the aggressive color palette and heavy typography, making the brand feel approachable and modern rather than industrial or cold.

- **Buttons:** 8px radius (Standard) or Pill-shaped for "Add to Cart" actions to maximize tap targets.
- **Images:** Food photography must always have rounded corners to maintain the gourmet, polished aesthetic.

## Components

### Item Cards
The core of the system. Cards feature a top-heavy layout with a high-aspect-ratio image (4:3), followed by the item name in `headline-md`, a short description in `body-md`, and a bold price at the bottom right. On hover, the image should subtly scale (1.05x).

### Buttons
- **Primary:** Solid #FF5625 with white text. Bold, heavy weight.
- **Secondary:** Outlined 2px #1A1A1A.
- **Ghost:** No background, #FF5625 text, used for "View Details" or "Back" actions.

### Menu Category Sections
Sticky horizontal navigation using `label-caps`. Active states are indicated by a 4px bottom bar in #FF5625.

### Inputs & Selectors
Fields use a #F5F5F5 background with no border in their default state, moving to a 2px #FF5625 border on focus. Labels sit above the field in `label-caps`.

### Footer
A high-contrast block using a #1A1A1A background and #FFFFFF text. Social links and contact info are laid out in a clean 4-column structure.