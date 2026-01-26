# LadyWax Landing Page - Component Documentation

## Overview

This document provides detailed information about all components used in the LadyWax landing page.

## Component Architecture

### Layout Components

#### `Header.tsx`

**Purpose**: Fixed navigation bar with mobile menu support

**Features**:

- Fixed positioning with scroll-based background change
- Logo with hover animation
- Desktop navigation menu
- Mobile hamburger menu with slide-down animation
- "Book Now" CTA button
- Smooth scroll behavior

**Props**: None (uses `siteConfig` for navigation items)

**State**:

- `isScrolled`: Boolean for background transparency
- `isMobileMenuOpen`: Boolean for mobile menu visibility

---

#### `Footer.tsx`

**Purpose**: Complete footer with contact information and links

**Features**:

- Brand logo and description
- Quick links navigation
- Both location details (Amsterdam & The Hague)
- Opening hours display
- Social media placeholders
- Copyright and legal links

**Props**: None (uses `siteConfig` for data)

---

### Page Sections

#### `Hero.tsx`

**Purpose**: Full-screen hero section with strong visual impact

**Features**:

- Full viewport height
- Background image with gradient overlay
- Animated heading and subheading
- Opening hours card
- Dual CTA buttons (Book Appointment / Learn More)
- Stats cards (specialists, locations, experience)
- Scroll indicator with animation

**Animations**:

- Fade in + slide up for all elements
- Staggered animation timing
- Continuous scroll indicator bounce

---

#### `FeaturesSection.tsx`

**Purpose**: Showcase key benefits and unique selling points

**Features**:

- 6 feature cards with icons
- Hover effects on cards
- Icon animations on hover
- About LadyWax text section with gradient background
- Responsive grid layout (1/2/3 columns)

**Animations**:

- Staggered card animations on scroll
- Icon color transition on hover

---

#### `LocationsSection.tsx`

**Purpose**: Display both salon locations with detailed information

**Features**:

- 2 location cards (Amsterdam & The Hague)
- Location images with hover zoom effect
- Address, phone, email display
- "Make an Appointment" CTA
- "Get Directions" Google Maps link
- Responsive grid (1 or 2 columns)

**Animations**:

- Card slide-up on scroll into view
- Image zoom on hover
- Card elevation on hover

**Functionality**:

- Stores selected location in sessionStorage for appointment widget

---

#### `TestimonialsSection.tsx`

**Purpose**: Build trust with customer reviews

**Features**:

- 3 testimonial cards
- 5-star rating display
- Customer name and location
- Quote styling
- Trust badges with statistics
- Gradient background

**Animations**:

- Staggered card animations
- Hover shadow effect

---

#### `AppointmentSection.tsx`

**Purpose**: Integrated booking system using Salonized widget

**Features**:

- Location selector toggle (Amsterdam / The Hague)
- Dynamic iframe loading based on selected location
- Location details header
- Contact information
- Full-width responsive iframe

**State**:

- `selectedLocation`: Tracks which location's widget to show

**Props**: None (uses `siteConfig` for widget URLs)

---

### Utility Components

#### `ScrollToTop.tsx`

**Purpose**: Smooth scroll-to-top button

**Features**:

- Appears after scrolling 300px
- Fixed position (bottom-right)
- Smooth scroll animation
- Hover effects
- Entrance/exit animations

**State**:

- `isVisible`: Boolean based on scroll position

---

## Styling Approach

### Tailwind CSS Classes

All components use Tailwind CSS for styling with:

- Custom color palette (primary blue, accent rose, neutral grays)
- Responsive breakpoints (sm, md, lg)
- Hover and focus states
- Custom animations

### Animation Strategy

- **Framer Motion** for complex animations
- **CSS animations** for simple effects
- **Viewport-based triggers** for scroll animations
- **Staggered children** for sequential reveals

---

## Configuration

### `lib/config.ts`

Central configuration file containing:

- Site metadata
- Business information (hours, specialists count)
- Location details (addresses, phones, emails, widget URLs)
- Navigation items
- Feature highlights

### `lib/types.ts`

TypeScript type definitions for:

- Location objects
- Highlight objects
- Navigation items
- Service objects (for future use)

### `lib/utils.ts`

Utility functions:

- `cn()`: Class name merger
- `formatPhone()`: Phone number formatter
- `scrollToElement()`: Smooth scroll helper

---

## Responsive Design

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Mobile Optimizations

- Hamburger menu for navigation
- Stack layout for cards
- Adjusted font sizes
- Touch-friendly button sizes
- Optimized image loading

---

## Performance Considerations

1. **Image Optimization**: Next.js Image component with proper sizing
2. **Code Splitting**: Component-based architecture
3. **Lazy Loading**: Viewport-based animation triggers
4. **Smooth Animations**: GPU-accelerated transforms
5. **Minimal JavaScript**: Static content where possible

---

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Proper heading hierarchy
- Alt text on images
- Screen reader friendly

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

1. Add loading skeletons for better perceived performance
2. Implement intersection observer for lazy image loading
3. Add analytics tracking
4. Create admin panel for content management
5. Add multi-language support (NL/EN)
6. Implement service worker for offline support
