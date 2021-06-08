<script setup lang="ts">
import { defineProps } from 'vue';
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { useRouteSearchWithData } from '~/logic';

const props = defineProps({
  sslCertificates: { type: Array as PropType<ISslCertificate[]>, required: true },
});

const { results } = useRouteSearchWithData(props.sslCertificates, ['sans', 'expiry']);
</script>

<template>
  <TableWrapper>
    <TableView :headers="['SANs', 'Expiry']">
      <SslCertificateListItem v-for="sslCert in results" :key="sslCert.id" :ssl-certificate="sslCert" />
    </TableView>
  </TableWrapper>
</template>
