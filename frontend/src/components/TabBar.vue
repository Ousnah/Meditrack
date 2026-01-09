<template>
  <div class="tab-bar">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-button', { active: activeTab === tab.id }]"
      @click="selectTab(tab.id)"
    >
      <!-- Home Icon -->
      <svg
        v-if="tab.icon === 'home'"
        :class="['tab-icon', { 'icon-active': activeTab === tab.id }]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>

      <!-- Steps Icon -->
      <svg
        v-if="tab.icon === 'steps'"
        :class="['tab-icon', { 'icon-active': activeTab === tab.id }]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>

      <!-- Calendar Icon -->
      <svg
        v-if="tab.icon === 'calendar'"
        :class="['tab-icon', { 'icon-active': activeTab === tab.id }]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>

      <!-- Documents Icon -->
      <svg
        v-if="tab.icon === 'documents'"
        :class="['tab-icon', { 'icon-active': activeTab === tab.id }]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="19" x2="15" y2="19" />
      </svg>

      <span class="tab-label">{{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import './TabBar.css'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => []
  },
  defaultTab: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['tab-change'])

const activeTab = ref(props.defaultTab)

const selectTab = (tabId) => {
  activeTab.value = tabId
  emit('tab-change', tabId)
}
</script>

