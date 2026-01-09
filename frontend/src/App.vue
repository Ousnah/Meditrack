<script setup>
  import Steps from './components/steps/Steps.vue';
</script>

<template>
  <div id="app">
    <Steps :done="true" label="Step 1: Completed"></Steps>
    <Steps :done="false" label="Step 2: In Progress"></Steps>
    <Steps :done="false" label="Step 3: Pending"></Steps>
  </div>
</template>

<style scoped></style>
