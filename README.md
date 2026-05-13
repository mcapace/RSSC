# RSSC

Regent Seven Seas Cruises × M. Shanken Communications: **H2 2026** interactive scroll presentation (`regent-shanken-h2-2026` Next.js app).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

In the Vercel project, open **Settings → General → Build & Development Settings** and verify:

- **Framework Preset:** Next.js (not “Other” or a static preset).
- **Root Directory:** `.` (repo root, unless this app lives in a subfolder).
- **Build Command:** leave default (`npm run build` or `next build`).
- **Output Directory:** leave **empty**. Next.js does not deploy from `public`; if this is set to `public`, the build fails with “No Output Directory named 'public' found”.

This repo includes `vercel.json` with `"framework": "nextjs"` so new imports detect Next.js correctly.

Set environment variable `PRESENTATION_PASSWORD` to enable HTTP Basic Auth via `middleware.ts`. Leave it unset for a public preview.

## Stack

Next.js 14 (App Router), Tailwind, Framer Motion, Lenis, optional Mapbox for future map work.
