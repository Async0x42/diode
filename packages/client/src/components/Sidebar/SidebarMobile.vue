<script setup lang="ts">
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { navigation, projects, isSidebarOpen, toggleSidebar } from '~/logic';
</script>

<template>
  <TransitionRoot as="template" :show="isSidebarOpen">
    <Dialog as="div" static class="flex inset-0 z-40 fixed lg:hidden" :open="isSidebarOpen" @close="toggleSidebar()">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="bg-gray-600 bg-opacity-75 inset-0 fixed" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div class="flex flex-col max-w-xs bg-gray-800 flex-1 w-full pt-5 pb-4 relative">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="-mr-12 pt-2 top-0 right-0 absolute">
              <button
                type="button"
                class="rounded-full flex h-10 ml-1 w-10 items-center justify-center focus:outline-none focus:ring-inset focus:ring-white focus:ring-2"
                @click="toggleSidebar()"
              >
                <span class="sr-only">Close sidebar</span>
                <heroicons-outline-x class="h-6 text-white w-6" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <div class="flex flex-shrink-0 px-4 items-center">
            <heroicons-solid-light-bulb class="h-8 text-indigo-600 w-8" aria-hidden="true" />
            <div class="ml-2 w-auto text-gray-300">
              <div class="font-bold text-center text-xl">DIODE</div>
              <div class="text-xs">Keeping the lights on</div>
            </div>
          </div>
          <div class="flex-1 h-0 mt-5 overflow-y-auto">
            <nav class="px-2">
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
                      isExactActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                    :aria-current="isExactActive ? 'page' : undefined"
                    @click="navigate"
                  >
                    <component
                      :is="item.icon"
                      :class="[isExactActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 h-6 w-6']"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </router-link>
              </div>
              <div class="mt-10">
                <p class="font-semibold text-xs tracking-wider px-2 text-gray-400 uppercase">Projects</p>
                <div class="space-y-1 mt-2">
                  <a
                    v-for="project in projects"
                    :key="project.id"
                    :href="project.href"
                    class="rounded-md flex font-medium text-base py-2 px-2 text-gray-300 items-center hover:text-white hover:bg-gray-700"
                  >
                    <span class="truncate">{{ project.name }}</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <SidebarFooter />
        </div>
      </TransitionChild>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>
