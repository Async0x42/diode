import axios from 'axios';

export const getItems = async (calendarId: string) =>
  await axios({
    method: 'get',
    url: `/api/calendars/${calendarId}/items`,
    responseType: 'json',
  });
