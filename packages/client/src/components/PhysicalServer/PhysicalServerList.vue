<script setup lang="ts">
import type { IPhysicalServer } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  servers: { type: Array as PropType<IPhysicalServer[]>, required: true },
});

const { results } = useRouteSearchWithData(props.servers, [
  // 'name',
  // 'baseOperatingSystem',
  // 'hypervisor',
  // 'deviceManufacturer',
  // 'deviceModel',
  // 'processorManufacturer',
  // 'processorModel',
  // 'clusterName',
  // 'location',
  // 'servers.name',
]);
</script>

<template>
  <TableView :headers="['Name', 'Servers (VM)', '']">
    <PhysicalServerListItem v-for="server in results" :key="server.id" :server="server" />
  </TableView>
</template>
