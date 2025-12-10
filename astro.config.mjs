// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aaronrss.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '0.0.0.0',

        // HOST dinámico de Replit:
        '211e9931-d664-40e8-84e1-6444686dbb62-00-2pc9h061y6dmq.worf.replit.dev'
      ]
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
