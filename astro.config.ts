import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { base, boothLink, githubLink } from './src/const'

export default defineConfig({
  root: '.',
  base: base,
  trailingSlash: 'always',
  site: 'https://hirom320.github.io',
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      social: [
        { icon: 'github', label: 'GitHub', href: githubLink },
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
