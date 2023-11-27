import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: 'Discord Coverage',
  description: 'Comprehensive coverage of everything Discord.',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
    ],
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Contributing', link: '/contributing' },
        ],
      },
      {
        text: 'Bots',
        items: [
          { text: 'Recommended Bots', link: '/bots/recommended' },
          { text: 'Bot Development', link: '/bots/development' },
        ],
      },
      {
        text: 'Staff Management',
        items: [{ text: '', link: '/' }],
      },
      {
        text: 'Server Settings',
        items: [{ text: '', link: '/' }],
      },
      {
        text: 'Templates',
        items: [
          { text: 'Server Rules', link: '/templates/server-rules' },
          {
            text: 'Moderator Applicatons',
            link: '/templates/moderator-applications',
          },
        ],
      },
      {
        text: 'Other Resources',
        items: [
          { text: 'Official', link: '/resources/official' },
          { text: 'Unofficial', link: '/resources/unofficial' },
          { text: 'Badges', link: '/resources/badges' },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/slekup/discord-admin-resource',
      },
    ],
    search: {
      provider: 'local',
    },
  },
  lastUpdated: true,
});
