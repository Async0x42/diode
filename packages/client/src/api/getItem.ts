import axios from 'axios';
import authHeader from '~/services/auth-header';

export const getItem = async (id: string) =>
  await axios({
    headers: authHeader(),
    method: 'get',
    url: `/api/calendar/items/${id}`,
    responseType: 'json',
  });
