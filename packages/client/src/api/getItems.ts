import axios from 'axios';
import authHeader from '~/services/auth-header';

export const getItems = async () =>
  await axios({
    headers: authHeader(),
    method: 'get',
    url: `/api/calendars/items`,
    responseType: 'json',
  });
