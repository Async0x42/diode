import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import ViteComponents, { HeadlessUiResolver, VueUseComponentsResolver, NaiveUiResolver } from 'vite-plugin-components';
import Markdown from 'vite-plugin-md';
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Prism from 'markdown-it-prism';
import LinkAttributes from 'markdown-it-link-attributes';
import { visualizer } from 'rollup-plugin-visualizer';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    fs: {
      strict: true,
    },
    proxy: {
      '/api': 'http://localhost:7000/',
    },
  },
  build: {
    rollupOptions: {
      plugins: [visualizer() as any],
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (id) => id.endsWith('.md'),

      globalComponentsDeclaration: true,

      // auto import icons
      customComponentResolvers: [
        NaiveUiResolver(),
        HeadlessUiResolver(),
        VueUseComponentsResolver(),

        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/integrations', 'fuse.js', '@heroicons/vue/outline', 'date-fns'],
    exclude: ['vue-demi'],
  },
});
