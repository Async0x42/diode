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
  <TableWrapper>
    <TableView :headers="['Name', 'Server', 'Applications', '']">
      <FqdnListItem v-for="entry in results" :key="entry.id" :fqdn="entry" />
    </TableView>
  </TableWrapper>
</template>
