<script setup lang="ts">
import { useRouteSearch } from '~/logic';

const searchBar = useRouteSearch();
</script>

<template>
  <n-input v-model="searchBar" placeholder="Search">
    <template #affix>
      <n-icon><cash-icon></cash-icon></n-icon>
    </template>
  </n-input>
</template>
