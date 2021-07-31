<script setup lang="ts">
const props = defineProps({
  status: { type: String, required: true },
});

const currentStep = computed(() => {
  switch (props.status) {
    case 'Draft':
      return 1;
    case 'Assessment':
      return 2;
    case 'Design':
      return 3;
    case 'WIF':
      return 4;
    case 'SA':
      return 5;
    case 'Implementation':
      return 6;
    case 'Solution Setup':
      return 7;
    case 'Done':
      return 9;
    default:
      return 0;
  }
});

const getTypeOfStep = (step: number) => {
  if (currentStep.value === step) {
    return 'info';
  } else if (currentStep.value > step) {
    return 'success';
  } else if (currentStep.value < step) {
    return 'warning';
  }
};
</script>

<template>
  <n-timeline>
    <n-timeline-item :type="getTypeOfStep(1)" title="Draft" content="Initial draft of the BRD form and supporting documents" />
    <n-timeline-item :type="getTypeOfStep(2)" title="Assessment" content="Assessment and discussions with SSC" />
    <n-timeline-item :type="getTypeOfStep(3)" title="Design" content="SSC designs the setup and discusses" />
    <n-timeline-item :type="getTypeOfStep(4)" title="WIF" content="SSC collaborates on the work intake form details" />
    <n-timeline-item :type="getTypeOfStep(5)" title="SA" content="SA is submitted and signed off on" />
    <n-timeline-item :type="getTypeOfStep(6)" title="Implementation" content="SSC has provided the servers and they are accessible" />
    <n-timeline-item
      :type="getTypeOfStep(7)"
      title="Solution Setup"
      content="Application and related software is installed on the servers and application is working"
    />
    <n-timeline-item :type="getTypeOfStep(8)" title="Done" content="BRD process is complete" />
  </n-timeline>
</template>
