<script setup lang="ts">
import { navigation, projects } from '~/logic';
import SidebarFooter from '~/components/SidebarFooter.vue';
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
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                <component
                  :is="item.icon"
                  :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 h-6 w-6']"
                  aria-hidden="true"
                />
                {{ item.name }}
              </a>
            </div>
            <div class="mt-10">
              <p class="font-semibold text-xs tracking-wider px-3 text-gray-400 uppercase">Projects</p>
              <div class="space-y-1 mt-2">
                <a
                  v-for="project in projects"
                  :key="project.id"
                  :href="project.href"
                  class="rounded-md flex font-medium text-sm py-2 px-3 text-gray-300 group items-center hover:bg-gray-700 hover:text-white"
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
    </div>
    <SidebarFooter />
  </div>
</template>
