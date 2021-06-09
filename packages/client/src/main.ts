import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from './App.vue';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import './styles/main.css';

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, async (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(ctx));
  Object.values(import.meta.globEager('./directives/*.ts')).map((i) => i.install?.(ctx));

  // fixes window undefined error in ssr, used with <client-only> component
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/order
    await import('v-calendar').then((obj) => ctx.app.component('DatePicker', obj.DatePicker));
  }
});
