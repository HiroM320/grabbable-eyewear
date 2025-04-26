import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/HiroM320/vrc-grabbable-eyewear-doc' }],
      sidebar: [
        {
          label: '始める',
          autogenerate: {
            directory: "grabbable-eyewear"
          }
        },
      ],
    }),
  ],
  server: {
    host: '127.0.0.1'
  }
});
