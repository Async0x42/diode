<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import CalendarItemList from '~/components/CalendarItemList.vue';
import LoadingList from '~/components/LoadingList.vue';
import LoadingError from '~/components/LoadingError.vue';
const { data, error, isFinished } = useAxios('/api/calendar/items');
</script>

<template>
  <CalendarItemList v-if="isFinished" :items="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: calendar
</route>
