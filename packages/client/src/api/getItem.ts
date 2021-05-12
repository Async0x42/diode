import { useAxios } from '@vueuse/integrations';
import authHeader from '~/services/auth-header';

export const getItem = async (id: string) => {
  const { data, isFinished } = useAxios(`/api/calendar/items/${id}`, { headers: { authHeader } });
  return { data, isFinished };
};
