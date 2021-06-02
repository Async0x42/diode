<script setup lang="ts">
import SidebarMobile from '~/components/Sidebar/SidebarMobile.vue';
import SidebarDesktop from '~/components/Sidebar/SidebarDesktop.vue';
import Header from '~/components/Header/Header.vue';
</script>

<template>
  <div class="bg-white flex h-screen overflow-hidden">
    <SidebarMobile />
    <SidebarDesktop />

    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <Header />

      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <router-view />
      </main>
    </div>
  </div>
</template>
