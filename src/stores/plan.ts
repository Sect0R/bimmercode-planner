import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { SelectedSimpleItem, ExpertItem, PlanCategory } from '@/types'

const STORAGE_SIMPLE = 'bcp_selected'
const STORAGE_EXPERT = 'bcp_selected_expert'

export const usePlanStore = defineStore('plan', () => {
  const selectedSimple = ref<SelectedSimpleItem[]>([])
  const selectedExpert = ref<ExpertItem[]>([])

  /** Restore both lists from localStorage on app mount. */
  function load() {
    try {
      const s = localStorage.getItem(STORAGE_SIMPLE)
      if (s) selectedSimple.value = JSON.parse(s)
    } catch {
      // Ignore parse errors; start with empty list
    }
    try {
      const e = localStorage.getItem(STORAGE_EXPERT)
      if (e) selectedExpert.value = JSON.parse(e)
    } catch {
      // Ignore parse errors; start with empty list
    }
  }

  function saveSimple() {
    localStorage.setItem(STORAGE_SIMPLE, JSON.stringify(selectedSimple.value))
  }

  function saveExpert() {
    localStorage.setItem(STORAGE_EXPERT, JSON.stringify(selectedExpert.value))
  }

  const totalSelected = computed(() => selectedSimple.value.length + selectedExpert.value.length)

  /** Simple items grouped by category for the plan dialog. */
  const simpleByCategory = computed<PlanCategory[]>(() => {
    const map = new Map<string, PlanCategory>()
    for (const item of selectedSimple.value) {
      const { id, title, icon } = item.category
      if (!map.has(id)) map.set(id, { id, title, icon, items: [] })
      map.get(id)!.items.push(item)
    }
    return Array.from(map.values())
  })

  function isSimpleSelected(id: string) {
    return selectedSimple.value.some((i) => i.id === id)
  }

  function isExpertSelected(id: string) {
    return selectedExpert.value.some((i) => i.id === id)
  }

  /** Number of selected items belonging to a given ECU category. */
  function countByCategory(catId: string) {
    return selectedSimple.value.filter((i) => i.category.id === catId).length
  }

  function toggleSimple(item: SelectedSimpleItem) {
    const idx = selectedSimple.value.findIndex((i) => i.id === item.id)
    if (idx !== -1) selectedSimple.value.splice(idx, 1)
    else selectedSimple.value.push(item)
    saveSimple()
  }

  function toggleExpert(item: ExpertItem) {
    const idx = selectedExpert.value.findIndex((i) => i.id === item.id)
    if (idx !== -1) selectedExpert.value.splice(idx, 1)
    else selectedExpert.value.push(item)
    saveExpert()
  }

  function clearAll() {
    selectedSimple.value = []
    selectedExpert.value = []
    saveSimple()
    saveExpert()
  }

  return {
    selectedSimple,
    selectedExpert,
    totalSelected,
    simpleByCategory,
    load,
    toggleSimple,
    toggleExpert,
    clearAll,
    isSimpleSelected,
    isExpertSelected,
    countByCategory,
  }
})
