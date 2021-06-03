<script setup lang="ts">
import { defineProps } from 'vue';
import type { IServerType } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  serverTypes: { type: Array as PropType<IServerType[]>, required: true },
});

const { results } = useRouteSearchWithData(props.serverTypes, ['name']);
</script>

<template>
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <TableHeader :headers="['Name', '']" />
        <tbody class="divide-y bg-white divide-gray-200">
          <ServerTypeListItem v-for="type in results" :key="type.id" :server-type="type" />
        </tbody>
      </table>
    </div>
  </div>
</template>
