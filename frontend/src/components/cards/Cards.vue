<template>
    <div class="card" :class="state" @click="stepDisplay = !stepDisplay">
        <div class="card-icon">
            <img :src="icon" :alt="`${title} icon`" />
        </div>
        <div class="card-content">
            <div class="card-title-container">
                <h2 class="card-title">{{ title }}</h2>
                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
            <p class="card-description">{{ description }}</p>
            <p class="card-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline; margin-right: 4px; vertical-align: middle;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {{ date }}
            </p>
            <div class="card-steps" v-if="stepDisplay">
                <Steps 
                    v-for="(step, index) in steps" 
                    :key="index" 
                    :label="step.label" 
                    :done="step.done" 
                    @toggle="$emit('toggle-step', index)" 
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Steps from '../steps/Steps.vue';

    const stepDisplay = ref(false);

    defineProps({
        state: {
            type: String,
            required: false,
            default: 'next',
            validator: (value) => ['done', 'current', 'next'].includes(value)
        },
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        steps: {
            type: Array,
            required: true,
            default: () => []
        }
    });
</script>

<style src="./cards.css" scoped></style>