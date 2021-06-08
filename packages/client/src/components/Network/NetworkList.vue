<script setup lang="ts">
import { defineProps } from 'vue';
import type { INetwork } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  networks: { type: Array as PropType<INetwork[]>, required: true },
});

const { results } = useRouteSearchWithData(props.networks, ['name']);
</script>

<template>
  <TableWrapper>
    <TableView :headers="['Name', '']">
      <NetworkListItem v-for="network in results" :key="network.id" :network="network" />
    </TableView>
  </TableWrapper>
</template>
