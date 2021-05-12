import { useAxios } from '@vueuse/integrations';
import authHeader from '~/services/auth-header';

export const getCalendar = async () => {
  const { data, isFinished } = useAxios('/api/calendar', { headers: { authHeader } });
  return { data, isFinished };
};
