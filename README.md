# aaronrss.github.io

Public bilingual portfolio for Aaron Rosas, built with Astro and deployed to
GitHub Pages. The site focuses on backend engineering, cloud, application
delivery, technical writing, and selected personal interests.

## Routes

| English | Español | Purpose |
| --- | --- | --- |
| `/` | `/es/` | Home |
| `/about` | `/es/about` | Profile and experience |
| `/portfolio` | `/es/portfolio` | Published work and reserved project shells |
| `/blog` | `/es/blog` | Technical articles; current posts are in English |
| `/contact` | `/es/contact` | Contact form and public profiles |

The previous site is preserved under `/legacy/`. During Astro development,
that route redirects to `/legacy/index.html`; the original files remain in
`public/legacy/`.

## Development

Use Node.js 22.12 or newer. The version expected by local tooling is declared
in `.nvmrc`.

```bash
npm ci
npm run dev
```

Open `http://localhost:5000`.

### Docker

```bash
docker compose up --build
```

The repository is mounted into the container for Astro hot reload. Stop it
with `Ctrl+C`, or from another terminal:

```bash
docker compose down
```

## Verification

```bash
npm run build
```

The static build is generated in `dist/`. The repository currently does not
define separate test or lint scripts.

## Content and structure

- `src/data/profile.ts`: approved public profile facts and translations.
- `src/components/pages/`: shared bilingual page implementations.
- `src/pages/`: thin English and Spanish route entry points.
- `src/content.config.ts`: typed Astro content collections and loaders.
- `src/content/blog/`: MDX articles.
- `src/content/portfolio/`: published work and explicit project placeholders.
- `public/legacy/`: preserved previous website.

Portfolio placeholders must not contain invented claims, repository URLs, or
demo URLs. Replace a placeholder only when the corresponding work is ready to
publish.
