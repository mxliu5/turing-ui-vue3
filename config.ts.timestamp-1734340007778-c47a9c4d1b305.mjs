// docs/.vitepress/config.ts
import { defineConfig } from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/vitepress@1.0.0-alpha.75_@algolia+client-search@5.16.0_@types+node@18.7.18_sass@1.82.0_search-insights@2.17.3/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/config/plugins.ts
import path from "path";
import fs from "fs";
import MarkdownIt from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/markdown-it@13.0.2/node_modules/markdown-it/index.js";
import mdContainer from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/markdown-it-container@3.0.0/node_modules/markdown-it-container/index.js";

// docs/.vitepress/utils/highlight.ts
import chalk from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/index.js";
import escapeHtml from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/escape-html@1.0.3/node_modules/escape-html/index.js";
import prism from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/prismjs@1.29.0/node_modules/prismjs/prism.js";
import consola from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/consola@3.2.3/node_modules/consola/dist/index.mjs";
import loadLanguages from "file:///E:/%E9%A1%B9%E7%9B%AE/%E5%9B%BE%E8%81%86cbb/turing-ui-component/node_modules/.pnpm/prismjs@1.29.0/node_modules/prismjs/components/index.js";
loadLanguages(["markup", "css", "javascript"]);
function wrap(code, lang) {
  if (lang === "text") {
    code = escapeHtml(code);
  }
  return `<pre v-pre><code>${code}</code></pre>`;
}
var highlight = (str, lang) => {
  if (!lang) {
    return wrap(str, "text");
  }
  lang = lang.toLowerCase();
  const rawLang = lang;
  if (lang === "vue" || lang === "html") {
    lang = "markup";
  }
  if (lang === "md") {
    lang = "markdown";
  }
  if (lang === "ts") {
    lang = "typescript";
  }
  if (lang === "py") {
    lang = "python";
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang]);
    } catch {
      consola.warn(
        chalk.yellow(
          `[vitepress] Syntax highlight for language "${lang}" is not supported.`
        )
      );
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang);
    return wrap(code, rawLang);
  }
  return wrap(str, "text");
};

// docs/.vitepress/config/global.ts
import { resolve } from "path";
var __vite_injected_original_dirname = "E:\\\u9879\u76EE\\\u56FE\u8046cbb\\turing-ui-component\\docs\\.vitepress\\config";
var projRoot = resolve(__vite_injected_original_dirname, "..", "..", "..");
var docsDirName = "docs";
var docRoot = resolve(projRoot, docsDirName);

// docs/.vitepress/config/plugins.ts
var localMd = MarkdownIt();
var mdPlugin = (md) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      var _a;
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        let source = "";
        const sourceFile = ((_a = sourceFileToken.children) == null ? void 0 : _a[0].content) ?? "";
        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(path.resolve(docRoot, "examples", `${sourceFile}.vue`), "utf-8");
        }
        if (!source)
          throw new Error(`Incorrect source file: ${sourceFile}`);
        return `<Demo
                        source="${encodeURIComponent(highlight(source, "vue"))}"
                        path="${sourceFile}"
                        raw-source="${encodeURIComponent(source)}"
                        description="${encodeURIComponent(localMd.render(description))}">`;
      } else {
        return "</Demo>\n";
      }
    }
  });
};

