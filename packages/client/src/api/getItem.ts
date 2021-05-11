import axios from 'axios';

export const getItem = async (id: string, calendarId: string) =>
  await axios({
    method: 'get',
    url: `/api/calendars/${calendarId}/items/${id}`,
    responseType: 'json',
  });
