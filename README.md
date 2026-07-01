# Meng Dou — Portfolio

A personal portfolio site for **Meng Dou**, Senior Data Scientist & AI Product Owner at ASML — styled after [eleos.la](https://www.eleos.la)'s editorial, photography-led aesthetic: full-bleed environmental imagery, a warm cream/ink palette, a serif display face paired with clean sans and mono utility type, numbered case-study index, and minimal hairline dividers instead of cards.

## Design concept

- **Photography**: the site uses five of the candidate's own personal photos (sailing in the Netherlands, hiking in the French Alps) as full-bleed section backgrounds and case-study imagery — the same role architectural/interior photography plays on eleos.la, but personal rather than stock.
- **Palette**: warm cream (`#F7F4EE`) background, near-black ink (`#17140F`) text, a single muted moss-green accent, with a full dark-mode inversion available via the nav toggle.
- **Type**: Fraunces (serif, used sparingly in italics for warmth) for display headings, Inter for body copy, IBM Plex Mono for eyebrows, index numbers, dates, and the live Eindhoven clock in the nav — mirroring eleos.la's "Los Angeles, CA — 00:00 PST" flourish.
- **Structure**: case studies are a numbered, hairline-separated list (01–04) rather than cards, each paired with a photo — matching eleos.la's project index pattern rather than a generic grid.

## Content notes

All copy was rewritten from the source résumé into achievement-driven language — nothing is copied verbatim. A few illustrative metrics (e.g. "flagged ~1–2 weeks ahead," "cut triage time by ~30%") were added to make impact concrete where the original resume didn't state a number; **please review and adjust these against real figures before publishing**, since they are reasonable estimates, not verified statistics.

The home address from the source resume was intentionally omitted from the public Contact section (only city-level location is shown) as a privacy best practice for a public-facing site.

## Sections

1. **Hero** — full-bleed photo, serif headline, entry CTA
2. **Intro** — the data-science-to-product-ownership thesis statement
3. **Featured Work** — 4 numbered case studies (ASML predictive maintenance, ASML AI product portfolio, HighTechXL/Elpis startup, Philips digital pathology), each paired with a personal photo
4. **Approach** — 3 operating principles (data-backed judgment, cross-sector fluency, end-to-end ownership)
5. **Companies** — text wordmark strip of employers and schools
6. **Education** — degree and research timeline
7. **Experience** — full role timeline, 2010–present
8. **Skills** — grouped skills, certificates, languages
9. **Contact** — full-bleed closing CTA + footer with contact links and socials

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) with a custom CSS-variable-based design token system (see `app/globals.css` and `tailwind.config.ts`)
- No external UI libraries, no environment variables, no backend — fully static content

## Local setup

Requires Node.js 18.17+ (Next.js 14 requirement).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

## Project structure

```
meng-dou-portfolio/
├── app/
│   ├── globals.css        # design tokens (cream default + dark inversion), base styles
│   ├── layout.tsx         # fonts, metadata, html shell
│   └── page.tsx           # composes all sections
├── components/
│   ├── Nav.tsx
│   ├── LiveClock.tsx       # Eindhoven live time, nav flourish
│   ├── ThemeToggle.tsx
│   ├── Hero.tsx            # full-bleed photo hero
│   ├── Intro.tsx           # mission statement block
│   ├── Projects.tsx        # numbered case studies
│   ├── Approach.tsx        # 3 operating principles
│   ├── Companies.tsx       # employer/school wordmark strip
│   ├── About.tsx           # education timeline
│   ├── Experience.tsx      # role timeline
│   ├── Skills.tsx
│   └── Contact.tsx         # full-bleed CTA + footer
├── public/
│   ├── headshot.jpg         # nav avatar
│   └── photos/              # personal photography used as backgrounds
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Customizing

- **Update content**: all copy lives directly in the component files as typed arrays (`CASES` in `Projects.tsx`, `ROLES` in `Experience.tsx`, `PILLARS` in `Approach.tsx`, etc.) — no CMS or data layer to wire up.
- **Update colors**: edit the CSS variables in `app/globals.css` under `:root` (cream, default) and `.dark` (dark mode).
- **Swap photography**: replace files in `public/photos/` (keep the same filenames, or update the `src` paths in `Hero.tsx`, `Projects.tsx`, and `Contact.tsx`).
