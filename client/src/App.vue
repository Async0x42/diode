<script setup lang="ts">
import { useHead } from '@vueuse/head';

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'DIODE',
  meta: [{ name: 'description', content: 'Dynamic Information Organizer Dashboard for EPIC - Keeping our lights on!' }],
});
</script>

<template>
  <router-view />
</template>
