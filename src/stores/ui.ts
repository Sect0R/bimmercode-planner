import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Tab = 'selector' | 'expert'

export const useUiStore = defineStore('ui', () => {
  const drawer = ref(true)
  const currentTab = ref<Tab>('selector')
  const filterCategory = ref<string | null>(null)
  const expertCategory = ref<string | null>(null)
  const searchQuery = ref('')
  const planOpen = ref(false)

  const toast = ref({ visible: false, text: '' })
  let toastTimer: ReturnType<typeof setTimeout> | null = null

  function showToast(text: string) {
    if (toastTimer) clearTimeout(toastTimer)
    toast.value = { visible: true, text }
    toastTimer = setTimeout(() => {
      toast.value.visible = false
    }, 2200)
  }

  /** Switch to simple mode and filter by a specific ECU category. */
  function setCategory(id: string) {
    currentTab.value = 'selector'
    filterCategory.value = id
    searchQuery.value = ''
  }

  function switchToExpert() {
    currentTab.value = 'expert'
    filterCategory.value = null
    searchQuery.value = ''
  }

  /** Reset to simple mode with no active category filter. */
  function switchToAll() {
    currentTab.value = 'selector'
    filterCategory.value = null
  }

  return {
    drawer,
    currentTab,
    filterCategory,
    expertCategory,
    searchQuery,
    planOpen,
    toast,
    showToast,
    setCategory,
    switchToExpert,
    switchToAll,
  }
})
