import { user, verifyToken } from '~/logic';
import { UserModule } from '~/types';

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async (to, from, next) => {
      const publicPages = ['/', '/register'];
      const authRequired = !publicPages.includes(to.path);
      const loggedIn = user.value;

      if (loggedIn && authRequired) {
        const tokenIsValid = await verifyToken();
        if (!tokenIsValid) {
          user.value = null;
          next({ name: 'login' });
        }
      }

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
