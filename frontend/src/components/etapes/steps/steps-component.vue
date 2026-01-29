<template>
    <div 
        tabindex="0" 
        class="step" 
        :aria-label="`étape : ${label}, état : ${done ? 'fait' : 'pas fait'}`"
        @keydown.space.prevent.stop="$emit('toggle')"
        @keydown.enter.prevent.stop="$emit('toggle')"
        @click.stop="$emit('toggle')"
    >
        <label class="step-control" @click.stop>
            <input
            type="checkbox"
            class="step-checkbox"
            tabindex="-1"
            :checked="done"
            @change="$emit('toggle')"
            @keydown.stop
            :aria-checked="done ? 'true' : 'false'"
            :aria-label="`étape : ${label}, état : ${done ? 'fait' : 'pas fait'}`"
            />
            <span class="step-label" :class="{ 'step-label--done': done }" aria-hidden="true">
            {{ label }}
            </span>
        </label>
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