<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { ISslCertificate } from '@diode/common';
import type { PropType } from 'vue';
import { format, parseJSON } from 'date-fns';

const props = defineProps({
  sslCertificate: { type: Object as PropType<ISslCertificate>, required: true },
});

const sslExpiry = computed(() => props.sslCertificate.expiry && format(parseJSON(props.sslCertificate.expiry), 'yyyy-MM-dd'));
</script>

<template>
  <tr>
    <td class="py-4 px-6 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'sslCertificate-view', params: { sslCertificateId: sslCertificate.id } }">
          <div>
            <div class="font-medium text-sm text-gray-900">
              {{ props.sslCertificate.sans }}
            </div>
            <div class="text-sm text-gray-700">
              {{ sslExpiry }}
            </div>
          </div>
        </router-link>
      </div>
    </td>
    <td class="font-medium text-right text-sm py-4 px-6 whitespace-nowrap">
      <TableButtonEdit :to="{ name: 'sslCertificate-edit', params: { sslCertificateId: sslCertificate.id } }" />
    </td>
  </tr>
</template>
