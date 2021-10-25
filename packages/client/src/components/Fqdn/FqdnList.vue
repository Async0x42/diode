<script setup lang="ts">
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
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'fqdn-view', params: { fqdnId: slotProps.data.id } }">
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ slotProps.data.name }}</n-text>
        </router-link>
      </template>
    </Column>
    <Column field="server" sortable header="Server">
      <template #body="slotProps">
        <TableCellServer :server="slotProps.data.server" />
      </template>
    </Column>
    <Column field="applications" header="Applications">
      <template #body="slotProps">
        <TableCellApplications :applications="slotProps.data.applications" />
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'fqdn-edit', params: { fqdnId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
