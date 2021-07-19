<script setup lang="ts">
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  serverLocations: { type: Array as PropType<IServerLocation[]>, required: true },
});

const { results } = useRouteSearchWithData(props.serverLocations, ['name']);
</script>

<template>
  <TableView :headers="['Name', '']">
    <ServerLocationListItem v-for="location in results" :key="location.id" :server-location="location" />
  </TableView>
</template>
