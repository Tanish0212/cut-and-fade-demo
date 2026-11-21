# Cut And Fade Salon — demo website

A static, bilingual (English / Arabic) one-page site for a men's barbershop.
No frameworks, no build step: `index.html`, `style.css`, `script.js` and `/images`.

- Live: https://tanish0212.github.io/cut-and-fade-demo/
- Printable A5 counter poster: https://tanish0212.github.io/cut-and-fade-demo/poster.html

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure + social-sharing meta tags |
| `style.css` | All styling (mobile-first, RTL-aware) |
| `script.js` | **`SHOP` content object at the top** + page logic below it |
| `poster.html` | Printable A5 poster with an inline QR code |
| `images/` | Logo, illustrations, `og-image.jpg`, `apple-touch-icon.png` |
| `screenshots/` | Preview screenshots for showing the owner (not linked from the site) |

## Reusing the site for another shop

1. **Edit the `SHOP` object at the top of `script.js`.** Everything shown on the page comes from it:
   name, phone, links, map, hours, rating, services, reviews, and every English and Arabic text.
   - `hours.opens`: keep `null` while the opening time is unknown. The badge then says
     "Open until midnight". Once you know it, set it (e.g. `"10:00"`) and the badge becomes a live
     "Open now / Closed now" based on `timeZone`.
   - `showDemoBanner: false` removes the "Demo preview" banner.
   - JSON-LD structured data is built from `SHOP` automatically.
2. **Edit the `<head>` of `index.html`**: the `<title>`, description, and the `og:` / `twitter:` tags.
   WhatsApp and other link previews don't run JavaScript, so these must be plain text.
3. **Replace `images/og-image.jpg`** (1200×630) and `images/logo.svg` / `images/apple-touch-icon.png`.
4. **Poster:** change the text in `poster.html`. The QR code is a static inline SVG; to point it somewhere
   else, regenerate it, for example with `npx qrcode -t svg -o qr.svg "https://your-url/"`, and paste the
   `<svg>` into the `.qr-box`.

Only put **real, confirmed facts** in the content: no made-up prices, staff, years or awards.

## Swapping illustrations for real photos

Every illustration sits in a fixed-ratio frame (4:5), with `object-fit: cover`, so a photo drops straight in.

- Services: change `image` for each entry in `SHOP.services` (e.g. `"images/fade.jpg"`) and update its `alt` text.
- Hero and "Why" section: change `SHOP.images.hero` / `SHOP.images.why`.

Use portrait photos (around 1200×1500), compress them (e.g. squoosh.app, WebP/JPEG at ~75%), and keep each under 250 KB.

## Notes

- `<meta name="robots" content="noindex">` keeps the demo out of Google. Remove it when the site goes live.
- The language choice is saved in `localStorage` (if available) under `site-lang`.
- Animations switch off automatically for visitors with "reduce motion" enabled.
