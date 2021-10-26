import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import { UserModule } from '~/types';

import 'primevue/resources/themes/arya-purple/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css'; // flex

// Setup PrimeVue
export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(PrimeVue);
  app.use(ConfirmationService);
  app.use(ToastService);
  app.directive('ptooltip', Tooltip);
  app.directive('tooltip', Tooltip);
};
