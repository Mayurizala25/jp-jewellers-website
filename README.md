# J P Jewellers

A jewellery browsing website for J P Jewellers in Rajkot, India. It is not an official business website.

## Objectives

- Present the brand and jewellery in a refined, easy-to-browse experience.
- Support product discovery, a local wishlist and a local shopping bag.
- Provide clear contact and location information.

## Pages

The site has six main pages:

1. Home
2. Shop
3. Categories
4. About Us
5. Contact Us
6. My Orders (saved in this browser)

Product details, wishlist, cart and order saving are supporting experiences, not additional main pages.

## Design direction

Use a premium royal Indian jewellery aesthetic: ivory, warm cream, espresso brown, champagne gold and soft beige, with elegant typography, refined product cards, subtle motion and responsive layouts. Do not use blue or green. Keep the presentation polished and image-led without excessive empty space, gradients or artificial-looking gold effects.

## Technology

- React
- Vite
- Tailwind CSS

The website uses local product reference data and browser state. It has no backend, database, authentication service, paid APIs or payment processing.

## Frontend functionality

- Browse products and categories; view product details.
- Add and remove items from a wishlist and cart, and update cart quantities.
- Save order details in this browser without submitting an order or payment.
- Navigate the six main pages and view the supplied contact details.

The frontend includes jewellery design references, search and category filtering, a wishlist, a shopping bag, quantity controls, and browser-local order details. Saved order details and Contact form entries are not submitted to a service; no real orders, payments, emails, delivery, or tracking are supported. Product details, availability and current prices must be confirmed with the showroom.

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
git commit -m "Prepare J P Jewellers website"
git remote add origin https://github.com/<YOUR-ACCOUNT>/<YOUR-REPOSITORY>.git
git push -u origin main
```

In Vercel, choose **Add New → Project**, import that GitHub repository, and use:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required
- Node.js: **20.19+** or **22.12+** (Vite 7 requirement; use Node 22.x in Vercel)

The app uses hash-based navigation (`/#shop`, `/#categories`, etc.), so the static Vite deployment does not require SPA path rewrites. Vite copies `public/robots.txt` into `dist/robots.txt`. Product photography is served from local files in `public/images/jewellery`; web fonts are requested from Google Fonts at runtime and fall back to system fonts if unavailable.

Deploy, then attach the intended production domain in Vercel. Configure the canonical URL and a sitemap only after that hostname is confirmed. Hash-based pages are not separate path URLs for search crawlers; use prerendering or path routes with Vercel rewrites if per-page organic indexing is required.

## Asset guidelines

Use supplied jewellery images and visual references as the source of truth. Preserve accurate product appearance; do not substitute unrelated imagery or imply unverified details. Use appropriately sized, optimized images and descriptive alt text.

## Project status

The React and Vite frontend is not an official business website. Product names, descriptions and imagery are design references, not verified J P Jewellers inventory or offers. Confirm business information and current terms with the showroom.
