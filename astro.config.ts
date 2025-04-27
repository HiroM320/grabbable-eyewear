import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'grabbable-eyewear' as const;
const base = `${repo}/` as const;
const github_link = `https://github.com/HiroM320/${repo}` as const;
const booth_link = `https://hiromelon.booth.pm/items/6832055` as const;

export default defineConfig({
  root: '.',
  base: base,
  trailingSlash: 'always',
  site: 'https://hirom320.github.io',
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      social: [
        { icon: 'github', label: 'GitHub', href: github_link },
        { icon: 'external', label: 'Booth', href: booth_link }
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
