# ElixCode Restaurant Menu — Next.js App Router + Tailwind CSS + TypeScript

A modern, **fully client-side** digital restaurant menu inspired by **Feane** (layout/visual vibe) with content sections influenced by **KOPPEE** (Story, Vision, Beans) and **ElixCode** (hero copy, Hot Deals, QR section). Customers scan a QR code at the table to browse categories (Pizza, Burgers, Drinks, etc.), view item details in a modal, and quickly access contact info and location. Content is **JSON-driven**—no backend or database required.

> **Developed by:** **Faraz Aghababayi** — [LinkedIn](https://www.linkedin.com/in/farazaghababayi)

---

## ✨ Key Features

- **Feane-inspired UI** with warm, food-friendly palette (oranges, dark backgrounds) and clean typography.
- **Multi-Page App** using **Next.js App Router**:

  - `/` (Home: Hero → Hot Deals → Our Menu → About → Story/Vision/Beans → Contact → QR)
  - `/menu` (category index)
  - `/menu/[category]` (category landing with a **Back to Menu** button)
  - `/about`
  - `/contact`

- **JSON-driven content** (`data/data.json`): update restaurant info, promotions, and menu items without touching code.
- **Menu filtering** + **modal details** (price, description, ingredients).
- **Client-side QR code** generation (via `qrcode.react`) targeting `https://restaurant.elixflare.com`, with a **Download QR** button (saves a PNG).
- **Responsive & accessible**: mobile-first layout, semantic HTML, alt text, focusable controls.
- **SEO-ready**:

  - `app/layout.tsx` metadata (title, description, OG/Twitter tags, canonical)
  - `app/sitemap.ts` dynamic sitemap entries for categories
  - `public/robots.txt` and `public/sitemap.xml`
  - Optional Google verification meta via env var

- **Animations**: tasteful on-scroll reveals via **framer-motion** (properly confined to Client Components).
- **No external UI libraries**—pure Tailwind CSS components.

---

## 🧱 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **framer-motion** (scroll animations, Client Components only)
- **qrcode.react** (client-side QR generation)
- **next/image** (local image optimization)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **pnpm** or **yarn**

### Install & Run

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Build & Start (production)

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
app/
  layout.tsx           # Global metadata, fonts, shell
  page.tsx             # Home composition
  sitemap.ts           # Dynamic sitemap entries (includes category pages)
  globals.css          # Tailwind layers + theme helpers
  about/page.tsx
  contact/page.tsx
  menu/page.tsx        # Category index
  menu/[category]/page.tsx
components/
  Header.tsx           # Sticky header + mobile drawer
  Footer.tsx
  Hero.tsx             # "Delicious Food For Every Mood"
  Promotions.tsx       # "Hot Deals" cards
  MenuSection.tsx      # Filter + grid
  CategoryFilter.tsx   # Filter pills
  MenuGrid.tsx         # Cards + modal trigger
  ItemModal.tsx        # Menu item details
  About.tsx            # "We Are ElixCode"
  StoryVisionBeans.tsx # "Our Story", "Our Vision", "Fresh & Organic Beans"
  ContactSection.tsx   # phone, WhatsApp, IG, email, opening hours + map
  QRSection.tsx        # Client-side QR + Download
data/
  data.json            # Single source of truth (restaurant, promotions, items)
lib/
  data.ts              # Typed import of JSON
types/
  types.ts             # TypeScript interfaces
public/
  robots.txt
  sitemap.xml
  images/              # Product/hero images (local)
  icon-restaurant-R.svg         # Social share image (valid PNG)
app/icon-restaurant-R.svg           # App icon (valid PNG)
tailwind.config.ts
next.config.mjs
tsconfig.json
```

---

## 🧩 Content Management (JSON-Driven)

All dynamic data lives in `data/data.json`. Example snippet:

```json
{
  "restaurantInfo": {
    "name": "ElixCode Restaurant",
    "phone": "+1234567890",
    "whatsapp": "+1234567890",
    "instagram": "https://instagram.com/elixcode",
    "location": "123 Main St, City, Country",
    "email": "info@elixcode.com",
    "qrCodeUrl": "/images/qr-code.png",
    "openingHours": "Mon–Sun: 9:00 – 22:00",
    "siteUrl": "https://restaurant.elixflare.com",
    "heroTagline": "Delicious Food For Every Mood",
    "heroCta": "Order Now",
    "story": "Our Story: ...",
    "vision": "Our Vision: ...",
    "beans": "Fresh & Organic Beans: ..."
  },
  "promotions": [
    {
      "title": "Tasty Thursdays",
      "description": "20% off on all Burgers every Thursday",
      "day": "Thursday",
      "discount": "20% OFF"
    }
  ],
  "menuItems": [
    {
      "category": "Pizza",
      "name": "Delicious Pizza",
      "description": "Tomato, mozzarella, pepperoni — crispy & cheesy.",
      "image": "/images/pizza.jpg",
      "price": "$15.99",
      "ingredients": ["Tomato sauce", "Cheese", "Pepperoni"]
    }
  ]
}
```

**Notes**

- **Categories**: add any category by setting `menuItems[].category`. The homepage filter, `/menu` index, and dynamic sitemap will pick it up automatically.
- **Images**: place files in `public/images` and reference by path (e.g., `/images/pizza.jpg`).
- **Site URL**: `restaurantInfo.siteUrl` powers SEO metadata and the QR code target.

---

## 🔍 SEO & Social

- **Metadata** configured in `app/layout.tsx` (uses `restaurantInfo.siteUrl`).
- **Open Graph** & **Twitter Card** (large image) support with `public/icon-restaurant-R.svg`.
- **Canonical links** set per-page; category pages get dedicated OG and canonical metadata.
- **Sitemap**

  - Static base map: `public/sitemap.xml`
  - Dynamic map: `app/sitemap.ts` (includes routes for categories found in JSON)

- **robots.txt** in `public/robots.txt`
- **Google Site Verification** (optional):

  ```bash
  # .env (or env var in hosting)
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-google-token"
  ```

---

## 🧾 QR Code Section

- Implemented in `components/QRSection.tsx` using **qrcode.react**.
- **Download PNG** button exports canvas content—perfect for table stickers/printouts.
- **Responsive fix** (already applied): render with a large internal `size` (quality) but with responsive `style={{ width: '100%', height: 'auto' }}` so it scales on mobile.

---

## 🧠 Accessibility

- Semantic tags for sections and headings (H1/H2 structure).
- Alt text for images.
- Keyboard-focusable buttons and links.
- High contrast on key UI elements.

---

## ⚙️ Configuration & Customization

- **Theme**: tweak colors, shadows, and spacing via `tailwind.config.ts` and utility classes.
- **Typography**: Google fonts wired in `app/layout.tsx` (Poppins, Dancing Script).
- **Animations**: Powered by `framer-motion`. All animated components are **Client Components** (contain `"use client"`).
- **No external UI kits**: Buttons, cards, badges are Tailwind utilities.

---

## 🧪 Common Issues & Fixes

- **Framer Motion in Server Components**
  If you import `framer-motion` in a Server Component, you’ll see errors like `createContext is not a function`.
  **Fix**: Ensure files using `framer-motion` start with `"use client"`.

- **Invalid metadata images**
  `app/icon-restaurant-R.svg` and `public/icon-restaurant-R.svg` must be **valid PNGs** (non-empty, correct format). If you swap them, keep them valid.

- **Remote images**
  This project uses **local** images. If you later load remote images via `next/image`, add the host to `images.remotePatterns` in `next.config.mjs`.

---

## 📦 Deployment

- Works great on **Vercel**, **Netlify**, or any Node host.
- Ensure your production domain matches `restaurantInfo.siteUrl` in `data/data.json` (affects OG/canonical/sitemap).
- If using environment vars (Google verification), set them in your hosting dashboard.

---

## 🗺️ Roadmap Ideas (Optional)

- i18n (multi-language menus).
- Static export for truly serverless hosting.
- Simple client-side cart (no checkout) for waiter-assisted orders.
- Light/Dark accent toggles or seasonal themes.

---

## 🙌 Credits

- Visual inspiration: **Feane** template (layout/hero/menu vibe).
- Content sections nod: **KOPPEE** (Our Story, Vision, Beans).
- Copy/structure enhancements: **ElixCode** concepts.

---

## 👤 Author

**Developed by:** **Faraz Aghababayi**
**LinkedIn:** [www.linkedin.com/in/farazaghababayi](https://www.linkedin.com/in/farazaghababayi)

---

## 📝 License

Choose a license that fits your use case (e.g., MIT). If unsure, keep it private for internal/business use.
