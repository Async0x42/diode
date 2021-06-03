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
  <TableWrapper>
    <TableView :headers="['Name', '']">
      <OperatingSystemListItem v-for="os in results" :key="os.id" :operating-system="os" />
    </TableView>
  </TableWrapper>
</template>