// docs/.vitepress/config.ts
var config_default = defineConfig({
  title: "turing-ui-vue3\u57FA\u7840\u7EC4\u4EF6\u6587\u6863",
  description: "\u57FA\u4E8EElement-plus\u57FA\u7840\u7EC4\u4EF6\u5C01\u88C5\u4F7F\u7528",
  lang: "cn-ZH",
  base: "/turing-ui-vue3/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "turing-ui-vue3\u57FA\u7840\u7EC4\u4EF6\u6587\u6863",
    outline: 3,
    socialLinks: [{ icon: "github", link: "https://github.com/wocwin/t-ui-plus" }],
    nav: [
      { text: "\u5B89\u88C5\u6307\u5357", link: "/guide/base/index.md", activeMatch: "/guide/" },
      { text: "\u7EC4\u4EF6", link: "/components/TuButton/base.md", activeMatch: "/components/" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "\u57FA\u7840",
          items: [
            { text: "\u57FA\u672C\u4ECB\u7ECD", link: "/guide/base/index.md" }
          ]
        }
      ],
      "/components": [
        {
          text: "\u57FA\u7840\u7EC4\u4EF6",
          items: [
            { text: "Button \u6309\u94AE", link: "/components/TuButton/base.md" },
            { text: "TextButton \u6587\u5B57\u6309\u94AE", link: "/components/TuTextButton/base.md" },
            { text: "Tootip \u6587\u5B57\u63D0\u793A", link: "/components/TuTooltip/base.md" },
            { text: "Status \u72B6\u6001\u7EC4\u4EF6", link: "/components/TuStatus/base.md" },
            { text: "Select \u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6", link: "/components/TuSelect/base.md" }
          ]
        },
        {
          text: "\u590D\u6742\u7EC4\u4EF6",
          items: [
            { text: "Query \u67E5\u8BE2\u7EC4\u4EF6", link: "/components/TuButton/base.md" },
            { text: "Table \u8868\u683C\u7EC4\u4EF6", link: "/components/TuTable/base.md" }
          ]
        }
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: (md) => mdPlugin(md)
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3BsdWdpbnMudHMiLCAiZG9jcy8udml0ZXByZXNzL3V0aWxzL2hpZ2hsaWdodC50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2dsb2JhbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTU2RkVcdTgwNDZjYmJcXFxcdHVyaW5nLXVpLWNvbXBvbmVudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTU2RkVcdTgwNDZjYmJcXFxcdHVyaW5nLXVpLWNvbXBvbmVudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTklQTElQjklRTclOUIlQUUvJUU1JTlCJUJFJUU4JTgxJTg2Y2JiL3R1cmluZy11aS1jb21wb25lbnQvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIlxyXG5pbXBvcnQgeyBtZFBsdWdpbiB9IGZyb20gXCIuL2NvbmZpZy9wbHVnaW5zXCJcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB0aXRsZTogXCJ0dXJpbmctdWktdnVlM1x1NTdGQVx1Nzg0MFx1N0VDNFx1NEVGNlx1NjU4N1x1Njg2M1wiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlx1NTdGQVx1NEU4RUVsZW1lbnQtcGx1c1x1NTdGQVx1Nzg0MFx1N0VDNFx1NEVGNlx1NUMwMVx1ODhDNVx1NEY3Rlx1NzUyOFwiLFxyXG4gIGxhbmc6IFwiY24tWkhcIixcclxuICBiYXNlOiBcIi90dXJpbmctdWktdnVlMy9cIixcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbG9nbzogXCIvZmF2aWNvbi5pY29cIixcclxuICAgIHNpdGVUaXRsZTogXCJ0dXJpbmctdWktdnVlM1x1NTdGQVx1Nzg0MFx1N0VDNFx1NEVGNlx1NjU4N1x1Njg2M1wiLFxyXG4gICAgb3V0bGluZTogMyxcclxuICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS93b2N3aW4vdC11aS1wbHVzXCIgfV0sXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU1Qjg5XHU4OEM1XHU2MzA3XHU1MzU3JywgbGluazogJy9ndWlkZS9iYXNlL2luZGV4Lm1kJywgYWN0aXZlTWF0Y2g6ICcvZ3VpZGUvJ30sXHJcbiAgICAgIHsgdGV4dDogJ1x1N0VDNFx1NEVGNicsICBsaW5rOiAnL2NvbXBvbmVudHMvVHVCdXR0b24vYmFzZS5tZCcsIGFjdGl2ZU1hdGNoOiAnL2NvbXBvbmVudHMvJ31cclxuICAgIF0sXHJcbiAgICBzaWRlYmFyOiB7XHJcbiAgICAgICcvZ3VpZGUvJzogW1xyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwJywgXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTU3RkFcdTY3MkNcdTRFQ0JcdTdFQ0QnLCBsaW5rOiAnL2d1aWRlL2Jhc2UvaW5kZXgubWQnLCB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIi9jb21wb25lbnRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBcIlx1NTdGQVx1Nzg0MFx1N0VDNFx1NEVGNlwiLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIkJ1dHRvbiBcdTYzMDlcdTk0QUVcIiwgbGluazogXCIvY29tcG9uZW50cy9UdUJ1dHRvbi9iYXNlLm1kXCIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIlRleHRCdXR0b24gXHU2NTg3XHU1QjU3XHU2MzA5XHU5NEFFXCIsIGxpbms6IFwiL2NvbXBvbmVudHMvVHVUZXh0QnV0dG9uL2Jhc2UubWRcIiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiVG9vdGlwIFx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCBsaW5rOiBcIi9jb21wb25lbnRzL1R1VG9vbHRpcC9iYXNlLm1kXCIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIlN0YXR1cyBcdTcyQjZcdTYwMDFcdTdFQzRcdTRFRjZcIiwgbGluazogXCIvY29tcG9uZW50cy9UdVN0YXR1cy9iYXNlLm1kXCIgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiBcIlNlbGVjdCBcdTRFMEJcdTYyQzlcdTkwMDlcdTYyRTlcdTdFQzRcdTRFRjZcIiwgbGluazogXCIvY29tcG9uZW50cy9UdVNlbGVjdC9iYXNlLm1kXCIgfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFwiXHU1OTBEXHU2NzQyXHU3RUM0XHU0RUY2XCIsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6IFwiUXVlcnkgXHU2N0U1XHU4QkUyXHU3RUM0XHU0RUY2XCIsIGxpbms6IFwiL2NvbXBvbmVudHMvVHVCdXR0b24vYmFzZS5tZFwiIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogXCJUYWJsZSBcdTg4NjhcdTY4M0NcdTdFQzRcdTRFRjZcIiwgbGluazogXCIvY29tcG9uZW50cy9UdVRhYmxlL2Jhc2UubWRcIiB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICBtYXJrZG93bjoge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBsZXZlbDogWzAsIDBdXHJcbiAgICB9LFxyXG4gICAgLy8gbGlnaHQ6ICNmOWZhZmIsIGRhcms6IC0tdnAtY29kZS1ibG9jay1iZ1xyXG4gICAgdGhlbWU6IHsgbGlnaHQ6IFwiZ2l0aHViLWxpZ2h0XCIsIGRhcms6IFwiZ2l0aHViLWRhcmtcIiB9LFxyXG4gICAgY29uZmlnOiBtZCA9PiBtZFBsdWdpbihtZClcclxuICB9XHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcXHU5ODc5XHU3NkVFXFxcXFx1NTZGRVx1ODA0NmNiYlxcXFx0dXJpbmctdWktY29tcG9uZW50XFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTU2RkVcdTgwNDZjYmJcXFxcdHVyaW5nLXVpLWNvbXBvbmVudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFOSVBMSVCOSVFNyU5QiVBRS8lRTUlOUIlQkUlRTglODElODZjYmIvdHVyaW5nLXVpLWNvbXBvbmVudC9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3BsdWdpbnMudHNcIjtpbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IGZzIGZyb20gXCJmc1wiXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIlxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IG1kQ29udGFpbmVyIGZyb20gXCJtYXJrZG93bi1pdC1jb250YWluZXJcIlxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHR5cGUgVG9rZW4gZnJvbSBcIm1hcmtkb3duLWl0L2xpYi90b2tlblwiXG5pbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tIFwiLi4vdXRpbHMvaGlnaGxpZ2h0XCJcbmltcG9ydCB7IGRvY1Jvb3QgfSBmcm9tIFwiLi9nbG9iYWxcIlxuY29uc3QgbG9jYWxNZCA9IE1hcmtkb3duSXQoKVxuXG5pbnRlcmZhY2UgQ29udGFpbmVyT3B0cyB7XG4gIG1hcmtlcj86IHN0cmluZyB8IHVuZGVmaW5lZFxuICB2YWxpZGF0ZT8ocGFyYW1zOiBzdHJpbmcpOiBib29sZWFuXG4gIHJlbmRlcj8odG9rZW5zOiBUb2tlbltdLCBpbmRleDogbnVtYmVyKTogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgbWRQbHVnaW4gPSAobWQ6IE1hcmtkb3duSXQpID0+IHtcbiAgbWQudXNlKG1kQ29udGFpbmVyLCBcImRlbW9cIiwge1xuICAgIHZhbGlkYXRlKHBhcmFtcykge1xuICAgICAgcmV0dXJuICEhcGFyYW1zLnRyaW0oKS5tYXRjaCgvXmRlbW9cXHMqKC4qKSQvKVxuICAgIH0sXG4gICAgcmVuZGVyKHRva2VucywgaWR4KSB7XG4gICAgICBjb25zdCBtID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL15kZW1vXFxzKyguKikkLylcbiAgICAgIGlmICh0b2tlbnNbaWR4XS5uZXN0aW5nID09PSAxKSB7XG4gICAgICAgIC8qIG1lYW5zIHRoZSB0YWcgaXMgb3BlbmluZyAqL1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG0gJiYgbS5sZW5ndGggPiAxID8gbVsxXSA6IFwiXCJcbiAgICAgICAgY29uc3Qgc291cmNlRmlsZVRva2VuID0gdG9rZW5zW2lkeCArIDJdXG4gICAgICAgIGxldCBzb3VyY2UgPSBcIlwiXG4gICAgICAgIC8vIGRlbW9cdTY1ODdcdTRFRjZcdTU0MERcdTc5RjBcbiAgICAgICAgY29uc3Qgc291cmNlRmlsZSA9IHNvdXJjZUZpbGVUb2tlbi5jaGlsZHJlbj8uWzBdLmNvbnRlbnQgPz8gXCJcIlxuICAgICAgICBpZiAoc291cmNlRmlsZVRva2VuLnR5cGUgPT09IFwiaW5saW5lXCIpIHtcbiAgICAgICAgICAvLyBcdThCRkJcdTUzRDZcdTc5M0FcdTUyMTdcdTRFRTNcdTc4MDFcdTY1ODdcdTRFRjZcbiAgICAgICAgICBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKGRvY1Jvb3QsIFwiZXhhbXBsZXNcIiwgYCR7c291cmNlRmlsZX0udnVlYCksIFwidXRmLThcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNvdXJjZSkgdGhyb3cgbmV3IEVycm9yKGBJbmNvcnJlY3Qgc291cmNlIGZpbGU6ICR7c291cmNlRmlsZX1gKVxuICAgICAgICAvLyBvcGVuaW5nIHRhZ1xuICAgICAgICByZXR1cm4gYDxEZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9XCIke2VuY29kZVVSSUNvbXBvbmVudChoaWdobGlnaHQoc291cmNlLCBcInZ1ZVwiKSl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIke3NvdXJjZUZpbGV9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdy1zb3VyY2U9XCIke2VuY29kZVVSSUNvbXBvbmVudChzb3VyY2UpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIiR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvY2FsTWQucmVuZGVyKGRlc2NyaXB0aW9uKSl9XCI+YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2xvc2luZyB0YWdcbiAgICAgICAgcmV0dXJuIFwiPC9EZW1vPlxcblwiXG4gICAgICB9XG4gICAgfVxuICB9IGFzIENvbnRhaW5lck9wdHMpXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTU2RkVcdTgwNDZjYmJcXFxcdHVyaW5nLXVpLWNvbXBvbmVudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTU2RkVcdTgwNDZjYmJcXFxcdHVyaW5nLXVpLWNvbXBvbmVudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdXRpbHNcXFxcaGlnaGxpZ2h0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTklQTElQjklRTclOUIlQUUvJUU1JTlCJUJFJUU4JTgxJTg2Y2JiL3R1cmluZy11aS1jb21wb25lbnQvZG9jcy8udml0ZXByZXNzL3V0aWxzL2hpZ2hsaWdodC50c1wiOy8vIFx1NEVFM1x1NzgwMVx1OUFEOFx1NEVBRVxuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGVzY2FwZUh0bWwgZnJvbSAnZXNjYXBlLWh0bWwnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcHJpc20gZnJvbSAncHJpc21qcydcbmltcG9ydCBjb25zb2xhIGZyb20gJ2NvbnNvbGEnXG5cbi8vIHByaXNtIGlzIGxpc3RlZCBhcyBhY3R1YWwgZGVwIHNvIGl0J3Mgb2sgdG8gcmVxdWlyZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbi8vIGNvbnN0IGxvYWRMYW5ndWFnZXMgPSByZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvaW5kZXgnKVxuaW1wb3J0IGxvYWRMYW5ndWFnZXMgZnJvbSAncHJpc21qcy9jb21wb25lbnRzL2luZGV4J1xuLy8gcmVxdWlyZWQgdG8gbWFrZSBlbWJlZGRlZCBoaWdobGlnaHRpbmcgd29yay4uLlxubG9hZExhbmd1YWdlcyhbJ21hcmt1cCcsICdjc3MnLCAnamF2YXNjcmlwdCddKVxuXG5mdW5jdGlvbiB3cmFwKGNvZGU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGxhbmcgPT09ICd0ZXh0Jykge1xuICAgIGNvZGUgPSBlc2NhcGVIdG1sKGNvZGUpXG4gIH1cbiAgcmV0dXJuIGA8cHJlIHYtcHJlPjxjb2RlPiR7Y29kZX08L2NvZGU+PC9wcmU+YFxufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0ID0gKHN0cjogc3RyaW5nLCBsYW5nOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFsYW5nKSB7XG4gICAgcmV0dXJuIHdyYXAoc3RyLCAndGV4dCcpXG4gIH1cbiAgbGFuZyA9IGxhbmcudG9Mb3dlckNhc2UoKVxuICBjb25zdCByYXdMYW5nID0gbGFuZ1xuICBpZiAobGFuZyA9PT0gJ3Z1ZScgfHwgbGFuZyA9PT0gJ2h0bWwnKSB7XG4gICAgbGFuZyA9ICdtYXJrdXAnXG4gIH1cbiAgaWYgKGxhbmcgPT09ICdtZCcpIHtcbiAgICBsYW5nID0gJ21hcmtkb3duJ1xuICB9XG4gIGlmIChsYW5nID09PSAndHMnKSB7XG4gICAgbGFuZyA9ICd0eXBlc2NyaXB0J1xuICB9XG4gIGlmIChsYW5nID09PSAncHknKSB7XG4gICAgbGFuZyA9ICdweXRob24nXG4gIH1cbiAgaWYgKCFwcmlzbS5sYW5ndWFnZXNbbGFuZ10pIHtcbiAgICB0cnkge1xuICAgICAgbG9hZExhbmd1YWdlcyhbbGFuZ10pXG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sYS53YXJuKFxuICAgICAgICBjaGFsay55ZWxsb3coXG4gICAgICAgICAgYFt2aXRlcHJlc3NdIFN5bnRheCBoaWdobGlnaHQgZm9yIGxhbmd1YWdlIFwiJHtsYW5nfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYFxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG4gIGlmIChwcmlzbS5sYW5ndWFnZXNbbGFuZ10pIHtcbiAgICBjb25zdCBjb2RlID0gcHJpc20uaGlnaGxpZ2h0KHN0ciwgcHJpc20ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKVxuICAgIHJldHVybiB3cmFwKGNvZGUsIHJhd0xhbmcpXG4gIH1cbiAgcmV0dXJuIHdyYXAoc3RyLCAndGV4dCcpXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTU2RkVcdTgwNDZjYmJcXFxcdHVyaW5nLXVpLWNvbXBvbmVudFxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTk4NzlcdTc2RUVcXFxcXHU1NkZFXHU4MDQ2Y2JiXFxcXHR1cmluZy11aS1jb21wb25lbnRcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxnbG9iYWwudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFOSVBMSVCOSVFNyU5QiVBRS8lRTUlOUIlQkUlRTglODElODZjYmIvdHVyaW5nLXVpLWNvbXBvbmVudC9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2dsb2JhbC50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXG5cbi8vIFx1OTg3OVx1NzZFRVx1NzZFRVx1NUY1NVxuZXhwb3J0IGNvbnN0IHByb2pSb290ID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIpXG5cbi8vIFx1OTg3OVx1NzZFRVx1NTQwRFx1NzlGMFxuZXhwb3J0IGNvbnN0IGRvY3NEaXJOYW1lID0gXCJkb2NzXCJcblxuLy8gXHU2NTg3XHU2ODYzXHU1RTkzXHU3NkVFXHU1RjU1XG5leHBvcnQgY29uc3QgZG9jUm9vdCA9IHJlc29sdmUocHJvalJvb3QsIGRvY3NEaXJOYW1lKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVyxTQUFTLG9CQUFvQjs7O0FDQUosT0FBTyxVQUF1QjtBQUN4WixPQUFPLFFBQVE7QUFFZixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLGlCQUFpQjs7O0FD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QUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsYUFBYSxDQUFDLEVBQUUsTUFBTSxVQUFVLE1BQU0sc0NBQXNDLENBQUM7QUFBQSxJQUM3RSxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sNEJBQVEsTUFBTSx3QkFBd0IsYUFBYSxVQUFTO0FBQUEsTUFDcEUsRUFBRSxNQUFNLGdCQUFPLE1BQU0sZ0NBQWdDLGFBQWEsZUFBYztBQUFBLElBQ2xGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0sdUJBQXdCO0FBQUEsVUFDaEQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSx1QkFBYSxNQUFNLCtCQUErQjtBQUFBLFlBQzFELEVBQUUsTUFBTSx1Q0FBbUIsTUFBTSxtQ0FBbUM7QUFBQSxZQUNwRSxFQUFFLE1BQU0sbUNBQWUsTUFBTSxnQ0FBZ0M7QUFBQSxZQUM3RCxFQUFFLE1BQU0sbUNBQWUsTUFBTSwrQkFBK0I7QUFBQSxZQUM1RCxFQUFFLE1BQU0sK0NBQWlCLE1BQU0sK0JBQStCO0FBQUEsVUFDaEU7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLGtDQUFjLE1BQU0sK0JBQStCO0FBQUEsWUFDM0QsRUFBRSxNQUFNLGtDQUFjLE1BQU0sOEJBQThCO0FBQUEsVUFDNUQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsSUFDZDtBQUFBO0FBQUEsSUFFQSxPQUFPLEVBQUUsT0FBTyxnQkFBZ0IsTUFBTSxjQUFjO0FBQUEsSUFDcEQsUUFBUSxRQUFNLFNBQVMsRUFBRTtBQUFBLEVBQzNCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
