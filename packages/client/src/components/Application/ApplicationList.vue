<script setup lang="ts">
import { defineProps } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  applications: { type: Array as PropType<IApplication[]>, required: true },
});

const { results } = useRouteSearchWithData(props.applications, [
  'name',
  'shortName',
  'description',
  'fqdns.name',
  'servers.name',
  'servers.ip',
  'brds.title',
  'rfcs.title',
]);
</script>

<template>
  <TableView :headers="['Name', 'Servers', 'Description', '']">
    <ApplicationListItem v-for="application in results" :key="application.id" :application="application" />
  </TableView>
</template>
