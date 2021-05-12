import { useAxios } from '@vueuse/integrations';
import authHeader from '~/services/auth-header';

export const getItems = async () => {
  const { data, isFinished } = useAxios('/api/calendar/items', { headers: { authHeader } });
  return { data, isFinished };
};
