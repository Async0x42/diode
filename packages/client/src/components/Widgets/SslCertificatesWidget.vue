<script setup lang="ts">
import { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { formatTableDate } from '~/utils';

const props = defineProps({
  sslCertificates: { type: Object as PropType<ISslCertificate[]>, required: true },
});
</script>

<template>
  <n-text v-for="sslCert in props.sslCertificates" :key="sslCert.id" tag="div" depth="1" class="mb-2 hover:text-teal-300">
    <template v-if="sslCert.expiry"> [{{ formatTableDate(sslCert?.expiry) }}] </template>
    {{ sslCert?.sans }}
  </n-text>
</template>
