<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  servers: { type: Array as PropType<IServer[]>, required: true },
});

const { results } = useRouteSearchWithData(props.servers, [
  'name',
  'ip',
  'fqdns.name',
  'applications.name',
  'applications.shortName',
  'operatingSystem.name',
  'types.name',
  'location.name',
  'physicalServer.name',
  'environment.name',
  'environment.shortName',
  'network.name',
  'network.shortName',
  'zone.name',
  'zone.shortName',
  'dependencies.name',
]);
</script>

<template>
  <TableView :headers="['Name', 'FQDN', 'Applications', 'Dependencies', '']">
    <ServerListItem v-for="server in results" :key="server.id" :server="server" />
  </TableView>
</template>
