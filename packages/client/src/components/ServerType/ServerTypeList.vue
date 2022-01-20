<script setup lang="ts">
import type { IServerType } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  serverTypes: { type: Array as PropType<IServerType[]>, required: true },
});

const { results } = useRouteSearchWithData(props.serverTypes, ['name']);
</script>

<template>
  <TableView :headers="['Name', '']">
    <ServerTypeListItem v-for="type in results" :key="type.id" :server-type="type" />
  </TableView>
</template>
