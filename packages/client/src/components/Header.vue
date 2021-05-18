<script setup lang="ts">
import HeaderSearch from './HeaderSearch.vue';
import { toggleSidebar } from '~/logic';
</script>

<template>
  <div class="bg-white border-b flex border-gray-200 flex-shrink-0 h-16 z-10 relative">
    <button
      type="button"
      class="border-r border-gray-200 px-4 text-gray-500 lg:hidden focus:outline-none focus:ring-inset focus:ring-2 focus:ring-gray-900"
      @click="toggleSidebar()"
    >
      <span class="sr-only">Open sidebar</span>
      <heroicons-outline-menu-alt-2 class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex flex-1 px-4 justify-between">
      <HeaderSearch :key="$route.path" />
      <div class="flex ml-4 items-center lg:ml-6">
        <router-link
          v-if="$route.name != null && ['calendar', 'brds', 'contacts', 'rfcs'].includes($route.name.toString())"
          v-slot="{ navigate }"
          :to="$route.path + '/create'"
          custom
        >
          <button
            type="button"
            class="border border-transparent rounded-md font-medium bg-rose-600 shadow-sm text-sm text-white py-2 px-4 inline-flex items-center focus:outline-none hover:bg-rose-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            @click="navigate"
          >
            Create
          </button>
        </router-link>
        <router-link
          v-if="$route.name != null && ['calendar-item-view', 'brd-view', 'contact-view', 'rfc-view'].includes($route.name.toString())"
          v-slot="{ navigate }"
          :to="$route.path.replace('/view', '/edit')"
          custom
        >
          <button
            type="button"
            class="border border-transparent rounded-md font-medium bg-rose-600 shadow-sm text-sm text-white py-2 px-4 inline-flex items-center focus:outline-none hover:bg-rose-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            @click="navigate"
          >
            Edit
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
