<script setup lang="ts">
import { defineEmit, defineProps } from 'vue';

defineEmit(['email', 'phone', 'edit']);

const props = defineProps({
  email: { type: String },
  phone: { type: String },
  browse: { type: String },
});

const onBrowse = () => {
  window.open(props.browse);
};
</script>

<template>
  <n-td class="text-right">
    <TableButton v-if="props.browse" @click="onBrowse">
      <template #icon>
        <heroicons-solid-eye />
      </template>
    </TableButton>
    <TableButton v-if="props.email" @click="$emit('email')">
      <template #icon>
        <heroicons-solid-mail />
      </template>
    </TableButton>
    <TableButton v-if="props.phone" @click="$emit('phone')">
      <template #icon>
        <heroicons-solid-phone />
      </template>
    </TableButton>
    <TableButton v-if="props.phone" @click="$emit('edit')">
      <template #icon>
        <heroicons-solid-pencil />
      </template>
    </TableButton>
  </n-td>
</template>
