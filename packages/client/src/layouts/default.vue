<script setup lang="ts">
</script>

<template>
  <n-layout position="absolute" class="root-layout">
    <SiteHeader />
    <n-layout
      :native-scrollbar="false"
      position="static"
      content-style="min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;"
    >
      <router-view class="px-2" />
    </n-layout>
  </n-layout>
</template>
