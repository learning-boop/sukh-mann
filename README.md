# Dr. Sukh Mann Chiropractic — Apple-Style Site

React 18 + Vite + Tailwind CSS v4 + Three.js (3D spine hero).

## Run on localhost

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview   # test the build locally
```

Output goes to `dist/`.

## Deploy to Vercel

`vercel.json` (SPA rewrite) is included. Just push to GitHub and import the repo in Vercel — no extra config needed.

## Project structure

```
src/
  components/   Navbar, Reveal, SpineCanvas (3D), StickyCallBar
  pages/        Home (About, Dr. Sukh, Care, New Patients, Contact — coming next)
  data/         site.js — all phone/hours/testimonials/copy in one place
  assets/       athlete-hero.jpg
```

## Notes

- All client contact info lives in `src/data/site.js` — edit once, updates everywhere.
- The 3D spine is lazy-loaded (`React.lazy`) so it never blocks first paint.
- `prefers-reduced-motion` disables the marquee, reveals, and spine motion.
- Replace `src/assets/athlete-hero.jpg` any time — confirm image license before launch.
