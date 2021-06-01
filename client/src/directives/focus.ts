import { UserModule } from '~/types';

export const install: UserModule = ({ app }) => {
  app.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
      // Focus the element
      el.focus();
    },
  });
};
