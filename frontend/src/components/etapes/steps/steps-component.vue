<template>
    <label class="step" @click.stop>
        <input 
            type="checkbox" 
            :checked="done"
            @change="$emit('toggle')"
            @keydown.space.prevent="$emit('toggle')"
            @keydown.enter.prevent="$emit('toggle')"
            class="step-checkbox"
        />
        <span class="step-label" :class="{ 'step-label--done': done }">
            {{ label }}
        </span>
    </label>
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