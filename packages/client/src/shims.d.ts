declare interface Window {
  // extend the window
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import type { DefineComponent  } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// fix for icon plugin not supporting typescript
declare module '~icons/*';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}