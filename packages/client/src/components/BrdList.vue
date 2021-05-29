<script setup lang="ts">
import { defineProps } from 'vue';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  brds: { type: Array as PropType<IBrd[]>, required: true },
});

const { results } = useRouteSearchWithData(props.brds, ['brdNumber', 'title', 'description', 'relatedRequests', 'status']);
</script>

<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto">
      <div class="min-w-full py-2 align-middle inline-block">
        <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
          <table class="divide-y min-w-full divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Title</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Priority</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Status</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Init Cost</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Upkeep</th>
                <th scope="col" class="py-3 px-6 relative">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y bg-white divide-gray-200">
              <BrdListItem v-for="brd in results" :key="brd.id" :brd="brd" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
