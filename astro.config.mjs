// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

/** @type {import('vite').Plugin} */
const legacyDevRedirect = {
  name: 'legacy-dev-redirect',
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      const pathname = request.url?.split('?')[0];
      if (pathname === '/legacy' || pathname === '/legacy/') {
        response.statusCode = 302;
        response.setHeader('Location', '/legacy/index.html');
        response.end();
        return;
      }

      next();
    });
  }
};

export default defineConfig({
  site: 'https://aaronrss.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss(), legacyDevRedirect],
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
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
