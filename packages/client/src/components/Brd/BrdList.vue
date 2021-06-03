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

const totalUpkeep = computed(() => results.value.map((r) => r.upkeepCost || 0).reduce((a, b) => a + b));
const totalInitialCost = computed(() => results.value.map((r) => r.initialCost || 0).reduce((a, b) => a + b));
</script>

<template>
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Priority</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Init Cost</TableHeaderCell>
            <TableHeaderCell>Upkeep</TableHeaderCell>
            <th scope="col" class="py-3 px-6 relative">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y bg-white divide-gray-200">
          <BrdListItem v-for="brd in results" :key="brd.id" :brd="brd" />
        </tbody>
        <tfoot class="bg-gray-50">
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <TableHeaderCell>
              {{ n(totalInitialCost, 'currency') }}
            </TableHeaderCell>
            <TableHeaderCell>
              {{ n(totalUpkeep, 'currency') }}
            </TableHeaderCell>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
