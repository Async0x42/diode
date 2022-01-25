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
  <n-td
    class="text-right"
    :class="[(props.email || props.phone || props.browse) ? 'min-w-29 max-w-29' : 'min-w-13 max-w-13']"
  >
    <div class="flex flex-wrap">
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
      <TableButton @click="$emit('edit')">
        <template #icon>
          <heroicons-solid-pencil />
        </template>
      </TableButton>
    </div>
  </n-td>
</template>
