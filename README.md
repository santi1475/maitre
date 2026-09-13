# Maitre · Campomar V3 Landing Page

<!-- <p align="center">
  <img src="/favicon.svg" alt="Campomar V3 icon" width="128" style="border-radius: 12px;">
</p> -->
<!-- 
<h1 align="center">Maitre</h1> -->

<p align="center">
  <strong>Campomar V3 product landing page</strong><br>
  A modern Astro experience that presents a restaurant operations platform with real-time control, auditability, pricing logic, and multi-branch readiness.
</p>

---

## ✨ Overview

Maitre is the marketing and product landing page for Campomar V3, a restaurant management system designed around speed, operational clarity, and real-time consistency.

The site is built to communicate the product clearly, with a polished visual language and modular content blocks that explain the platform from business value down to technical foundations.

---

## 🚀 Key Features

- **Real-time operations** — highlights live updates across tables, orders, and kitchen workflows.
- **Product storytelling** — structured sections explain the platform by value, not just by features.
- **Modular UI composition** — reusable Astro and React sections keep the landing easy to evolve.
- **Modern frontend stack** — Astro, React, TypeScript, Tailwind CSS v4, shadcn/ui, Lucide, motion, and Lenis.
- **Premium visual treatment** — typography, spacing, and motion are tuned for a product-level presentation.
- **Technical alignment** — the content is grounded in the system analysis documented in [sistema-analisis-tecnico.md](sistema-analisis-tecnico.md).

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Then open the local URL shown by Astro in your terminal.

You can also use the other package managers supported by the project:

```bash
pnpm install
pnpm dev

yarn install
yarn dev

bun install
bun run dev
```

---

## 🏗 Project Structure

The landing page is organized around a single Astro route and modular React sections with Magic UI components.

```text
src/
├── components/
│   ├── landing/
│   │   ├── Navbar.tsx         # Fixed navigation with responsive drawer & scroll lock
│   │   ├── Hero.tsx           # Hero section, ShimmerButton, live sync bar & NumberTicker
│   │   ├── Mockups.tsx        # Interactive tabbed interface for system preview
│   │   ├── Roles.tsx          # Asymmetric Bento grid (Dueño, Mozo, Cocina, Caja)
│   │   ├── Flujo.tsx          # Real-time station sync with Magic UI AnimatedBeam
│   │   ├── Testimonios.tsx    # 3D infinite marquee wall with periphery blur
│   │   ├── Precios.tsx        # Monthly/Annual pricing (-20%), BorderBeam & ShimmerButton
│   │   ├── FAQ.tsx            # Accessible accordion resolving commercial objections
│   │   ├── CTAFinal.tsx       # Conversion closer with ShimmerButton & trust badges
│   │   ├── Footer.tsx         # Semantic links, contact info, and legal notes
│   │   ├── fx/                # GlowOrbs and WaveBackground atmospheric effects
│   │   └── mockups/           # 100% interactive tactile system demos:
│   │       ├── MesasMockup.tsx    # Live table status switcher
│   │       ├── ComandasMockup.tsx # Dish prep status toggles with live counters
│   │       ├── CocinaMockup.tsx   # KDS kitchen board simulation
│   │       └── CajaMockup.tsx     # 1-click cash close audit test
│   └── ui/                    # Magic UI & design system primitives:
│       ├── animated-beam.tsx  # Dynamic bezier SVG connector with ResizeObserver
│       ├── blur-fade.tsx      # Staggered progressive viewport reveal
│       ├── border-beam.tsx    # Animated conic-gradient perimeter beam
│       ├── marquee.tsx        # Infinite smooth ticker animation
│       ├── number-ticker.tsx  # Viewport-triggered animated metric counters
│       ├── shimmer-button.tsx # Polymorphic high-conversion button with shimmer
│       └── silk-background.tsx# Procedural flowing mesh background
├── layouts/
│   └── Layout.astro           # HTML5 shell, OpenGraph, JSON-LD Schema & viewport
├── pages/
│   └── index.astro            # Main page composition with selective hydration
└── styles/
    └── globals.css            # Tailwind CSS v4 design tokens and keyframes
```

