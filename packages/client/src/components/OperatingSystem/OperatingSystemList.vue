<script setup lang="ts">
import { defineProps } from 'vue';
import type { IOperatingSystem } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  operatingSystems: { type: Array as PropType<IOperatingSystem[]>, required: true },
});

const { results } = useRouteSearchWithData(props.operatingSystems, ['name']);
</script>

<template>
  <TableView :headers="['Name', 'End of Support', '']">
    <OperatingSystemListItem v-for="os in results" :key="os.id" :operating-system="os" />
  </TableView>
</template>
