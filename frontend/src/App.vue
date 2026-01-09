<script setup>
  import { ref } from 'vue';
  import Steps from './components/steps/Steps.vue';

  const step1Done = ref(true);
</script>

<template>
  <div id="app">
    <Steps :done="step1Done" label="Step 1: Completed" @toggle="() => step1Done = !step1Done"></Steps>
  </div>
</template>

<style scoped></style>
