# LadyWax Design System

## Brand Identity

### Logo

- **File**: `/public/images/logo.png`
- **Format**: PNG with transparency
- **Usage**: Header, footer (inverted), favicons
- **Recommended sizes**: 160x56px (desktop), 128x45px (mobile)

---

## Color Palette

### Primary Colors (Blues)

The main brand colors derived from the LadyWax identity:

```css
Primary 50:  #e6e6ff  /* Lightest tint */
Primary 100: #ccccff
Primary 200: #9999ff
Primary 300: #6666ff
Primary 400: #3333ff
Primary 500: #0000f8  /* Main brand color */
Primary 600: #05048d  /* Dark brand color */
Primary 700: #040370
Primary 800: #030254
Primary 900: #020138  /* Darkest shade */
```

**Usage**:

- Primary 500: Main CTAs, links, accents
- Primary 600: Hover states, dark sections
- Primary 100-200: Backgrounds, subtle highlights

### Accent Colors (Rose/Pink)

Complementary feminine colors for warmth and elegance:

```css
Accent 50:  #fff5f7
Accent 100: #ffe3e9
Accent 200: #ffc7d3
Accent 300: #ffabbd
Accent 400: #ff8fa7
Accent 500: #ff7391
Accent 600: #ff577b
Accent 700: #e63965
Accent 800: #cc1a4f
Accent 900: #b30039
```

**Usage**:

- Highlights in hero text
- Gradient backgrounds
- Testimonial accents
- Decorative elements

### Neutral Colors (Grays)

Professional neutrals for text and backgrounds:

```css
Neutral 50:  #fafafa  /* Backgrounds */
Neutral 100: #f5f5f5  /* Subtle backgrounds */
Neutral 200: #e5e5e5  /* Borders */
Neutral 300: #d4d4d4
Neutral 400: #a3a3a3
Neutral 500: #737373  /* Body text (light) */
Neutral 600: #525252  /* Secondary text */
Neutral 700: #404040
Neutral 800: #262626  /* Primary text */
Neutral 900: #171717  /* Headings */
Neutral 950: #0a0a0a  /* Darkest */
```

**Usage**:

- Text hierarchy
- Borders and dividers
- Card backgrounds
- Footer background (900)

### Rose Colors (Additional Warm Tones)

Extra palette for gradients and special elements:

```css
Rose 50-900: Standard Tailwind rose palette
```

---

## Typography

### Font Family

**Primary**: Geist Sans (Next.js optimized)

- Modern, clean, highly legible
- Variable font for performance
- Fallback: system-ui, sans-serif

**Code/Mono**: Geist Mono (for special elements)

### Font Sizes & Weights

#### Headings

```css
H1: 3rem-4.5rem (48-72px) • font-bold
H2: 2.25rem-3rem (36-48px) • font-bold
H3: 1.875rem-2.25rem (30-36px) • font-bold
H4: 1.5rem-1.875rem (24-30px) • font-semibold
```

#### Body Text

```css
Large: 1.25rem (20px) • font-normal
Base:  1rem (16px) • font-normal
Small: 0.875rem (14px) • font-normal
Tiny:  0.75rem (12px) • font-medium
```

#### Weights

- Regular: 400 (body text)
- Medium: 500 (labels, small headers)
- Semibold: 600 (subheadings)
- Bold: 700 (headings, CTAs)

---

## Spacing System

Based on Tailwind's 4px scale:

```
2  → 8px   (tight spacing)
4  → 16px  (small gaps)
6  → 24px  (medium gaps)
8  → 32px  (large gaps)
12 → 48px  (section spacing)
16 → 64px  (major spacing)
24 → 96px  (section padding)
```

**Component Spacing**:

- Card padding: 8 (2rem/32px)
- Section padding: 24 (6rem/96px)
- Container padding: 4-8 (1-2rem)
- Element gaps: 4-6 (1-1.5rem)

---

## Border Radius

```css
sm:   0.125rem (2px)  - Small elements
base: 0.25rem (4px)   - Buttons, inputs
md:   0.375rem (6px)  - Default
lg:   0.5rem (8px)    - Cards (small)
xl:   0.75rem (12px)  - Cards (medium)
2xl:  1rem (16px)     - Cards (large)
3xl:  1.5rem (24px)   - Hero cards
full: 9999px          - Pills, circular buttons
```

**Usage**:

- Buttons: rounded-full (pills)
- Cards: rounded-2xl or rounded-3xl
- Images: rounded-xl
- Badges: rounded-full

---

## Shadows

### Elevation System

```css
sm:  Small shadow for subtle elevation
md:  Default card shadow
lg:  Prominent cards
xl:  Floating elements
2xl: Popovers, modals
```

**Component Usage**:

- Cards: shadow-lg
- Buttons: shadow-md → shadow-xl on hover
- Header: shadow-md when scrolled
- Floating buttons: shadow-lg

---

## Animations

### Duration

