import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from './App.vue';
import 'tailwindcss/tailwind.css';
import './styles/main.css';

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(ctx));
  Object.values(import.meta.globEager('./directives/*.ts')).map((i) => i.install?.(ctx));
});
