import axios from 'axios';

export const getCalendar = async (id: string) =>
  await axios({
    method: 'get',
    url: `/api/calendars/${id}`,
    responseType: 'json',
  });
