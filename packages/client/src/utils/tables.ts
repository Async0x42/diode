import { parseJSON, format } from 'date-fns';

export const formatTableDate = (jsonDate?: Date | number | string) => jsonDate && format(parseJSON(jsonDate), 'yyyy-MM-dd');
