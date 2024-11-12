import { defineConfig } from 'vitepress'
import markdownItWikilinks from 'markdown-it-wikilinks'

export default defineConfig({
  title: "Liudonghua's Blog",
  description: "The blog of liudonghua",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'getting-started', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'getting-started',
        items: [
          { text: 'getting-started', link: '/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
  markdown: {
    // https://vitepress.dev/guide/markdown#math-equations
    math: true,
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    // anchor: {
    //   permalink: markdownItAnchor.permalink.headerLink()
    // },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(markdownItWikilinks())
    }
  }
})
