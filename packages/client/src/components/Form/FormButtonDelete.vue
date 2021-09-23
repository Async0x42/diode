<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm';

const emit = defineEmits(['delete']);
const confirm = useConfirm();

const beforeDelete = (event: any) => {
  console.log('beforeDelete');
  confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to DELETE?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      emit('delete');
    },
    reject: () => {
      // callback to execute when user rejects the action
    },
  });
};
</script>

<template>
  <ConfirmPopup />
  <Button :attrs="$attrs" label="Delete" class="p-button-danger" @click="beforeDelete($event)" />
</template>
