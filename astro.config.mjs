// @ts-check
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aaronrss.github.io',
  output: 'static',
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
