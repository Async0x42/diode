import { nextTick } from 'vue';
import { useLoadingBar } from 'naive-ui';
import { UserModule } from '~/types';

export const loadingBar = useLoadingBar();

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      if (!from || to.path !== from.path) {
        loadingBar?.start();
      }
      next();
    });
    router.afterEach((to, from) => {
      if (!from || to.path !== from.path) {
        loadingBar?.finish();
      }
      if (to.hash && to.hash !== from.hash) {
        nextTick(() => {
          const el = document.querySelector(to.hash);
          if (el) el.scrollIntoView();
        });
      }
    });
  }
};
