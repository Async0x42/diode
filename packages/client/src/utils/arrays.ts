export const sortByPriority = <T extends { [key: string]: any }>(priorities: string[], array: T[], key: string) =>
  array.sort((a, b) => priorities.indexOf(a[key]) - priorities.indexOf(b[key]));
