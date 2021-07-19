<script setup lang="ts">
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { format, parseJSON } from 'date-fns';

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate>, required: true },
});

const sslExpiry = computed(() => props.sslCertificate.expiry && format(parseJSON(props.sslCertificate.expiry), 'yyyy-MM-dd'));
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'sslCertificate-view', params: { sslCertificateId: sslCertificate.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.sslCertificate.sans }}</n-text>
        <n-text v-for="server in props.sslCertificate.servers" :key="server.id" tag="div" depth="3" class="group-hover:text-teal-500">{{
          server.name
        }}</n-text>
      </router-link>
    </n-td>
    <n-td>
      <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ sslExpiry }}</n-text>
    </n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'sslCertificate-edit', params: { sslCertificateId: sslCertificate.id } })" />
  </n-tr>
</template>