### Main entry points

- [src/pages/index.astro](src/pages/index.astro) composes the full landing page.
- [src/layouts/Layout.astro](src/layouts/Layout.astro) sets the page shell, metadata, OpenGraph, and Schema.org JSON-LD.
- [src/styles/globals.css](src/styles/globals.css) contains the global visual tokens and keyframe animations.

---

## 🎯 Content Flow

The page is structured as an intentional narrative sequence:

1. **Hero**: Core value proposition, live operational sync status, and Magic UI ShimmerButton CTA.
2. **Interactive Mockups**: Tactile, clickable preview of Tables, Orders, Kitchen KDS, and Cash Close.
3. **Roles Bento Grid**: Asymmetric value hierarchy tailored for Owners, Waiters, Kitchen, and Cashiers.
4. **Flujo de Operaciones**: Live connected architecture diagram with `AnimatedBeam` showing zero-latency ticket dispatch.
5. **Testimonios**: 3D perspective wall featuring real restaurant owners across Peru.
6. **Precios**: Transparent pricing with Monthly/Annual discount calculation (-20%) and WhatsApp activation links.
7. **FAQ**: Accessible 6-item accordion answering operational and fiscal (SUNAT) objections.
8. **Final CTA & Footer**: High-conversion trial closer and comprehensive navigation.

---

## 🧩 Components

The landing is assembled from focused sections that each handle one part of the story:

- [src/components/landing/Hero.tsx](src/components/landing/Hero.tsx) introduces the platform with live sync feedback.
- [src/components/landing/Mockups.tsx](src/components/landing/Mockups.tsx) renders the interactive restaurant simulator.
- [src/components/landing/Roles.tsx](src/components/landing/Roles.tsx) explains benefits by operational role in a Bento grid.
- [src/components/landing/Flujo.tsx](src/components/landing/Flujo.tsx) demonstrates data flow using `AnimatedBeam`.
- [src/components/landing/Testimonios.tsx](src/components/landing/Testimonios.tsx) provides social proof with infinite marquee.
- [src/components/landing/Precios.tsx](src/components/landing/Precios.tsx) displays plans with BorderBeam and billing toggle.
- [src/components/landing/FAQ.tsx](src/components/landing/FAQ.tsx) clarifies questions and handles objections.
- [src/components/landing/CTAFinal.tsx](src/components/landing/CTAFinal.tsx) closes the conversion funnel.

---

## 🎨 Design Principles

The visual language aims to feel intentional and premium:

- Clear hierarchy and generous spacing.
- Strong typography with a product-focused tone.
- Subtle motion instead of heavy animation noise.
- Background treatment that avoids a flat template look.
- Responsive behavior that works well on desktop and mobile.

The goal is to make the product feel established and production-ready at first glance.

---

## 🧠 Technical Context

Campomar V3 is documented in [sistema-analisis-tecnico.md](sistema-analisis-tecnico.md), which describes the operational system behind the landing page.

That analysis covers the broader product foundation, including:

- real-time order and table workflows,
- kitchen and admin operations,
- pricing rules,
- audit trails,
- idempotency,
- and the state-driven behavior of the system.

This README focuses on the landing page that communicates that product.

---

## 🛠 Development

Available scripts:

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run typecheck
```

Recommended workflow:

1. Start the local dev server with `npm run dev`.
2. Review the landing page in the browser.
3. Run `npm run lint` and `npm run typecheck` before publishing changes.
4. Build with `npm run build` to confirm the production output.

---

## 📦 Stack

- Astro 6
- React 19.2.6
- TypeScript 6
- Tailwind CSS 4.2
- shadcn/ui
- Lucide React
- motion 12.40
- Lenis
- Radix UI primitives

---

## 🚢 Deployment

This project can be deployed as a static Astro site on any platform that supports modern frontend builds.

Typical deployment flow:

1. Install dependencies.
2. Run the production build.
3. Publish the generated output according to your hosting provider.

---

## 📄 License

See [LICENCE.md](LICENCE.md) for the project license.