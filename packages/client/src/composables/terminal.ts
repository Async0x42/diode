const _terminalOpen = ref(false);
export const isTerminalOpen = computed({
  get() {
    return _terminalOpen.value;
  },
  set(value: boolean) {
    _terminalOpen.value = value;
  },
});
