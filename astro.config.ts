import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { base, boothLink, twitterLink } from './src/const'

export default defineConfig({
  root: '.',
  base: base,
  trailingSlash: 'always',
  site: 'https://suikompany.hiromelon.dev',
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      social: [
        { icon: 'x.com', label: 'X/Twitter', href: twitterLink },
        { icon: 'external', label: 'Booth', href: boothLink }
      ],
      sidebar: [
        {slug: 'installation'},
        {slug: 'feature'},
        {slug: 'changelog'},
        {
          label: 'リファレンス',
          items: [
            {slug: 'references/adjustment'},
            {slug: 'references/performance-rank'},
            {slug: 'references/faq'},
            {slug: 'references/license'},
          ],
        },
      ]
    }),
  ],
  server: {
    host: '127.0.0.1'
  }
});
