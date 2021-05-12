<script setup lang="ts">
import { MenuAlt2Icon } from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import { useRouter, useRoute } from 'vue-router';
import { toggleSidebar } from '~/logic';

const route = useRoute();
</script>

<template>
  <div class="bg-white border-b flex border-gray-200 flex-shrink-0 h-16 z-10 relative">
    <button
      type="button"
      class="border-r border-gray-200 px-4 text-gray-500 lg:hidden focus:outline-none focus:ring-inset focus:ring-2 focus:ring-gray-900"
      @click="toggleSidebar()"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex flex-1 px-4 justify-between">
      <div class="flex flex-1">
        <form class="flex w-full lg:ml-0" action="#" method="GET">
          <label for="search_field" class="sr-only">Search</label>
          <div class="w-full text-gray-400 relative focus-within:text-gray-600">
            <div class="flex inset-y-0 left-0 absolute items-center pointer-events-none">
              <SearchIcon class="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search_field"
              class="border-transparent h-full w-full py-2 pr-3 pl-8 placeholder-gray-500 text-gray-900 block sm:text-sm focus:border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0"
              placeholder="Search"
              type="search"
              name="search"
            />
          </div>
        </form>
      </div>
      <div class="flex ml-4 items-center lg:ml-6">
        <router-link
          v-if="route.name != null && ['calendar', 'brds', 'contacts', 'rfcs'].includes(route.name.toString())"
          v-slot="{ navigate }"
          :to="route.fullPath + '/create'"
          custom
        >
          <button
            type="button"
            class="border border-transparent rounded-md font-medium bg-rose-600 shadow-sm text-sm text-white py-2 px-4 inline-flex items-center hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            @click="navigate"
          >
            Create
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
