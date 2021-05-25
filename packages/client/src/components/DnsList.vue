<script setup lang="ts">
import { defineProps } from 'vue';
import type { IDns } from '@diode/common';
import type { PropType } from 'vue';
import DnsListItem from './DnsListItem.vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  dns: { type: Array as PropType<IDns[]>, required: true },
});

const { results } = useRouteSearchWithData(props.dns, ['name', 'ip']);
</script>

<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="min-w-full py-2 align-middle inline-block sm:px-6 lg:px-8">
        <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
          <table class="divide-y min-w-full divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Name</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">IP</th>
                <th scope="col" class="py-3 px-6 relative">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y bg-white divide-gray-200">
              <DnsListItem v-for="entry in results" :key="entry.id" :dns="entry" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
