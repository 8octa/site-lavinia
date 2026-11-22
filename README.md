# na.digital

This project recreates the supplied na.digital social media studio website in
the Next.js App Router. Each page has its own route and page component under
`src/app`; shared navigation, footer, styling, GSAP animation, and browser
interactions use React components.

Each route folder contains a `page.jsx` with its page implementation and
metadata, plus a `layout.jsx`. The root `src/app/layout.jsx` owns the document
and renders the shared header, page shell, and footer for every route.

The site palette, fonts, and Tailwind theme tokens are defined in
`src/app/globals.css`. Pages and components use Tailwind utility classes;
shared responsive and interactive component styles live in the same file.
The header theme switcher offers Light (the default), Dark, and na.digital
themes, and saves the selected theme in browser storage.
Use Lucide React for interface icons; keep inline SVGs for custom brand
illustrations.

The homepage is available at `/`. Other routes include `/pentru-cine`,
`/ce-facem`, `/artisti`, `/ce-am-facut`, `/gratis`, `/cine-suntem`, `/intrebari`,
`/contact`, `/lunar`, `/content-creation`, `/audit`, `/tiktok-start`,
`/email-marketing`, `/facut-de-mana`, `/confidentialitate`, and `/cookies`.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.

`src/app/site-shell.jsx` plays the GSAP entrance animation when routes change.
Homepage stories, the fortune cookie, the highlights slider, and the tile reveal
are implemented with React in `src/app/_components/HomeInteractions.jsx`.
Contact and free-list forms use `FeedbackForm.jsx`; they show demo feedback and
are not connected to a submission service. Story and fortune content is stored
in `src/app/_data/home-interactions.json`. Brand assets and fonts are served
from `public/na-digital`.
