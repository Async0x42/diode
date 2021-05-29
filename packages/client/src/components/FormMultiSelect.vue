<script setup lang="ts">
import { defineEmit, defineProps, ref } from 'vue';
import type { PropType } from 'vue';
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';

const props = defineProps({
  options: { type: Array as PropType<{ id: number; name: string }[]>, required: true },
  modelValue: { type: Array as PropType<number[]>, default: () => [] },
  label: { type: String },
});

const selected: any = ref([]);

const emit = defineEmit(['update:modelValue']);

const changeSelection = () => {
  emit('update:modelValue', selected.value);
};

const toggleSelection = (selection: any) => {
  selected.value.includes(selection) ? selected.value.splice(selected.value.indexOf(selection), 1) : selected.value.push(selection);
  changeSelection();
  console.log(selected.value);
};
</script>

<template>
  <Listbox as="div">
    <ListboxLabel class="font-medium text-sm text-gray-700 block">
      {{ props.label }}
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="bg-white border rounded-md cursor-default border-gray-300 shadow-sm text-left w-full py-2 pr-10 pl-3 relative focus:outline-none sm:text-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <span v-if="selected.length > 1" class="block truncate">{{ selected.length }} items selected</span>
        <span v-else-if="selected.length === 1" class="block truncate">{{ props.options.find((o) => o.id === selected[0])?.name }}</span>
        <span v-else class="block truncate">Nothing Selected</span>
        <span class="flex pr-2 inset-y-0 right-0 absolute items-center pointer-events-none">
          <heroicons-solid-selector class="h-5 text-gray-400 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions
          class="bg-white rounded-md shadow-lg ring-black mt-1 text-base w-full max-h-60 py-1 ring-1 ring-opacity-5 z-10 absolute overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="option in props.options"
            :key="option.id"
            v-slot="{ active }"
            as="template"
            @click.prevent="toggleSelection(option.id)"
          >
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-8 pr-4']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                {{ option.name }}
              </span>

              <span
                v-if="selected.includes(option.id)"
                :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']"
              >
                <heroicons-solid-check class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
