# AK — logo pack

## Files
- `svg/ak-mark-on-dark.svg` — full color for dark backgrounds
- `svg/ak-mark-on-light.svg` — full color for light backgrounds
- `svg/ak-mark-mono-*.svg` — single color (ink, white, `currentColor` for inline use in React)
- `svg/ak-icon-dark-*.svg` — square / rounded icon on Ink background
- `png/` — rasters 256/512/1024 px wide, avatars 512/1024
- `favicon/` — `favicon.ico` (16/32/48), `favicon.svg` (switches palette in dark mode), `apple-touch-icon.png`, `icon-192/512.png`

## Next.js (app router)
Put `favicon.ico`, `icon.svg` (= favicon.svg) and `apple-icon.png` (= apple-touch-icon.png) in `app/` — Next picks them up automatically.

## Plain HTML
```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

## Rules
- Grid: 12 units, mark = 23 × 18 units, stroke 5 units, slope 2:1
- Clear space: 5 units (one stroke) on every side
- Minimum size: 16 px tall
- Fonts: Barlow Condensed 600 uppercase +0.08em (name), Barlow 400 (tagline)
