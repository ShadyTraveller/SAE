# SAE Consulting — sae.llc

Mobile-first marketing site for **SAE Consulting**. Built with Next.js 16,
Tailwind CSS v4, and Framer Motion — a minimal, app-style experience in
yellow / black / white.

## Pages

- `/` — Home: animated hero, results band, services preview, CTA
- `/services` — Six expandable practice cards (strategy, operations, digital & AI, finance, growth, leadership)
- `/process` — Discover → Define → Deliver → Scale tab walkthrough
- `/contact` — Contact form (stores submissions in Supabase)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (contact form) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (contact form) |

## Deploy

Connected to Vercel — every push to `main` redeploys automatically.
