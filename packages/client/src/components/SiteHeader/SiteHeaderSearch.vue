<script setup lang="ts">
import { useRouteSearch } from '~/logic';

const searchBar = useRouteSearch();
</script>

<template>
  <n-input v-model:value="searchBar" placeholder="Search">
    <template #affix>
      <n-icon><heroicons-solid-search /></n-icon>
    </template>
  </n-input>
</template>
