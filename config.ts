import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "turing-ui-vue3基础组件文档",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/turing-ui-vue3/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "turing-ui-vue3基础组件文档",
    outline: 3,
    socialLinks: [{ icon: "github", link: "https://code.iflytek.com/osc/_source/Y_RDG-TURING/turing-cbb/turing-ui-component/-/code/" }],
    nav: [
      { text: '指南', link: '/guide/base/index.md', activeMatch: '/guide/'},
      { text: '组件',  link: '/components/TuButton/base.md', activeMatch: '/components/'}
    ],
    sidebar: {
      '/guide/': [
        { 
          text: '基础', 
          items: [
            { text: '快速开始', link: '/guide/base/index.md', }
          ]
        },
        { 
          text: '进阶', 
          items: [
            { text: '国际化', link: '/guide/advanc/i18n.md', },
            { text: '主题', link: '/guide/advanc/theme.md', }
          ]
        }
      ],
      "/components": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/TuButton/base.md" },
            { text: "TextButton 文字按钮", link: "/components/TuTextButton/base.md" },
            { text: "Tootip 文字提示", link: "/components/TuTooltip/base.md" },
            { text: "Status 状态组件", link: "/components/TuStatus/base.md" },
            { text: "Select 下拉选择组件", link: "/components/TuSelect/base.md" },
            { text: "Empty 空状态", link: "/components/TuEmpty/base.md" },
            { text: "SvgIcon 图标", link: "/components/TuSvgIcon/base.md" },
            { text: "QuickDate 快速选择日期", link: "/components/TuQuickDate/base.md" },
            { text: "Step 步骤条", link: "/components/TuStep/base.md" },
            { text: "Upload 上传组件", link: "/components/TuUpload/base.md" },
          ]
        },
        {
          text: "复杂组件",
          items: [
            { text: "Query 查询组件", link: "/components/TuQuery/base.md" },
            { text: "Table 表格组件", link: "/components/TuTable/base.md" }
          ]
        }
      ]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  }
})
