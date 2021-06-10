<script setup lang="ts">
import { defineProps } from 'vue';
import type { IZone } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  zones: { type: Array as PropType<IZone[]>, required: true },
});

const { results } = useRouteSearchWithData(props.zones, ['name']);
</script>

<template>
  <TableWrapper>
    <TableView :headers="['Name', '']">
      <ZoneListItem v-for="zone in results" :key="zone.id" :zone="zone" />
    </TableView>
  </TableWrapper>
</template>
