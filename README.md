# J P Jewellers

A premium portfolio e-commerce website concept for J P Jewellers in Rajkot, India. This is a concept project, not an official business website.

## Objectives

- Present the brand and jewellery in a refined, easy-to-browse experience.
- Support product discovery and a frontend-only shopping demo.
- Provide clear contact and location information.

## Pages

The site has five original pages and a supporting demo-order-history page:

1. Home
2. Shop
3. Categories
4. About Us
5. Contact Us
6. My Orders (frontend demo history)

Product details, wishlist, cart and demo checkout are supporting experiences, not additional main pages.

## Design direction

Use a premium royal Indian jewellery aesthetic: ivory, warm cream, espresso brown, champagne gold and soft beige, with elegant typography, refined product cards, subtle motion and responsive layouts. Do not use blue or green. Keep the presentation polished and image-led without excessive empty space, gradients or artificial-looking gold effects.

## Technology

- React
- Vite
- Tailwind CSS

The planned experience is a dynamic frontend demo using local sample product data and frontend state. It has no backend, database, authentication service, paid APIs or real payment processing.

## Frontend functionality

- Browse products and categories; view product details.
- Add and remove items from a wishlist and cart, and update cart quantities.
- Demonstrate a frontend-only checkout flow without placing real orders or payments.
- Navigate the five main pages and view the supplied contact details.

The frontend includes fictional sample products with illustrative demo prices, search and category filtering, a wishlist, a shopping bag, quantity controls, a validated demo checkout, and browser-local demo order history. The checkout and Contact form do not submit data to a service; no real orders, payments, emails, delivery, or tracking are supported.

Shipping, delivery, return, and availability terms are not configured. Confirm real terms directly with the showroom.

## Business contact details

- Phone: +91 281 222 7122
- Mobile: +91 93285 91000
- Address: Palace Road, opposite Ashapura Temple, Prahlad Plot / Panna Manek, Rajkot – 360001, Gujarat, India
- Hours: Monday–Saturday, 10:00 AM–7:30 PM; Sunday closed
- Instagram: @jpjewellersrajkot
- Facebook: JP Jewellers Rajkot

## Local setup

After the project application and its `package.json` have been created, run these commands from the application directory:

```bash
npm ci
npm run dev
```

For a production build and local preview:

```bash
npm run build
npm run preview
```

## GitHub and Vercel deployment

For a new GitHub repository, from this project directory:

```bash
git init -b main
git add .
git commit -m "Prepare J P Jewellers frontend demo"
git remote add origin https://github.com/<YOUR-ACCOUNT>/<YOUR-REPOSITORY>.git
git push -u origin main
```

In Vercel, choose **Add New → Project**, import that GitHub repository, and use:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required
- Node.js: **20.19+** or **22.12+** (Vite 7 requirement; use Node 22.x in Vercel)

The app uses hash-based navigation (`/#shop`, `/#categories`, etc.), so the static Vite deployment does not require SPA path rewrites. Vite copies `public/robots.txt` into `dist/robots.txt`. Product photography is requested from Unsplash and web fonts from Google Fonts at runtime; the interface has image fallbacks, but those remote assets require a visitor network connection.

Deploy, then attach the intended production domain in Vercel. Configure the canonical URL and a sitemap only after that hostname is confirmed. Hash-based pages are not separate path URLs for search crawlers; use prerendering or path routes with Vercel rewrites if per-page organic indexing is required.

## Asset guidelines

Use supplied jewellery images and visual references as the source of truth. Preserve accurate product appearance; do not substitute unrelated imagery or imply unverified details. Use appropriately sized, optimized images and descriptive alt text.

## Project status

The React, Vite and Tailwind CSS frontend is a concept, not an official business website. Product names, materials, descriptions, images, and prices are illustrative only and are not verified J P Jewellers inventory or offers. Confirm business information and current terms with the showroom.
