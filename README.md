# Olive Clone

## Project Description

Olive Clone is a frontend replication of [oliveapp.com](https://www.oliveapp.com), built as a production-level UI project using Next.js 14 with the App Router. The application replicates the marketing website of Olive, a food scanner app that helps families identify harmful ingredients in grocery products.

The purpose of this project is to demonstrate advanced frontend development skills including component architecture, responsive design, CSS animations, scroll-based interactions, and SEO-optimised metadata — all without relying on a CSS framework.

**Key functionality includes:**

- A sticky navigation bar with multi-level dropdown menus and a mobile-responsive hamburger menu
- A hero section featuring an animated phone mockup with an auto-cycling product carousel
- A "How It Works" section with intersection observer-based scroll animations
- Full SEO metadata including Open Graph and Twitter Card tags
- Optimised image handling via Next.js Image component with remote pattern configuration

---

## Live Demo

[https://your-vercel-deployment-link.vercel.app](https://your-vercel-deployment-link.vercel.app)

---

## GitHub Repository

[https://github.com/shoryataneja/olive-clone-ns](https://github.com/shoryataneja/olive-clone-ns)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework with App Router |
| React 18 | UI component library |
| JavaScript (ES6+) | Application logic |
| CSS (Plain CSS Modules) | Styling and animations |
| Google Fonts | DM Sans and DM Serif Display typefaces |
| Framer Motion | Animation library (installed) |
| Lucide React | Icon library (installed) |
| Vercel | Deployment platform |

---

## Features

- Sticky navbar with scroll-aware background blur and shadow transition
- Dropdown menus for Solutions, Blog, and Food categories with hover interactions
- Mobile navigation menu with toggle open/close state
- Hero section with trust badge, avatar stack, and iOS download CTA
- Animated phone mockup with auto-cycling product cards every 3 seconds
- Ghost side images flanking the phone for depth effect
- Dot indicators synced to the active product slide
- "How It Works" three-card layout with staggered entrance animations on scroll
- Scan animation with animated line and corner bracket overlays
- Safe-to-consume badge with fade-in transition
- Insights image grid with sequential reveal animation
- Intersection Observer hook for triggering animations only when in viewport
- SEO-optimised metadata with Open Graph and Twitter Card support
- Sitemap generation via Next.js sitemap.js
- Custom 404 page
- Fully responsive layout across desktop, tablet, and mobile breakpoints
- No external CSS framework — all styles written in plain CSS

---

## Installation and Setup

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/shoryataneja/olive-clone-ns.git
```

**2. Navigate to the project directory**

```bash
cd olive-clone-ns
```

**3. Install dependencies**

```bash
npm install
```

**4. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

This project does not require any environment variables for local development. No `.env` file is needed.

If you extend the project with backend services or API keys, create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=<your-api-url>
```

---

## Folder Structure

```
olive-clone-ns/
├── app/
│   ├── globals.css        # Global styles, CSS variables, utility classes
│   ├── layout.js          # Root layout with metadata and font imports
│   ├── page.js            # Home page — assembles all sections
│   ├── not-found.js       # Custom 404 page
│   └── sitemap.js         # Auto-generated sitemap for SEO
├── components/
│   ├── Navbar.jsx         # Sticky navigation with dropdowns
│   ├── Navbar.css         # Navbar styles
│   ├── Hero.jsx           # Hero section with phone mockup carousel
│   ├── Hero.css           # Hero styles and animations
│   ├── HowItWorks.jsx     # Three-card how it works section
│   └── HowItWorks.css     # Scroll animation styles
├── public/
│   ├── images/
│   │   ├── olive-logo.png # Olive brand logo
│   │   └── scan-product.png
│   └── robots.txt
├── next.config.js         # Next.js configuration with image remote patterns
├── jsconfig.json          # Path alias configuration (@/*)
└── package.json
```

---

## Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts the local development server at port 3000 |
| Build | `npm run build` | Creates an optimised production build |
| Start | `npm start` | Runs the production build locally |

---

## Deployment

This project is deployed on [Vercel](https://vercel.com), the recommended platform for Next.js applications.

**To deploy your own instance:**

1. Push the repository to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure the build settings
4. Click Deploy — no additional configuration is required

Every push to the `main` branch triggers an automatic redeployment.

---

## Challenges and Learnings

- **Animated phone carousel without a library** — The product carousel inside the phone mockup was built using React state and CSS transitions only, avoiding any carousel library to keep the bundle lean.
- **Scroll animations without a library** — Intersection Observer was implemented as a custom hook to trigger CSS class-based animations, avoiding the need for Framer Motion for this use case.
- **Dropdown positioning** — Aligning multi-column dropdowns (Solutions, Blog, Food) correctly across different viewport widths required careful use of absolute positioning and transform offsets.
- **Git repository structure** — The project required initialising a clean git repository inside the project folder after discovering the home directory was inadvertently tracked as a git root.

---

## Future Improvements

- Add remaining page sections: Features, Pricing, Testimonials, and Footer
- Implement smooth page transitions using Framer Motion
- Add a working contact or waitlist form with form validation
- Integrate a CMS (e.g., Sanity or Contentful) for blog content
- Add unit and integration tests using Jest and React Testing Library
- Improve accessibility with ARIA labels and keyboard navigation support
- Add dark mode support using CSS custom properties
