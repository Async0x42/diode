<script setup lang="ts">
import { defineProps } from 'vue';
import type { IApplication } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  applications: { type: Array as PropType<IApplication[]>, required: true },
});

const { results } = useRouteSearchWithData(props.applications, ['name', 'shortName', 'description']);
</script>

<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto">
      <div class="min-w-full py-2 align-middle inline-block">
        <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
          <table class="divide-y min-w-full divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Name</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Server</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">DNS</th>
                <th scope="col" class="font-medium text-left text-xs tracking-wider py-3 px-6 text-gray-500 uppercase">Description</th>
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
    </div>
  </div>
</template>
