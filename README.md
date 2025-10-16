# ElixCode-Style QR Menu (Next.js + Tailwind + TypeScript)

This is a pure-frontend QR menu site inspired by the **ElixCode** template. It uses **Next.js App Router**, **Tailwind CSS**, **React**, and **TypeScript**. All dynamic content (restaurant info, promotions, menu items) is pulled from a single JSON file: `data/data.json`.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Edit Content

- Update everything in **`data/data.json`**. Change restaurant name, phone, social links, promotions, and menu items (categories, names, descriptions, prices, ingredients, images).
- Place images under **`public/images/`** and reference them in the JSON (e.g., `/images/pizza.jpg`).

## Features

- ElixCode-like layout & colors (warm orange on dark).
- Mobile-first and responsive.
- Category filter and item modal (no external UI libs).
- SEO-friendly (metadata, OpenGraph, robots, sitemap).
- Google Maps embed using your `restaurantInfo.location`.
- Downloadable QR image.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- No backend / database

## Notes

- The QR code in `data/data.json` points to `/images/qr-code.png`. Replace that file with a real QR that points to your production URL.
- `app/sitemap.ts` and `public/robots.txt` include a placeholder domain `https://example.com`. Change it to your domain for production.
