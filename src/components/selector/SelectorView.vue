<template>
  <div>
    <div v-for="cat in filteredData" :key="cat.id">
      <div class="cat-sticky-header">
        <v-icon :icon="cat.icon" size="16" />
        {{ l(cat.title) }}
        <span class="cat-count">{{ cat.items.length }}</span>
      </div>
      <CodingRow
        v-for="item in cat.items"
        :key="item.id"
        :item="item"
        :category="{ id: cat.id, title: cat.title, icon: cat.icon }"
      />
    </div>

    <div v-if="filteredData.length === 0" class="pa-16 text-center">
      <v-icon size="56" color="grey-lighten-2">mdi-magnify-close</v-icon>
      <div class="text-body-1 text-grey mt-4">{{ t('common.notFound') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'
import { useL } from '@/composables/useL'
import { categories } from '@/data/parameters'
import CodingRow from './CodingRow.vue'

const { t } = useI18n()
const ui = useUiStore()
const l = useL()

// Filter categories and their items based on active category filter and search query
const filteredData = computed(() => {
  let result = categories.map((cat) => ({ ...cat, items: [...cat.items] }))

  if (ui.filterCategory) {
    result = result.filter((c) => c.id === ui.filterCategory)
  }

  if (ui.searchQuery) {
    const q = ui.searchQuery.toLowerCase()
    result = result
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (i) =>
            l(i.label).toLowerCase().includes(q) ||
            i.desc.toLowerCase().includes(q) ||
            l(i.info).toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.items.length > 0)
  }

  return result
})
</script>

<style scoped>
.cat-sticky-header {
  position: sticky;
  top: 64px;
  z-index: 10;
  background: var(--bmw-dark);
  color: white;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cat-count {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1px 8px;
  font-size: 0.7rem;
}
</style>
