import axios from 'axios';

export const getItems = async (calendarid: number) =>
  await axios({
    method: 'get',
    url: `/api/calendars/${calendarId}/items`,
    responseType: 'json',
  });
