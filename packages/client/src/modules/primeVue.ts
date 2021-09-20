import PrimeVue from 'primevue/config';
import { UserModule } from '~/types';
import 'primevue/resources/themes/arya-purple/theme.css';
import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

// Setup PrimeVue
export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(PrimeVue);
};
