import { parseJSON, format } from 'date-fns';

export const formatTableDate = (jsonDate?: Date | number) => jsonDate && format(parseJSON(jsonDate), 'yyyy-MM-dd');
