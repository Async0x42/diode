<script setup lang="ts">
import { defineProps } from 'vue';
import type { IFqdn } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  fqdn: { type: Array as PropType<IFqdn[]>, required: true },
});

// server is sometimes undefined, and throws and error for fuse.js
// const { results } = useRouteSearchWithData(props.fqdn, ['name', 'server']);
const { results } = useRouteSearchWithData(props.fqdn, ['name', 'servers.name', 'servers.ip', 'applications.name', 'applications.shortName']);
</script>

<template>
  <div class="min-w-full -my-2 py-2 align-middle inline-block">
    <div class="border-b border-gray-200 shadow overflow-hidden sm:rounded-lg">
      <table class="divide-y min-w-full divide-gray-200">
        <TableHeader :headers="['Name', 'Server', 'Applications', '']" />
        <tbody class="divide-y bg-white divide-gray-200">
          <FqdnListItem v-for="entry in results" :key="entry.id" :fqdn="entry" />
        </tbody>
      </table>
    </div>
  </div>
</template>
