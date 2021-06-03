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
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Servers</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <th scope="col" class="py-3 px-6 relative">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y bg-white divide-gray-200">
          <ApplicationListItem v-for="application in results" :key="application.id" :application="application" />
        </tbody>
      </table>
    </div>
  </div>
</template>
