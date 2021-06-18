<script setup lang="ts">
import { defineProps } from 'vue';
import type { IBrd } from '@diode/common';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
const { n } = useI18n();

const props = defineProps({
  brd: { type: Object as PropType<IBrd>, required: true },
});
</script>

<template>
  <n-tr>
    <n-td>
      <router-link class="group" :to="{ name: 'brd-view', params: { brdId: brd.id } }">
        <n-text tag="div" depth="1" class="group-hover:text-teal-300">{{ props.brd.title }}</n-text>
        <n-text tag="div" depth="3" class="group-hover:text-teal-500">{{ props.brd.brdNumber }}</n-text>
      </router-link>
    </n-td>
    <n-td>{{ props.brd.priority }}</n-td>
    <n-td>{{ props.brd.status }}</n-td>
    <n-td>{{ n(props.brd.initialCost || 0, 'currency') }}</n-td>
    <n-td>{{ n(props.brd.upkeepCost || 0, 'currency') }}</n-td>
    <TableCellQuickActions @edit="$router.push({ name: 'brd-edit', params: { brdId: brd.id } })" />
  </n-tr>
</template>
