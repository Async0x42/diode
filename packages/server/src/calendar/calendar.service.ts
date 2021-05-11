/**
 * Data Model Interfaces
 */

import { Calendar } from '@daiod/common';

/**
 * In-Memory Store
 */

let calendar: Calendar = {
  name: 'Calendar',
};

/**
 * Service Methods
 */

export const get = async (): Promise<Calendar> => calendar;

export const update = async (itemUpdate: Calendar): Promise<Calendar | null> => {
  calendar = { ...itemUpdate };
  return calendar;
};
