import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: 'Discord Admin Resource',
  description:
    'Comprehensive resource for Discord admins: tips, guides, and tools to manage servers effectively.',
  //   head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
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
