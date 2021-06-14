import { nextTick, ref } from 'vue';
import { useLoadingBar } from 'naive-ui';
import { UserModule } from '~/types';

export const loadingBar = ref(useLoadingBar());

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      if (!from || to.path !== from.path) {
        if (loadingBar.value) {
          loadingBar.value.start();
        }
      }
      next();
    });
    router.afterEach((to, from) => {
      if (!from || to.path !== from.path) {
        if (loadingBar.value) {
          loadingBar.value.finish();
        }
        if (to.hash && to.hash !== from.hash) {
          nextTick(() => {
            const el = document.querySelector(to.hash);
            if (el) el.scrollIntoView();
          });
        }
      }
    });
  }
};
