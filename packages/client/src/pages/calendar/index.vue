<script setup lang="ts">
import { useAxios } from '@vueuse/integrations';
import type { ICalendarItem } from '@diode/common';
const { data, error, isFinished } = useAxios<ICalendarItem[]>('/api/calendar/items');
</script>

<template>
  <CalendarItemList v-if="data && isFinished" :items="data" />
  <LoadingError v-else-if="error" :error="error" />
  <LoadingList v-else />
</template>

<route lang="yaml">
name: calendar
</route>
