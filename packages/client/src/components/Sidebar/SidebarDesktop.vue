<script setup lang="ts">
import { computed } from 'vue';
import { navigation } from '~/logic';

const mainNav = computed(() => navigation.value.filter((n) => n.category !== 'settings'));
const settingsNav = computed(() => navigation.value.filter((n) => n.category === 'settings'));
</script>

<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-1 h-0">
        <div class="flex bg-gray-900 flex-shrink-0 h-16 px-4 items-center">
          <heroicons-solid-light-bulb class="h-8 text-gray-200 w-8" aria-hidden="true" />
          <div class="ml-2 w-auto text-gray-300">
            <div class="font-bold text-center text-xl">DIODE</div>
            <div class="text-xs">Keeping the lights on</div>
          </div>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="bg-gray-800 flex-1 py-4 px-2">
            <div class="space-y-1">
              <router-link
                v-for="item in mainNav"
                v-slot="{ href, navigate, isExactActive }"
                :key="item.name"
                :to="item.to ? item.to : undefined"
                custom
              >
                <a
                  :href="href"
                  :class="[
                    isExactActive ? 'bg-gray-900 text-white cursor-default' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  ]"
                  :aria-current="isExactActive ? 'page' : undefined"
                  @click="navigate"
                >
                  <component
                    :is="item.icon"
                    :class="[isExactActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 h-6 w-6']"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </router-link>
            </div>
            <div class="mt-10">
              <p class="font-semibold text-xs tracking-wider px-3 text-gray-400 uppercase">Settings</p>
              <div class="space-y-1 mt-2">
                <router-link
                  v-for="item in settingsNav"
                  v-slot="{ href, navigate, isExactActive }"
                  :key="item.name"
                  :to="item.to ? item.to : undefined"
                  custom
                >
                  <a
                    :href="href"
                    :class="[
                      isExactActive ? 'bg-gray-900 text-white cursor-default' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
                    ]"
                    :aria-current="isExactActive ? 'page' : undefined"
                    @click="navigate"
                  >
                    <span class="truncate">{{ item.name }}</span>
                  </a>
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <SidebarFooter />
    </div>
  </div>
</template>
