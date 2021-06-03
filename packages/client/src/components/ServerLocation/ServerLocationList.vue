<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerLocation } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  serverLocations: { type: Array as PropType<IServerLocation[]>, required: true },
});

const { results } = useRouteSearchWithData(props.serverLocations, ['name']);
</script>

<template>
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <TableHeader :headers="['Name', '']" />
        <tbody class="divide-y bg-white divide-gray-200">
          <ServerLocationListItem v-for="location in results" :key="location.id" :server-location="location" />
        </tbody>
      </table>
    </div>
  </div>
</template>
