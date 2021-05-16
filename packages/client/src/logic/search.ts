import { ref, watchEffect, reactive } from 'vue';
import { useRoute } from 'vue-router';
import Fuse from 'fuse.js';
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

export const useRouteSearchWithData = <T>(data: T[], keys: string[]) => {
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
      results.value = reactive(data);
    } else {
      const searchResults = fuse.search(search.value);
      const searchIds = searchResults.map((r) => r.refIndex);
      results.value = reactive(data.filter((contact, index) => searchIds.includes(index)));
    }
  });

  return { search, results: ref(results) };
};
