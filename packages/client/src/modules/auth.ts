import { UserModule } from '~/types';

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      const publicPages = ['/', '/login', '/register'];
      const authRequired = !publicPages.includes(to.path);
      const loggedIn = localStorage.getItem('user');

      // trying to access a restricted page + not logged in
      // redirect to login page
      if (authRequired && !loggedIn) {
        next('/login');
      } else {
        next();
      }
    });
  }
};
