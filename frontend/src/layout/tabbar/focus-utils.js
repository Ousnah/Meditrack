import { nextTick } from 'vue'

export const FOCUSABLE_SELECTOR = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]), [contenteditable]'

export async function moveFocusToPanel(tabId, navRef) {
  await nextTick()
  const panel = document.getElementById(`${tabId}-panel`)

  if (panel) {
    const first = panel.querySelector(FOCUSABLE_SELECTOR)
    if (first?.focus) {
      first.focus()
      return
    }

    const hadTab = panel.hasAttribute('tabindex')
    if (!hadTab) panel.setAttribute('tabindex', '-1')
    panel.focus()
    if (!hadTab) panel.removeAttribute('tabindex')
    return
  }

  const all = Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR))
  for (const el of all) {
    if (navRef?.value?.contains(el)) continue
    if (el.offsetParent === null) continue
    if (el.focus) {
      el.focus()
      return
    }
  }
}

export default moveFocusToPanel
