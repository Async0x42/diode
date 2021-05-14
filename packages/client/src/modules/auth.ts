import { user } from '~/logic';
import { UserModule } from '~/types';

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      const publicPages = ['/', '/register'];
      const authRequired = !publicPages.includes(to.path);
      const loggedIn = user.value;

      // trying to access a restricted page + not logged in
      // redirect to login page
      if (authRequired && !loggedIn) {
        next({ name: 'login' });
      } else {
        next();
      }
    });
  }
};
