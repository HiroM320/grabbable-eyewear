import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  root: '.',
  base: '/vrc-items-doc/grabbable-eyewear/',
  trailingSlash: 'always',
  site: 'https://hirom320.github.io',
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/HiroM320/shop-doc/tree/main/packages/grabbable-eyewear' }],
      sidebar: [
        {slug: 'installation'},
        {slug: 'feature'},
        {slug: 'changelog'},
        {
          label: 'リファレンス',
          collapsed: true,
          items: [
            {slug: 'references/adjustment'},
            {slug: 'references/performance-rank'},
          ],
        },
      ]
    }),
  ],
  server: {
    host: '127.0.0.1'
  }
});
