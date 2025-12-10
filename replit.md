# Professional Portfolio - Astro Landing Page

## Overview
This is a professional landing page built with Astro, designed to be hosted on GitHub Pages. It includes a Home page, Blog, Portfolio, and About Me sections with a modern, minimalist design.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.astro       # Universal card for blog posts and projects
│   ├── Footer.astro     # Site footer with links and social
│   ├── Hero.astro       # Hero section component
│   ├── Navigation.astro # Main navigation with mobile menu
│   ├── SectionHeader.astro # Section title component
│   └── ThemeToggle.astro # Dark/light mode toggle
├── content/             # Content collections (Markdown/JSON)
│   ├── blog/            # Blog posts in MDX format
│   ├── portfolio/       # Projects in JSON format
│   └── config.ts        # Content collection schemas
├── layouts/             # Page layouts
│   ├── BaseLayout.astro # Main layout with meta, nav, footer
│   └── BlogPostLayout.astro # Blog post specific layout
├── pages/               # File-based routing
│   ├── index.astro      # Home page
│   ├── about.astro      # About Me page
│   ├── blog/            # Blog pages
│   │   ├── index.astro  # Blog listing with filters
│   │   └── [...slug].astro # Dynamic blog post pages
│   └── portfolio/
│       └── index.astro  # Portfolio with tech filters
├── styles/
│   └── global.css       # Global styles and CSS variables
└── utils/               # Utility functions
    ├── formatDate.ts    # Date formatting helpers
    └── theme.ts         # Theme toggle utilities
```

## Key Features

### Theme System
- Light/Dark mode toggle with localStorage persistence
- CSS custom properties for theming (defined in `global.css`)
- Smooth transitions between themes

### SEO & Performance
- Automatic sitemap generation with `@astrojs/sitemap`
- RSS feed at `/rss.xml`
- robots.txt for search engine crawlers
- View Transitions for smooth page navigation

### Content Management
- Blog posts: MDX files in `src/content/blog/`
- Portfolio projects: JSON files in `src/content/portfolio/`
- Content schemas defined in `src/content/config.ts`
- Real-time search filtering on blog page

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px
- Hamburger menu for mobile navigation

## Development

```bash
npm run dev      # Start dev server on port 5000
npm run build    # Build for production
npm run preview  # Preview production build
```

## Configuration

### For GitHub Pages
1. Update `site` in `astro.config.mjs` with your GitHub Pages URL
2. Set `base` if deploying to a subdirectory

### Adding Content

**New Blog Post:**
Create a new `.mdx` file in `src/content/blog/` with frontmatter:
```yaml
---
title: "Post Title"
description: "Description"
pubDate: 2024-01-01
category: "Category"
tags: ["tag1", "tag2"]
image: "https://..."
---
```

**New Project:**
Create a new `.json` file in `src/content/portfolio/`:
```json
{
  "title": "Project Name",
  "description": "Description",
  "image": "https://...",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://...",
  "demo": "https://...",
  "featured": true,
  "order": 1
}
```

## User Preferences
- Language: Spanish (ES)
- Style: Minimalist, modern, documentation-like
- Requirements: Responsive, dark/light toggle, reusable components

## Recent Changes
- December 2024: Added Contact page with Formspree integration
- December 2024: Integrated Google Analytics 4 (component-based)
- December 2024: Added SEO improvements (sitemap, robots.txt, RSS feed)
- December 2024: Implemented View Transitions for smooth navigation
- December 2024: Added real-time search functionality to blog page
- December 2024: Initial project setup with Astro, Tailwind CSS, and MDX
