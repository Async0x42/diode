import { ref } from 'vue';
import { useRoute } from 'vue-router';
import type { Ref } from 'vue';

const searchStorage: { [key: string]: Ref<string> } = {};

export const useSearch = (key: string) => {
  if (!searchStorage[key]) {
    searchStorage[key] = ref('');

    return searchStorage[key];
  }

  return searchStorage[key];
};

export const useRouteSearch = () => {
  const route = useRoute();
  return useSearch(route.path);
};
