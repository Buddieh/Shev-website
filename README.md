# Shev House website

Minimal portfolio site for Shev House lamps. Plain HTML/CSS/JS, no build step, served by GitHub Pages from `main`.

- `index.html` – hero, 6-slot collection grid, studio teaser
- `product.html?p=<slug>` – product page, rendered from `assets/js/products.js`
- `about.html` – studio story
- `contact.html` – four contact options (A–D) side by side for review

## Adding a lamp

Add an entry to `assets/js/products.js` with `name`, `type`, `price`, `size`, `material`, `description`, `cover` and `images`. Web images live in `assets/img/<slug>/` at 1600 px on the long edge, JPEG quality ~80.

## Placeholders still to fill

Everything marked with a dashed amber outline on the site. Remove `show-placeholders` from `<body>` to hide the highlighting.

| Where | What |
|---|---|
| Header / favicon | Studio logo (currently a stand-in mark drawn from Miyan) |
| Miyan | Price, size, material, light (bulb/cable); review the drafted description |
| Lamps 02–06 | Name, photos, all details |
| Home | Studio intro (1–2 sentences) |
| About | Two story paragraphs (~60 words each), designer portrait (1600×2000), three process steps, workshop photo (2400×1600), visit info |
| Contact | Email, WhatsApp, Instagram, phone, booking links; choose which options A–D to keep |
| Footer | City/country, Instagram, email |
