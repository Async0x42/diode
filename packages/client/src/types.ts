import type { FieldNode } from 'vue-hooks-form/dist/src/utils';
import type { App } from 'vue';
import type { Router, RouteRecordRaw } from 'vue-router';
import type { HeadClient } from '@vueuse/head';

// taken from vite-ssg
export type UserModule<HasRouter extends boolean = true> = (ctx: {
  app: App<Element>;
  router: HasRouter extends true ? Router : undefined;
  routes: HasRouter extends true ? RouteRecordRaw[] : undefined;
  initialState: Record<string, any>;
  head: HeadClient | undefined;
  isClient: boolean;
}) => void;

export type FormField = {
  ref: (nodeRef: FieldNode) => void;
  value: any;
  error:
    | {
        message: string;
        field: string;
      }[]
    | undefined;
  validate: () => Promise<any>;
};
