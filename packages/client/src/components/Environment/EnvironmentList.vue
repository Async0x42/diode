<script setup lang="ts">
import type { IEnvironment } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  environments: { type: Array as PropType<IEnvironment[]>, required: true },
});

const { results } = useRouteSearchWithData(props.environments, ['name']);
</script>

<template>
  <TableView :headers="['Name', '']">
    <EnvironmentListItem v-for="environment in results" :key="environment.id" :environment="environment" />
  </TableView>
</template>
