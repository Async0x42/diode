const currentDateTime = ref(new Date());
const updateCurrentDateTime = () => (currentDateTime.value = new Date());
setInterval(updateCurrentDateTime, 1000);

export const useCurrentDateTime = () => {
  return { currentDateTime };
};
