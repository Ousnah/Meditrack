<template>
    <div class="step" @click="$emit('toggle')">
        <div class="step-circle" :class="{ 'step-circle--done': done }">
            <svg v-if="done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <span class="step-label" :class="{ 'step-label--done': done }">
            {{ label }}
        </span>
    </div>
</template>

<script setup>
defineProps({
    done: {
        type: Boolean,
        required: true
    },
    label: {
        type: String,
        required: true
    }
});


</script>

<style src="./steps.css" scoped></style>