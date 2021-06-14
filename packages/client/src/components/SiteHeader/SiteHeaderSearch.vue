<script setup lang="ts">
import { useRouteSearch } from '~/logic';

const searchBar = useRouteSearch();
</script>

<template>
  <div>
    <form class="flex w-full lg:ml-0" action="#" method="GET">
      <label for="search_field" class="sr-only">Search</label>
      <div class="w-full text-gray-400 relative focus-within:text-gray-600">
        <div class="flex inset-y-0 left-0 absolute items-center pointer-events-none">
          <heroicons-solid-search class="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id="search_field"
          v-model="searchBar"
          class="border-transparent h-full w-full py-2 pr-3 pl-8 placeholder-gray-500 text-gray-900 block sm:text-sm focus:border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0"
          placeholder="Search"
          type="search"
          name="search"
        />
      </div>
    </form>
  </div>
</template>
