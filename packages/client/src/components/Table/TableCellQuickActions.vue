<script setup lang="ts">
defineEmits(['email', 'phone', 'edit']);

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
  <td class="text-right">
    <span class="p-buttonset">
      <TableButton v-if="props.browse" icon="heroicons-solid-eye" @click="onBrowse" />
      <TableButton v-if="props.email" icon="heroicons-solid-mail" @click="$emit('email')" />
      <TableButton v-if="props.phone" icon="heroicons-solid-phone" @click="$emit('phone')" />
      <TableButton @click="$emit('edit')"><heroicons-solid-pencil /></TableButton>
    </span>
  </td>
</template>
