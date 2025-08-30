import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { FunctionsSideBar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'EasyUse',
  description: 'A VitePress Site',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../src', import.meta.url)),
        '@seikonn/easyuse': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
      },
    },
  },
  srcDir: './src',
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        // demoDir: fileURLToPath(new URL("../demos", import.meta.url)),
      })
    },
  },
  themeConfig: {
    outline: {
      label: '本页目录', // 默认是 "On this page"
      level: 'deep', // 你原来配置的层级仍然可以保留
    },
    nav: [
      { text: '指南', link: '/guide', activeMatch: '^\/guide' },
      { text: '函数', link: '/functions', activeMatch: '^\/(functions|vue|utils)' },
    ],
    sidebar: {
      '/functions': FunctionsSideBar,
      '/vue': FunctionsSideBar,
      '/utils': FunctionsSideBar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
