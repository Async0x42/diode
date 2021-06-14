<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouteSearchWithData } from '~/logic';
const { n } = useI18n();

const props = defineProps({
  brds: { type: Array as PropType<IBrd[]>, required: true },
});

const { results } = useRouteSearchWithData(props.brds, [
  'brdNumber',
  'title',
  'description',
  'relatedRequests',
  'status',
  'applications.name',
  'applications.shortName',
]);

const totalUpkeep = computed(() => results.value.map((r) => r.upkeepCost || 0).reduce((a, b) => a + b, 0));
const totalInitialCost = computed(() => results.value.map((r) => r.initialCost || 0).reduce((a, b) => a + b, 0));
</script>

<template>
  <TableView
    :headers="['Title', 'Priority', 'Status', 'Init Cost', 'Upkeep', '']"
    :footers="['', '', '', `${n(totalInitialCost, 'currency')}`, `${n(totalUpkeep, 'currency')}`, '']"
  >
    <BrdListItem v-for="brd in results" :key="brd.id" :brd="brd" />
  </TableView>
</template>
