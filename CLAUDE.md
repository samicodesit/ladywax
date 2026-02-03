# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LadyWax is a premium waxing salon website for a ladies-only business with locations in Amsterdam and The Hague. Built with Next.js 16+ (App Router), TypeScript, Tailwind CSS, and Framer Motion for animations.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Architecture

### App Router Structure (Next.js 14+ App Router)

Routes are defined by folder structure under `/app`:

- `/app/page.tsx` - Home/landing page
- `/app/onze-prijslijst/page.tsx` - Price list page
- `/app/waarom-waxen/page.tsx` - Waxing information page
- `/app/kom-bij-ons-werken/page.tsx` - Careers/vacancies page
- `/app/contact-opnemen/page.tsx` - Contact page
- `/app/algemene-voorwaarden/page.tsx` - Terms page
- `/app/disclaimer/page.tsx` - Disclaimer page
- `/app/booking/page.tsx` - Booking widget page

### Key Directories

- `/app/components/` - Reusable React components (Header, Footer, Hero, etc.)
- `/app/lib/` - Utilities and configuration
  - `config.ts` - Central content configuration (see Content Management below)
  - `types.ts` - TypeScript type definitions
  - `utils.ts` - Utility functions (cn, formatPhone, scrollToElement)
- `/public/images/` - Static images and assets
- `/data/` - JSON data files for editable content

## Content Management

All editable business content is centralized in `/app/lib/config.ts`. This is the primary file for content updates:

- Business info: `specialistsCount`, `openingHours`, `phone`
- Location details: addresses, phone numbers, emails, Google Maps URLs
- Salonized widget URLs for booking integration
- Navigation items
- Page content for waxing info, careers, and contact pages

**Example content update:**

```typescript
// In /app/lib/config.ts
business: {
  specialistsCount: "25+",     // Update specialist count
  openingHours: "10:00 - 21:00", // Update hours
  phone: "+31 (0)70 799 00 50",
}
```

## Design System

### Colors (Tailwind Config)

- **Primary Blue**: `#2563eb` (primary-600) - buttons, links, accents
- **Dark Blue**: `#1e40af` (primary-800) - hover states
- **Secondary Grays**: slate scale for text/backgrounds

### Typography

- **Headings**: Playfair Display (serif) via CSS variable `--font-playfair`
- **Body**: Lato (sans-serif) via CSS variable `--font-lato`
- Configured in `tailwind.config.ts` and loaded in `layout.tsx`

### Animations

Framer Motion is used for scroll-triggered and hover animations. Common patterns:

- `whileInView` with `viewport={{ once: true }}` for scroll animations
- `initial={{ opacity: 0, y: 20 }}` to `animate={{ opacity: 1, y: 0 }}` for fade-up effects
- `transition={{ duration: 0.6, ease: "easeOut" }}` for smooth timing

## Salonized Booking Integration

The booking system uses Salonized widgets embedded via iframes:

- Amsterdam widget URL: stored in `config.ts` locations.amsterdam.widgetUrl
- The Hague widget URL: stored in `config.ts` locations.theHague.widgetUrl
- Location selector toggle implemented in `AppointmentSection.tsx`

## Component Patterns

### Page Sections

Page sections are components that compose the landing page:

- `Hero.tsx` - Full-screen hero with background image
- `FeaturesSection.tsx` - Feature grid with icons
- `LocationsSection.tsx` - Location cards with contact info
- `TestimonialsSection.tsx` - Customer reviews
- `AppointmentSection.tsx` - Booking widget with location toggle

### Layout Components

- `Header.tsx` - Fixed navigation with mobile hamburger menu
- `Footer.tsx` - Multi-column footer with location details
- `ScrollToTop.tsx` - Floating scroll-to-top button

## Styling Conventions

- Tailwind CSS classes used exclusively
- Custom animations defined in `globals.css`
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Path alias `@/*` maps to root directory (configured in `tsconfig.json`)

## TypeScript Configuration

- Path alias: `@/*` resolves to `./*`
- Strict mode enabled
- Next.js plugin for type checking

## External Services

- **Salonized**: Booking widget integration (iframe-based)
- **Google Fonts**: Playfair Display and Lato loaded via next/font/google
- **Google Maps**: Location directions via maps.app.goo.gl URLs

## Build Output

Static export not configured. Production builds run as Node.js server with `npm start`.

## General advice

Always update this file with your most recent learnings so it's always up to date!
