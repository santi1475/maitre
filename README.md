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

The landing page is organized around a single route and a set of reusable sections.

```text
src/
├── components/
│   ├── Footer.astro
│   ├── Nav.astro
│   ├── react/
│   │   ├── Hero.tsx
│   │   ├── LogosMarquee.tsx
│   │   ├── Features.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── RealtimeBeam.tsx
│   │   ├── Roles.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   └── ui/
├── layouts/
│   └── main.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

### Main entry points

- [src/pages/index.astro](src/pages/index.astro) composes the full landing page.
- [src/layouts/main.astro](src/layouts/main.astro) sets the page shell, metadata, and theme bootstrap.
- [src/styles/global.css](src/styles/global.css) contains the global visual system.

---

## 🎯 Content Flow

The page is structured as a narrative sequence:

1. Hero section with the core product positioning.
2. Logo marquee and social proof.
3. Feature blocks describing the product value.
4. Before/after contrast to show operational improvement.
5. Real-time section to explain live synchronization.
6. Roles section to map the system to operational personas.
7. Metrics, testimonials, pricing, FAQ, and CTA.

This structure mirrors a high-conversion product landing rather than a generic documentation page.

---

## 🧩 Components

The landing is assembled from focused sections that each handle one part of the story.

- [src/components/react/Hero.tsx](src/components/react/Hero.tsx) introduces the product.
- [src/components/react/Features.tsx](src/components/react/Features.tsx) summarizes the main benefits.
- [src/components/react/BeforeAfter.tsx](src/components/react/BeforeAfter.tsx) shows the operational contrast.
- [src/components/react/RealtimeBeam.tsx](src/components/react/RealtimeBeam.tsx) emphasizes live behavior.
- [src/components/react/Roles.tsx](src/components/react/Roles.tsx) explains usage by role.
- [src/components/react/Stats.tsx](src/components/react/Stats.tsx) communicates measurable value.
- [src/components/react/Pricing.tsx](src/components/react/Pricing.tsx) presents the commercial angle.
- [src/components/react/FAQ.tsx](src/components/react/FAQ.tsx) resolves common questions.
- [src/components/react/CTA.tsx](src/components/react/CTA.tsx) closes the conversion flow.

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