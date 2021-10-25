<script setup lang="ts">
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { format, parseJSON } from 'date-fns';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  sslCertificates: { type: Array as PropType<ISslCertificate[]>, required: true },
});

const { results } = useRouteSearchWithData(props.sslCertificates, ['sans', 'expiry']);
</script>

<template>
  <DataTable class="p-datatable-sm" :value="results" responsive-layout="scroll">
    <Column field="name" sortable header="Name">
      <template #body="slotProps">
        <router-link class="group" :to="{ name: 'sslCertificate-view', params: { sslCertificateId: slotProps.data.id } }">
          <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ slotProps.data.sans }}</n-text>
          <n-text v-for="server in slotProps.data.servers" :key="server.id" tag="div" depth="3" class="group-hover:text-teal-500">{{
            server.name
          }}</n-text>
        </router-link>
      </template>
    </Column>
    <Column field="sslExpiry" sortable header="Expiry">
      <template #body="slotProps">
        <div v-if="slotProps.data.sslExpiry" class="text-gray-300 group-hover:text-teal-300">
          {{ format(parseJSON(slotProps.data.expiry), 'yyyy-MM-dd') }}
        </div>
      </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <TableCellQuickActions @edit="$router.push({ name: 'sslCertificate-edit', params: { sslCertificateId: slotProps.data.id } })" />
      </template>
    </Column>
  </DataTable>
</template>
