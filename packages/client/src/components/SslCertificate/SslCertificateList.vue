<script setup lang="ts">
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/composables';

const props = defineProps({
  sslCertificates: { type: Array as PropType<ISslCertificate[]>, required: true },
});

const { results } = useRouteSearchWithData(props.sslCertificates, ['sans', 'expiry']);
</script>

<template>
  <TableView :headers="['Subject Alternate Names', 'Expiry']">
    <SslCertificateListItem v-for="sslCert in results" :key="sslCert.id" :ssl-certificate="sslCert" />
  </TableView>
</template>
