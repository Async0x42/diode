import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
import './styles/main.css';

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// https://github.com/antfu/vite-ssg
export const app = createApp(App);
const head = createHead();
app.use(router);
app.use(head);

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.({ app, router, isClient: true }));
Object.values(import.meta.globEager('./directives/*.ts')).map((i) => i.install?.({ app, router, isClient: true }));

app.mount('#app');
