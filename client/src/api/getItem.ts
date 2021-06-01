import axios from 'axios';

export const getItem = async (id: number, calendarId: number) =>
  await axios({
    method: 'get',
    url: `/api/calendars/${calendarId}/items/${id}`,
    responseType: 'json',
  });
