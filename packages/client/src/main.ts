import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';

// windicss layers
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css';

// windicss devtools support (dev only)
import 'virtual:windi-devtools';

import { router } from './router';

// https://github.com/antfu/vite-ssg
export const app = createApp(App);
const head = createHead();
app.use(router);
app.use(head);

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) => i.install?.({ app, router, isClient: true }));
Object.values(import.meta.globEager('./directives/*.ts')).forEach((i) => i.install?.({ app, router, isClient: true }));

app.mount('#app');
