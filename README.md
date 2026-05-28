# Lively — Marketing site

Next.js 15 (App Router) + TypeScript + Tailwind v4 + Framer Motion.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On Vercel: New Project → import the repo → keep defaults → Deploy.
3. Once deployed, copy the production URL (e.g. `https://lively-website.vercel.app`).
4. Update [`src/lib/site.ts`](src/lib/site.ts):
   - `url` → your Vercel URL
   - `apkUrl` → the public URL of the APK (e.g. a GitHub Release asset, or Supabase Storage public file)
   - `playStoreUrl` → set once you publish to the Play Store
5. Update Supabase project: Authentication → URL Configuration → add the Vercel URL to "Site URL" and "Redirect URLs".

## Tweaks you'll probably want

- Replace the placeholder `apkUrl` in [`src/lib/site.ts`](src/lib/site.ts) before launching.
- Swap the SVG `PhoneMockup` for a real screenshot when ready (use `next/image`).
- Add screenshots to `public/` and reference them from the Hero or a new gallery section.

## Pages

- `/` — landing (Hero → Trust → How it works → Features → Download → CTA)
- `/privacy` — privacy disclosure

## What's clinical-grade about the design

- Same cobalt palette as the app, so site → app feels like one product.
- Type ramp leans tight (Inter for body, Manrope for display headlines).
- Auto dark mode via `prefers-color-scheme` — no toggle needed.
- Animations are subtle, opt-out via `prefers-reduced-motion`.
- All copy is honest about being a research prototype.
# lively_website
