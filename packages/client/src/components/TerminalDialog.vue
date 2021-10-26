<script setup lang="ts">
import TerminalService from 'primevue/terminalservice';
import { isTerminalOpen } from '~/logic';

const commandHandler = (text: string) => {
  let response;
  const argsIndex = text.indexOf(' ');
  const command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

  switch (command) {
    case 'date':
      response = `Today is ${new Date().toDateString()}`;
      break;

    case 'greet':
      response = `Hola ${text.substring(argsIndex + 1)}`;
      break;

    case 'random':
      response = Math.floor(Math.random() * 100);
      break;

    default:
      response = `Unknown command: ${command}`;
  }

  TerminalService.emit('response', response);
};

onMounted(() => {
  TerminalService.on('command', commandHandler);
});

onBeforeUnmount(() => {
  TerminalService.off('command', commandHandler);
});
</script>

<template>
  <Dialog v-model:visible="isTerminalOpen" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
    <Terminal welcome-message="Welcome to DIODE(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="diode $" />
  </Dialog>
</template>
