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
  <n-td class="text-right">
    <span class="p-buttonset">
      <TableButton v-if="props.browse" @click="onBrowse" icon="heroicons-solid-eye" />
      <TableButton v-if="props.email" @click="$emit('email')" icon="heroicons-solid-mail" />
      <TableButton v-if="props.phone" @click="$emit('phone')" icon="heroicons-solid-phone" />
      <TableButton @click="$emit('edit')"><heroicons-solid-pencil/></TableButton>
    </span>
  </n-td>
</template>
