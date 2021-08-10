export const sortByPriority = (priorities: string[], array: { [key: string]: any }[], key: string) =>
  array.sort((a, b) => priorities.indexOf(a[key]) - priorities.indexOf(b[key]));
