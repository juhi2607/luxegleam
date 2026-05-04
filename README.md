# 💎 LuxeGleam — Luxury Jewelry E-Commerce

A premium luxury jewelry store inspired by **Joice Jewelry**, built with **React.js** and **Material UI**. Features a fully responsive design with elegant cream/gold theme, smooth animations, and a complete shopping experience.

� **Live Demo:** [luxegleam.vercel.app](https://luxegleam.vercel.app)  
� **Repository:** [github.com/juhi2607/luxegleam](https://github.com/juhi2607/luxegleam)

---

## 🖼️ Preview

| Home | Shop | Product Detail |
|------|------|----------------|
| Hero slider with gold wave animations | Category slider + sidebar filters | Joice-style layout with accordions |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js 18 | Frontend framework |
| Material UI (MUI) v5 | UI components & theming |
| Framer Motion | Animations & transitions |
| React Router DOM v6 | Client-side routing |
| Context API | Cart & Wishlist state |
| Razorpay | Payment integration (test mode) |
| Vercel | Deployment & hosting |
| GitHub | Version control |

---

## ✨ Features

### 🏠 Home Page
- **Hero Slider** — 3 slides with local jewelry images, gold wave SVG decorations, parallax effect
- **New Collection** — Mosaic grid layout (4 images + text block)
- **Service Strip** — Free shipping, 24/7 support, easy returns, secure payment
- **Promo Banners** — Wedding Rings & Luxury Watches with local assets
- **Trending Products** — 2-row grid with pagination arrows
- **Newsletter Banner** — 15% discount subscription section
- **Shop by Brands** — 10 brands in different typography styles
- **Promo Grid** — 3×2 alternating image/text cells
- **About Section** — Stats overlay, 3 pillar cards

### 🛍️ Shop Page
- **Category Image Slider** — 13 categories with local images + arrows
- **Left Sidebar** — Category list, brand filter, carat options, material checkboxes, price range slider
- **Product Grid** — 3 view modes (grid 4-col, grid 3-col, list)
- **Hover Actions** — Wishlist, quick view, compare icons
- **Sorting** — Default, price low/high, rating, name
- **Badges** — Popular, New, Sale
- **"Only on sale"** checkbox filter
- **Result count** display

### 🔍 Product Detail Page
- Breadcrumb navigation
- Product image with zoom icon
- Star rating with review count
- SKU & Category links
- Quantity selector (±)
- **Add to Cart** + **Buy Now** buttons
- Wishlist & Compare links
- Social share icons (6 platforms)
- Right panel: Product Info, Description, Features accordions
- Description section
- Related Products slider with arrows

### 🛒 Cart Page
- Table layout: Product | Price | Quantity | Subtotal | Remove
- Animated item removal
- **Coupon Code** — `LUXE10` for 10% off
- Order Summary sidebar with live totals
- Free shipping threshold notice (₹999+)
- Payment icons (VISA, MC, UPI, GPay, PayTM)
- Secure checkout badge

### � Checkout & Payment
- Shipping address form
- Razorpay test payment integration
- Order success page

### 🧭 Navigation
- **Mega Menu** — "Shop by Categories" with left sidebar (13 categories), image columns, sub-items
- **Search** — Live product search with image results dropdown
- **Wishlist** — Badge count, filled heart when items added
- **Login Dropdown** — Email/password form, Sign up link
- **About Us** — Smooth scroll to about section
- Responsive mobile drawer

### 📄 Other Pages
- **My Account** — Login & Register forms
- **Elements** — UI showcase (video/image sections, pricing tables, FAQ accordion, feature icons)

---

## 📁 Project Structure

```
src/
├── assets/          # Local images (JPG, WebP) + slider images
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── AboutSection.js
│   ├── CategoryStrip.js
│   ├── FeaturedSection.js
│   ├── NewCollectionSection.js
│   ├── NewsletterBanner.js
│   ├── PromoBanners.js
│   ├── PromoGrid.js
│   ├── ServiceStrip.js
│   ├── ShopByBrands.js
│   └── TrendingSection.js
├── context/
│   ├── CartContext.js      # Persistent cart (localStorage)
│   └── WishlistContext.js  # Wishlist state
├── data/
│   └── products.js         # 47 products with local images
├── pages/
│   ├── Home.js
│   ├── Shop.js
│   ├── ProductDetails.js
│   ├── Cart.js
│   ├── Checkout.js
│   ├── Success.js
│   ├── MyAccount.js
│   └── Elements.js
├── theme/
│   └── theme.js            # MUI light cream theme
└── utils/
    └── razorpay.js
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary (Gold) | `#C9A84C` |
| Background | `#faf8f5` (warm cream) |
| Text | `#1a1a1a` |
| Border | `#ede8e0` |
| Serif Font | Cormorant Garamond |
| Sans Font | Montserrat |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/juhi2607/luxegleam.git
cd luxegleam

# Install dependencies
npm install

# Start development server
npm start
```

App runs on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 🛒 Test the App

| Feature | How to test |
|---------|-------------|
| Coupon code | Enter `LUXE10` in cart for 10% off |
| Search | Click 🔍 in navbar, type product name |
| Category filter | Click any category in Shop page sidebar |
| Wishlist | Click ❤️ on any product card |
| Login dropdown | Click 👤 icon in navbar |

---

## 📦 Product Categories (47 products)

`Earrings` · `Rings` · `Bracelets` · `Necklaces` · `Watches` · `Pins` · `Pens` · `Gemstone` · `Gift Set` · `Sterling` · `Starfish` · `Chocker` · `Cufflinks` · `Button` · `Pocket Square`

---

## 🌐 Deployment

Deployed on **Vercel** with automatic deployments on every push to `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juhi2607/luxegleam)

---

## 👩‍💻 Developer

**Juhi** — Designed & developed with ❤️  
© 2026 LuxeGleam. All Rights Reserved.
