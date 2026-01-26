# LadyWax - Premium Waxing Salon Website

A modern, elegant website for LadyWax - a ladies-only waxing salon with locations in Amsterdam and The Hague.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Content Management**: Custom admin panel (simple JSON-based editing)

## Project Structure

```
/app
  /components    - Reusable React components
  /lib          - Utilities and configuration
  /[routes]     - Page routes (home, prices, contact, etc.)
/public
  /images       - Images and media assets
  /fonts        - Custom fonts (if needed)
/data           - Editable content (JSON files for admin panel)
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Features

- ✅ **Landing Page**: Modern hero section with call-to-action buttons
- ✅ **Features Section**: Highlights of what makes LadyWax special
- ✅ **Locations**: Beautiful cards for both Amsterdam and The Hague salons
- ✅ **Testimonials**: Customer reviews and trust badges
- ✅ **Appointment Booking**: Integrated Salonized widget with location selector
- ✅ **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- ✅ **Smooth Animations**: Framer Motion for elegant transitions
- ✅ **SEO Optimized**: Proper meta tags and structure
- ✅ **Accessibility**: ARIA labels and keyboard navigation
- ⏳ Price list page with service categories
- ⏳ Waxing information page
- ⏳ Vacancies page
- ⏳ Contact page with location details
- ⏳ Custom admin panel for content editing

## Components

### Core Components

- **Header**: Fixed navigation with mobile menu and smooth scroll
- **Hero**: Full-screen hero with background image and CTAs
- **FeaturesSection**: Grid of 6 key features with icons
- **LocationsSection**: Interactive cards for both locations
- **TestimonialsSection**: Customer reviews with ratings
- **AppointmentSection**: Embedded Salonized widget with location toggle
- **Footer**: Complete footer with all contact information
- **ScrollToTop**: Smooth scroll-to-top button

## Content Management

Business owners can edit key content through a simple admin panel at `/admin` including:

- Number of specialists
- Opening hours
- Tagline and descriptions
- Highlights and features
- Service descriptions

## Locations

**Amsterdam**

- Address: Overtoom 694, 1054 JT Amsterdam
- Phone: +31 (0)20 737 19 50

**The Hague**

- Address: Zuidwal aan 2-4, 2513 EE The Hague
- Phone: +31 (0)70 799 11 67

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
