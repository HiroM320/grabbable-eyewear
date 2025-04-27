import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'vrc-items-doc' as const;
const project = 'grabbable-eyewear' as const;
const base = `${repo}/${project}/` as const;
const github_link = `https://github.com/HiroM320/${repo}/tree/main/packages/${project}` as const;

export default defineConfig({
  root: '.',
  base: base,
  trailingSlash: 'always',
  site: 'https://hirom320.github.io',
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      social: [{ icon: 'github', label: 'GitHub', href: github_link }],
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
