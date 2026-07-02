# Tattoo Artist Portfolio

A production-ready portfolio and shop for a tattoo artist + painter. Built with [Astro](https://astro.build), deployed on Vercel. Content is managed via Markdown files — no CMS, no database.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4 |
| Hosting | Vercel (free tier) |
| Forms | Formspree (free tier) |
| Content | Markdown + Astro Content Collections |
| Styles | Vanilla CSS (custom design system) |
| Fonts | Space Grotesk + Bebas Neue (Google Fonts) |

---

## First-Time Setup

### 1. Install dependencies

```bash
cd tattoo-portfolio
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

**Formspree setup** (free at [formspree.io](https://formspree.io)):
1. Create a free account
2. Create three separate forms: Booking, Contact, Inquiry
3. Paste each form's ID into `.env`:

```env
PUBLIC_FORMSPREE_BOOKING=xxxxxxxxxxx
PUBLIC_FORMSPREE_CONTACT=xxxxxxxxxxx
PUBLIC_FORMSPREE_INQUIRY=xxxxxxxxxxx
```

The form IDs are the alphanumeric string in your Formspree dashboard URL (e.g. `https://formspree.io/f/xxxxxxxxxxx`).

### 3. Run locally

```bash
npm run dev
```

Open `http://localhost:4321`.

---

## Deployment to Vercel

### First deploy

```bash
npm install -g vercel
vercel
```

Follow the prompts. Choose the `tattoo-portfolio` directory as the root.

### Environment variables on Vercel

In the Vercel dashboard → your project → Settings → Environment Variables, add:

```
PUBLIC_FORMSPREE_BOOKING   = your_id
PUBLIC_FORMSPREE_CONTACT   = your_id
PUBLIC_FORMSPREE_INQUIRY   = your_id
```

### Auto-deploy on push

Once connected to GitHub, Vercel auto-deploys on every push to `main`. Just push and you're live.

---

## Adding Content

### Add a new painting

1. Create a file in `src/content/paintings/your-painting-slug.md`
2. Use this frontmatter template:

```yaml
---
title: "Title Here"
series: "Series Name"       # optional
year: 2024
medium: "Acrylic on Canvas"
size: "24\" × 36\""
price: 2500
sold: false
image: "/images/paintings/your-image.jpg"
featured: false              # shows on homepage if true
description: "One-sentence description for SEO and cards."
---

Optional longer body text here. Supports markdown formatting.
Appears on the individual painting detail page.
```

3. Add the image to `public/images/paintings/`
4. Push to GitHub → Vercel auto-deploys

### Add a new tattoo

1. Create a file in `src/content/tattoos/your-tattoo-slug.md`

```yaml
---
title: "Design Name"
style: "Geometric / Blackwork"
date: "2024-06-15"
image: "/images/tattoos/your-image.jpg"
featured: false
description: "Optional description shown on hover."
---
```

2. Add image to `public/images/tattoos/`
3. Push → auto-deploy

---

## Image Guidelines

| Directory | Use | Recommended size |
|---|---|---|
| `public/images/paintings/` | Painting photos | 1200×1500px (4:5) |
| `public/images/tattoos/` | Tattoo photos | 1200×1500px (4:5) |
| `public/images/studio/` | Studio + artist photos | Various |

- Format: JPG (photos), PNG (if transparency needed)
- Keep files under 500KB — compress with [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com)
- Use descriptive filenames: `void-garden.jpg` not `IMG_4523.jpg`

---

## Customisation

### Update artist name / branding

Search for `Ink & Canvas` and `INK` in the codebase and replace with your studio name.

### Update contact info

- Email: search for `studio@youremail.com`
- Instagram: search for `https://instagram.com` — replace with your URL and `@yourhandle`
- Address: `src/components/Footer.astro` and `src/pages/about.astro`
- Studio hours: `src/pages/contact.astro`

### Update site URL

In `astro.config.mjs`, set `site` to your Vercel domain:

```js
site: 'https://your-actual-domain.vercel.app',
```

### Change accent colours

All colours are CSS variables in `src/styles/global.css`:

```css
--purple: #6C3CE1;
--cyan:   #00D4FF;
--pink:   #FF6B9D;
```

---

## Project Structure

```
tattoo-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── paintings/      ← Add painting images here
│       ├── tattoos/        ← Add tattoo images here
│       └── studio/         ← Artist portrait + studio photos
├── src/
│   ├── content/
│   │   ├── config.ts       ← Content collection schemas
│   │   ├── paintings/      ← One .md per painting
│   │   └── tattoos/        ← One .md per tattoo
│   ├── layouts/
│   │   └── Layout.astro    ← Base HTML layout
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── PaintingCard.astro
│   │   ├── TattooCard.astro
│   │   └── Lightbox.astro
│   ├── pages/
│   │   ├── index.astro         → /
│   │   ├── about.astro         → /about
│   │   ├── booking.astro       → /booking
│   │   ├── contact.astro       → /contact
│   │   ├── inquiry.astro       → /inquiry
│   │   ├── faq.astro           → /faq
│   │   ├── thank-you.astro     → /thank-you
│   │   ├── shop.astro          → /shop
│   │   ├── shop/[slug].astro   → /shop/:slug  (individual painting)
│   │   ├── gallery/
│   │   │   ├── tattoos.astro   → /gallery/tattoos
│   │   │   └── paintings.astro → /gallery/paintings
│   └── styles/
│       └── global.css
├── .env.example
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Forms

All forms use [Formspree](https://formspree.io) — no server-side code required.

| Form | Page | Env var |
|---|---|---|
| Booking | `/booking` | `PUBLIC_FORMSPREE_BOOKING` |
| Inquiry | `/inquiry` | `PUBLIC_FORMSPREE_INQUIRY` |
| Contact | `/contact` | `PUBLIC_FORMSPREE_CONTACT` |

After submission, users are redirected to `/thank-you?type=booking` (or `inquiry`/`contact`).

Formspree free tier: **50 submissions/month**. Upgrade to Gold ($10/mo) for unlimited + file uploads.

---

## Local Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site
npm run preview  # Preview production build locally
```
