<template>
  <nav ref="navRef" class="tab-bar" role="tablist" aria-label="Navigation principale">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-button', { active: activeTab === tab.id }]"
      :aria-selected="activeTab === tab.id"
      :aria-controls="`${tab.id}-panel`"
      role="tab"
      @click="selectTab(tab.id)"
    >
      <span
        class="tab-icon"
        :class="{ 'icon-active': activeTab === tab.id }"
        v-html="icons[tab.icon] || ''"
        aria-hidden="true"
        focusable="false"
      ></span>

      <span class="tab-label">{{ tab.label }}</span>
    </button>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import './TabBar.css'
import icons from './icons'
import { moveFocusToPanel } from './focus-utils'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  defaultTab: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['tab-change'])

const activeTab = ref(props.defaultTab)
const navRef = ref(null)



const selectTab = (tabId, userInitiated = true) => {
  if (userInitiated) {
    /* keep click activation behavior — external focus helper will run */
  }
  if (activeTab.value === tabId && !userInitiated) return
  activeTab.value = tabId
  emit('tab-change', tabId)
  if (userInitiated) moveFocusToPanel(tabId)
}

// Trap Tab/Shift+Tab at navbar ends and wrap focus to first/last button
const handleNavKeydown = (e) => {
  if (!navRef.value) return
  if (e.key !== 'Tab') return
  const buttons = Array.from(navRef.value.querySelectorAll('button'))
  if (!buttons.length) return
  const first = buttons[0]
  const last = buttons[buttons.length - 1]
  const active = document.activeElement

  if (!e.shiftKey && active === last) {
    e.preventDefault()
    first.focus()
  } else if (e.shiftKey && active === first) {
    e.preventDefault()
    last.focus()
  }
}

onMounted(() => {
  const firstId = props.tabs?.[0]?.id
  if (firstId) activeTab.value = firstId

  const firstBtn = navRef.value?.querySelector('button')
  if (firstBtn) firstBtn.focus()
  // trap Tab at navbar ends and wrap focus
  if (navRef.value) navRef.value.addEventListener('keydown', handleNavKeydown)
})

onBeforeUnmount(() => {
  if (navRef.value) navRef.value.removeEventListener('keydown', handleNavKeydown)
})
</script>

