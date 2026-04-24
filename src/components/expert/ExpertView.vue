<template>
  <div>
    <!-- Category filter chips -->
    <div class="expert-toolbar">
      <v-chip
        size="small"
        :variant="ui.expertCategory === null ? 'flat' : 'tonal'"
        color="primary"
        class="expert-chip"
        @click="ui.expertCategory = null"
      >
        {{ t('expert.all') }}
      </v-chip>
      <v-chip
        v-for="cat in expertCategories"
        :key="cat.key"
        size="small"
        :variant="ui.expertCategory === cat.key ? 'flat' : 'outlined'"
        color="primary"
        class="expert-chip"
        @click="ui.expertCategory = cat.key"
      >
        {{ l(cat.label).split('—')[0].trim() }}
      </v-chip>
    </div>

    <div class="expert-grid">
      <ExpertCard v-for="item in filteredExpert" :key="item.id" :item="item" />
    </div>

    <div v-if="filteredExpert.length === 0" class="pa-16 text-center">
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
import { expertItems } from '@/data/parameters'
import type { L } from '@/types'
import ExpertCard from './ExpertCard.vue'

const { t } = useI18n()
const ui = useUiStore()
const l = useL()

// Unique category list; key is stable (ru value), label is bilingual
const expertCategories = computed(() => {
  const seen = new Set<string>()
  return expertItems.reduce<{ key: string; label: L }[]>((acc, item) => {
    if (!seen.has(item.category.ru)) {
      seen.add(item.category.ru)
      acc.push({ key: item.category.ru, label: item.category })
    }
    return acc
  }, [])
})

// Items filtered by active category chip and search query
const filteredExpert = computed(() => {
  let result = expertItems

  if (ui.expertCategory) {
    result = result.filter((i) => i.category.ru === ui.expertCategory)
  }

  if (ui.searchQuery) {
    const q = ui.searchQuery.toLowerCase()
    result = result.filter(
      (item) =>
        l(item.title).toLowerCase().includes(q) ||
        item.block.toLowerCase().includes(q) ||
        (item.note ? l(item.note).toLowerCase().includes(q) : false) ||
        item.steps.some(
          (s) =>
            s.param.toLowerCase().includes(q) ||
            (s.value?.toLowerCase().includes(q) ?? false) ||
            (s.desc ? l(s.desc).toLowerCase().includes(q) : false) ||
            (s.options?.some(
              (o) => o.value.toLowerCase().includes(q) || l(o.label).toLowerCase().includes(q),
            ) ?? false),
        ),
    )
  }

  return result
})
</script>

<style scoped>
.expert-toolbar {
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  background: white;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
.expert-chip {
  cursor: pointer;
  user-select: none;
}
.expert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 14px;
  padding: 20px;
}
</style>
