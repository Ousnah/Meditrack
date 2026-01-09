<template>
  <div class="tab-bar">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-button"
      :class="{ active: activeTab === tab.id }"
      @click="selectTab(tab.id)"
    >
      <svg
        v-if="tab.icon === 'home'"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M3 12l9-9 9 9M5 10v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-10"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <svg
        v-else-if="tab.icon === 'steps'"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v7"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <svg
        v-else-if="tab.icon === 'calendar'"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke-width="2" stroke-linecap="round" />
      </svg>

      <svg
        v-else-if="tab.icon === 'documents'"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"
          stroke-width="2"
          stroke-linecap="round"
        />
        <polyline points="13 2 13 9 20 9" stroke-width="2" stroke-linecap="round" />
      </svg>

      <span class="label">{{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  defaultTab: {
    type: String,
    default: 'home',
  },
});

const emit = defineEmits(['tab-change']);

const activeTab = ref(props.defaultTab);

const selectTab = (tabId) => {
  activeTab.value = tabId;
  emit('tab-change', tabId);
};
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  z-index: 50;
}

.tab-button {
  flex: 1 1 25%;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s;
  font-size: 10px;
  padding: 0;
}

.tab-button.active {
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
}

.tab-button:active {
  background: rgba(59, 130, 246, 0.12);
}

.icon {
  width: 24px;
  height: 24px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.label {
  font-weight: 500;
  font-size: 10px;
}

@media (min-width: 768px) {
  .tab-bar {
    height: 64px;
  }

  .tab-button {
    gap: 6px;
    font-size: 11px;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  .label {
    font-size: 11px;
  }
}
</style>

