import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  const sortedPosts = posts.toSorted(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Portfolio Blog',
    description: 'Artículos sobre desarrollo web, tutoriales y experiencias',
    site: context.site ?? 'https://aaronrss.github.io',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>es-ES</language>`,
  });
}