```css
Fast:     200ms (hover states)
Default:  300ms (transitions)
Moderate: 500ms (fades)
Slow:     600-800ms (slide-ins)
```

### Easing

```css
ease:     Default smooth
ease-out: Decelerating (entrances)
ease-in:  Accelerating (exits)
```

### Custom Animations

**Fade In**

```css
0%:   opacity: 0
100%: opacity: 1
Duration: 600ms
```

**Fade In Up**

```css
0%:   opacity: 0, translateY: 20px
100%: opacity: 1, translateY: 0
Duration: 600ms
```

**Scale In**

```css
0%:   opacity: 0, scale: 0.9
100%: opacity: 1, scale: 1
Duration: 500ms
```

---

## Buttons

### Primary Button

```css
Background: primary-500
Hover: primary-600
Text: white
Padding: px-6 py-3 (or px-8 py-4 for large)
Border Radius: rounded-full
Font: font-semibold or font-bold
Shadow: shadow-lg → shadow-xl on hover
Transform: hover:scale-105
```

### Secondary Button

```css
Background: white/10 with backdrop-blur
Border: 2px border-white/50
Text: white
Hover: bg-white/20
(Same padding and radius as primary)
```

### Ghost Button

```css
Background: transparent
Border: 1px border-neutral-200
Text: neutral-700
Hover: bg-neutral-50
```

---

## Cards

### Standard Card

```css
Background: white
Border Radius: rounded-2xl
Padding: p-6 or p-8
Shadow: shadow-lg
Hover: shadow-xl + translate-y-2
Border: Optional border-neutral-100
```

### Location Card

```css
Background: white
Overflow: hidden (for image zoom)
Hover: shadow-2xl + -translate-y-2
Image: h-64 with hover:scale-110
```

### Feature Card

```css
Background: neutral-50
Hover: bg-white + border-primary-100
Icon container: bg-primary-100 → bg-primary-500 on hover
```

---

## Responsive Breakpoints

```css
sm:  640px   (Small tablets, large phones)
md:  768px   (Tablets)
lg:  1024px  (Laptops, small desktops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large desktops)
```

### Mobile-First Approach

All styles default to mobile, then enhanced with breakpoints:

```tsx
className = "text-4xl sm:text-5xl lg:text-6xl";
className = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
```

---

## Icons

Using Heroicons (via inline SVG):

- Stroke width: 2
- Size: w-5 h-5 (small), w-6 h-6 (medium), w-8 h-8 (large)
- Color: Inherits from parent text color
- Transitions: All icons have transition-colors

---

## Accessibility Standards

### Focus States

```css
outline: 2px solid primary-500
outline-offset: 2px
```

### Color Contrast

- All text meets WCAG AA standards (4.5:1 ratio)
- CTA buttons have high contrast (>7:1)
- Focus indicators are clearly visible

### Interactive Elements

- Minimum touch target: 44x44px (iOS) / 48x48px (Android)
- Keyboard navigation supported
- ARIA labels on all icons/buttons
- Semantic HTML structure

---

## Grid System

### Container

```css
Max width: Responsive (sm, md, lg, xl, 2xl)
Padding: px-4 sm:px-6 lg:px-8
Margin: mx-auto (centered)
```

### Common Layouts

**Three Column Grid**

```tsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

**Two Column Grid**

```tsx
grid grid-cols-1 lg:grid-cols-2 gap-8
```

**Feature Grid (6 items)**

```tsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

---

## Image Guidelines

### Hero Background

- Size: 1920x1080px minimum
- Format: WebP with JPG fallback
- Quality: 85%
- Overlay: Gradient overlay required for text readability

### Location Images

- Size: 800x600px
- Format: WebP with PNG fallback
- Quality: 90%
- Aspect ratio: 4:3

### Logo

- Format: PNG with transparency
- Size: 400x140px @2x for retina
- Usage: Various sizes via Next.js Image

---

## Best Practices

1. **Always use the config file** for editable content
2. **Maintain consistent spacing** using Tailwind's scale
3. **Test all animations** on slower devices
4. **Ensure color contrast** meets accessibility standards
5. **Use semantic HTML** for better SEO
6. **Optimize images** before adding to project
7. **Test responsive** on real devices, not just browser tools
8. **Keep components modular** and reusable
9. **Document any deviations** from this design system
10. **Consider loading states** for all dynamic content

---

## Component-Specific Guidelines

### Navigation

- Fixed header with blur background on scroll
- Mobile menu slides from top
- Active page indicator (when implemented)

### Hero

- Always full viewport height on desktop
- Minimum 80vh on mobile
- Strong visual hierarchy
- Clear CTAs above the fold

### Forms (Future)

- Labels above inputs
- Error states in red-500
- Success states in green-500
- Helper text in neutral-600

### Loading States (Future)

- Skeleton screens for content
- Spinners for actions
- Progress bars for uploads
- Optimistic UI updates

---

This design system ensures consistency across the LadyWax website and provides a foundation for future development.
