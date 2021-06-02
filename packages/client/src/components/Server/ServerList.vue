<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServer } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  servers: { type: Array as PropType<IServer[]>, required: true },
});

const { results } = useRouteSearchWithData(props.servers, [
  'name',
  'ip',
  'fqdns.name',
  'applications.name',
  'applications.shortName',
  'operatingSystem.name',
  'types.name',
  'location.name',
]);
</script>

<template>
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Name</th>
            <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">FQDN</th>
            <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Applications</th>
            <th scope="col" class="py-3 px-6 relative">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y bg-white divide-gray-200">
          <ServerListItem v-for="server in results" :key="server.id" :server="server" />
        </tbody>
      </table>
    </div>
  </div>
</template>
