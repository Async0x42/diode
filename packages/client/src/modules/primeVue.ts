import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import type { UserModule } from '~/types';

import 'primevue/resources/themes/arya-purple/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // flex

// Setup PrimeVue
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(PrimeVue);
  app.use(ConfirmationService);
  app.use(ToastService);
  app.directive('tooltip', Tooltip);
};
