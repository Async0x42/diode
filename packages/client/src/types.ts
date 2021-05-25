import { ViteSSGContext } from 'vite-ssg';
import type { FieldNode } from 'vue-hooks-form/dist/src/utils';

export type UserModule = (ctx: ViteSSGContext) => void;

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
