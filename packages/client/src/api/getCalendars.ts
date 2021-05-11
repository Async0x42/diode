import axios from 'axios';

export const getCalendars = async () =>
  await axios({
    method: 'get',
    url: `/api/calendars`,
    responseType: 'json',
  });
