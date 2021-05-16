import axios from 'axios';

export const getItem = async (id: number, calendarid: number) =>
  await axios({
    method: 'get',
    url: `/api/calendars/${calendarId}/items/${id}`,
    responseType: 'json',
  });
