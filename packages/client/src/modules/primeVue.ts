import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import { UserModule } from '~/types';

import 'primevue/resources/themes/arya-purple/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

// Setup PrimeVue
export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(PrimeVue);
  app.use(ConfirmationService);
};
