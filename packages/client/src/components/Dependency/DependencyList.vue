<script setup lang="ts">
import { defineProps } from 'vue';
import type { IDependency } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  dependencies: { type: Array as PropType<IDependency[]>, required: true },
});

const { results } = useRouteSearchWithData(props.dependencies, ['name']);
</script>

<template>
  <TableView :headers="['Name', 'End of Support', 'Applications', 'Servers', '']">
    <DependencyListItem v-for="dependency in results" :key="dependency.id" :dependency="dependency" />
  </TableView>
</template>
