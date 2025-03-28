// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import expressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';


import icon from 'astro-icon';


import expressiveCode from 'astro-expressive-code'
// import { rehypeHeadingIds } from '@astrojs/markdown-remark'
// import rehypeExternalLinks from 'rehype-external-links'
// import rehypeKatex from 'rehype-katex'
// import rehypePrettyCode from 'rehype-pretty-code'
// import remarkEmoji from 'remark-emoji'
// import remarkMath from 'remark-math'
// import remarkSectionize from 'remark-sectionize'
// import remarkToc from 'remark-toc'

import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'


// https://astro.build/config
export default defineConfig({
  site: 'https://haroki.is-a.dev',
  integrations: [ expressiveCode({
    themes: ['github-light', 'github-dark'],
    plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    useDarkModeMediaQuery: false,
    themeCssSelector: (theme) => `.${theme.name.split('-')[1]}`,
    defaultProps: {
      wrap: true,
      collapseStyle: 'collapsible-auto',
      overridesByLang: {
        'ansi,bat,bash,batch,cmd,console,powershell,ps,ps1,psd1,psm1,sh,shell,shellscript,shellsession,text,zsh':
          {
            showLineNumbers: false,
          },
      },
    },
    styleOverrides: {
      borderColor: 'oklch(0.922 0 0)',
      codeFontFamily: 'var(--font-mono)',
      codeBackground:
        'color-mix(in oklab, var(--secondary) 70%, transparent)',
      frames: {
        editorActiveTabForeground: 'var(--muted-foreground)',
        editorActiveTabBackground:
          'color-mix(in oklab, var(--secondary) 70%, transparent)',
        editorActiveTabIndicatorBottomColor: 'transparent',
        editorActiveTabIndicatorTopColor: 'transparent',
        editorTabBarBackground: 'transparent',
        editorTabBarBorderBottomColor: 'transparent',
        frameBoxShadowCssValue: 'none',
        terminalBackground:
          'color-mix(in oklab, var(--secondary) 70%, transparent)',
        terminalTitlebarBackground: 'transparent',
        terminalTitlebarBorderBottomColor: 'transparent',
        terminalTitlebarForeground: 'var(--muted-foreground)',
      },
      lineNumbers: {
        foreground: 'var(--muted-foreground)',
      },
      uiFontFamily: 'var(--font-sans)',
    },
  }),
  mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
});