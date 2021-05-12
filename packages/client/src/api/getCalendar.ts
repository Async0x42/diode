import axios from 'axios';
import authHeader from '~/services/auth-header';

export const getCalendar = async () =>
  await axios({
    headers: authHeader(),
    method: 'get',
    url: `/api/calendar`,
    responseType: 'json',
  });
