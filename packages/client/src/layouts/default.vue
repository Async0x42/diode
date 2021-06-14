<script setup lang="ts">
import { isMobile } from '~/logic';
</script>

<template>
  <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout">
    <!-- <SidebarMobile />
    <SidebarDesktop /> -->
    <SiteHeader />
    <router-view />
  </n-layout>
</template>
