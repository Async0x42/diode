import { ref, watchEffect, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Fuse from 'fuse.js';
import type { Ref } from 'vue';

const searchStorage: { [key: string]: Ref<string> } = {};

export const useSearch = (key: string) => {
  if (searchStorage[key]) return searchStorage[key];

  searchStorage[key] = ref('');
  return searchStorage[key];
};

export const useRouteSearch = () => {
  const route = useRoute();
  return useSearch(route.path);
};

// see this for typing issues: https://github.com/vuejs/vue-next/issues/2136
export const useRouteSearchWithData = <T>(data: T[], keys: string[]) => {
  const searchData = reactive(data);
  const search = useRouteSearch();
  const options: Fuse.IFuseOptions<T> = {
    threshold: 0,
    ignoreLocation: true,
    keys,
  };
  const fuse = new Fuse(data, options);
  const results = ref<T[]>([]);

  watchEffect(() => {
    if (search.value.length === 0) {
      results.value = searchData;
    } else {
      const searchResults = fuse.search(search.value);
      const searchIds = searchResults.map((r) => r.refIndex);
      results.value = searchData.filter((contact, index) => searchIds.includes(index));
    }
  });

  return { search, results };
};
