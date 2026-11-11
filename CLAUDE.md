# Personal site — Anton Kulchytskyi

Brief for Claude Code. This folder starts with only two things:

- `design/index.html` — the **approved design**. Open it in a browser. It is the visual source of truth: layout, spacing, type sizes, colors and copy. Anton likes it as-is, so reproduce it faithfully and don't "improve" the look.
- `logo/` — the final AK logo pack: SVG, PNG and favicons, plus `tokens.css`. Its `README.md` has the usage rules.

Everything else is yours to create.

## Working rules

- Talk to Anton in **Ukrainian**. Code, comments and commit messages are in English.
- Work **phase by phase**, as listed below. At the end of each phase, give a short summary and **wait for Anton's confirmation** before starting the next one.
- Commits: plain conventional messages. **No AI co-author or attribution lines.**
- Keep this file current. When a decision is made or a phase is finished, update the "Status" section at the bottom.

## Goal

Build a minimalist one-page personal site with these sections: Hero, About & Skills, Selected Projects, and a footer with contacts. It should be fast, accessible and easy to edit. It needs **no client-side JavaScript**; the only exception is something genuinely required later.

## Stack

- **Astro** (latest stable), TypeScript, static output (`output: 'static'`).
- **Plain CSS** with custom properties. Take the values from `logo/tokens.css`. No Tailwind and no UI libraries.
- **Fonts self-hosted** through `@fontsource/barlow` (400, 500) and `@fontsource/barlow-condensed` (500, 600). The design file loads Google Fonts only for preview; don't ship that.
- Package manager: pnpm. If it isn't available, use npm.

## Target structure

```
src/
  layouts/Base.astro          # <html>, head/meta, fonts, global CSS
  components/
    Header.astro              # logo mark (inline SVG) + nav
    Hero.astro
    About.astro               # paragraph + skills <dl>
    Projects.astro            # list of <article>, data-driven
    Footer.astro              # contact + © + "First version · 2021"
  data/site.ts                # ALL content: name, links, skills, projects
  styles/global.css           # tokens + base styles
  pages/index.astro
public/
  favicon.ico, favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest
```

Every piece of text and every URL lives in `src/data/site.ts`, so Anton can edit content without touching the markup.

## Design spec (extracted from `design/index.html`)

- Background `#1F2022` (ink). Text `#F2F2F2`. Muted text `#AEB4BD`. Secondary body text `#C9CED6`. Accent `#93B8E0`. Dividers `#3A3D42`.
- Content container: `max-width: 1080px`, side padding `clamp(20px, 5vw, 56px)`.
- H1: Barlow Condensed 600, uppercase, letter-spacing `.04em`, `clamp(3rem, 9vw, 6.5rem)`, line-height `.95`, with the name split over two lines.
- Section labels: Barlow Condensed 500, uppercase, letter-spacing `.12em`, `0.9375rem`, muted color. Each label sits in a left column (`flex: 1 1 180px`) and the content in a right column (`flex: 999 1 560px`). On narrow screens the two columns wrap into one.
- Links: text color with a `1px` bottom border `#4A4F57`. On hover both turn accent.
- Logo in the header: `logo/svg/ak-mark-on-dark.svg`, inlined, 36×28.
- Copy the copy **verbatim** from the design file.

## Content placeholders (ask Anton, don't invent)

These links are `href="#"` in the design. Put them in `site.ts` as `TODO` and list them for Anton:

- LinkedIn URL
- Telegram URL
- OurWay: live demo, frontend repo, backend repo, Telegram bot
- Car Service Book: live demo
- Uplevel Restoration: GitHub repo (the site itself is `https://uplevelcorp.ca`)
- Confirm that GitHub is `https://github.com/anton-kulchytskyi`
- Confirm the Car Service Book one-liner ("services, parts and mileage" was a guess)

Known values:

- Email: `antek1809@gmail.com`
- The old site link in the footer, "First version · 2021", points to `https://anton-kulchytskyi.github.io/CV/`

The phone number is intentionally **not** on the site.

## Quality bar

- Lighthouse 100 on all four categories (mobile).
- Semantic HTML: one `h1`, landmarks (`header`, `nav`, `main`, `section`, `footer`), and visible focus styles. Text contrast meets WCAG AA (the palette above already passes).
- Works at 360 px wide with no horizontal scroll.
- SEO: `<title>`, meta description, canonical, Open Graph and Twitter tags, `sitemap` (via `@astrojs/sitemap`), `robots.txt`, and JSON-LD `Person` (name, jobTitle, url, sameAs = social links).
- OG image: 1200×630 PNG with the logo mark and name on ink, generated at build time or committed as a static file.

## Phases

1. **Scaffold.** Astro project, fonts, `global.css` with tokens, Base layout, favicons copied from `logo/favicon/` into `public/`. Commit.
2. **Sections.** Header, Hero, About, Projects and Footer, all driven by `site.ts`, matching `design/index.html` at 1440 px and at 390 px. Show Anton the dev server.
3. **Content pass.** Collect the TODO links from Anton and fill them in.
4. **SEO and polish.** Meta, OG image, sitemap, JSON-LD, 404 page, Lighthouse run with results reported.
5. **Deploy.** Ask Anton which target he wants. The default suggestion is GitHub Pages as the user site `anton-kulchytskyi.github.io`, deployed via GitHub Actions; the old `/CV/` project page keeps working alongside it. Vercel or Netlify are fine alternatives. Set `site` in `astro.config` accordingly.

## Status

- [x] Phase 1 — Scaffold
- [x] Phase 2 — Sections. Verified against design/index.html at 1440/390/360 px: element boxes, font sizes and colors match exactly.
- [x] Phase 3 — Content (awaiting Anton's confirmation to start Phase 4). All links taken from Anton's CV PDF; GitHub URL confirmed.
- [ ] Phase 4 — SEO & polish
- [ ] Phase 5 — Deploy

Decisions:
- Repo name: `personal-site` (separate from the `anton-kulchytskyi` profile-README repo). Deploy target: GitHub Pages project site `https://anton-kulchytskyi.github.io/personal-site/`, so `base: '/personal-site'` is set in `astro.config.mjs`; all internal URLs must go through `import.meta.env.BASE_URL`.
- Remote: `origin` = https://github.com/anton-kulchytskyi/personal-site.git, branch `main`.
- Toolchain: Node 26 LTS (Astro 7 needs >= 22.23.4), pnpm 12 installed globally via npm (Node 25+ dropped corepack). TypeScript pinned to ^6 because `astro check` does not support TS 7 yet.
- `.container` uses `box-sizing: content-box` on purpose: in the design 1080px is the content width and the gutters sit outside it.
- Deviation from design: nav links and the footer "First version" link turn accent on hover (in the design their inline color blocked the hover state).
- All external (http/https) links open in a new tab via `linkAttrs()` in `site.ts`; `mailto:` and in-page anchors don't.
- Footer old-site link text changed from "First version · 2021" to "Still learning · since 2021" (Anton's request; nod to the Michelangelo quote on the 2021 CV site).
- Car Service Book one-liner rewritten from the CV: "Maintenance tracker for vehicles — record and manage service history in one place."
- OurWay "Telegram bot" link points to the bot's GitHub repo (same as in the CV).
- Machine notes: shared Windows PC; `C:\nvm4w` belongs to another user's nvm, Anton uses the plain Node install in `C:\Program Files\nodejs`. `gh` CLI is not installed.
