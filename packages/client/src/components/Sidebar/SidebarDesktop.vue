<script setup lang="ts">
import { navigation, projects } from '~/logic';
</script>

<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-1 h-0">
        <div class="flex bg-gray-900 flex-shrink-0 h-16 px-4 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg" alt="Workflow" />
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="bg-gray-800 flex-1 py-4 px-2">
            <div class="space-y-1">
              <router-link
                v-for="item in navigation"
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
              <p class="font-semibold text-xs tracking-wider px-3 text-gray-400 uppercase">Projects</p>
              <div class="space-y-1 mt-2">
                <a
                  v-for="project in projects"
                  :key="project.id"
                  :href="project.href"
                  class="rounded-md flex font-medium text-sm py-2 px-3 text-gray-300 group items-center hover:text-white hover:bg-gray-700"
                >
                  <span class="truncate">
                    {{ project.name }}
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <SidebarFooter />
    </div>
  </div>
</template>
