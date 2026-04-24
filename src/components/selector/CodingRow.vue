<template>
  <div
    class="coding-row"
    :class="{ selected: isSelected }"
    @click="toggle"
  >
    <div>
      <div class="param-label">{{ l(item.label) }}</div>
      <span class="param-code">{{ item.desc }}</span>
    </div>
    <div class="param-info">{{ l(item.info) }}</div>
    <button class="row-toggle-btn" :class="{ 'is-selected': isSelected }" @click.stop="toggle">
      <v-icon size="20">{{ isSelected ? 'mdi-check-circle' : 'mdi-plus-circle-outline' }}</v-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePlanStore } from '@/stores/plan'
import { useL } from '@/composables/useL'
import type { SimpleItem, Category } from '@/types'

const props = defineProps<{
  item: SimpleItem
  category: Pick<Category, 'id' | 'title' | 'icon'>
}>()

const plan = usePlanStore()
const l = useL()
const isSelected = computed(() => plan.isSimpleSelected(props.item.id))

function toggle() {
  plan.toggleSimple({ ...props.item, category: props.category })
}
</script>

<style scoped>
.coding-row {
  display: grid;
  grid-template-columns: minmax(220px, 360px) 1fr auto;
  gap: 20px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--card-bg);
  transition: background 0.12s, border-left 0.12s;
  cursor: pointer;
  align-items: center;
}
.coding-row:hover { background: var(--row-hover); }
.coding-row.selected {
  background: var(--selected-bg);
  border-left: 3px solid var(--selected-border);
  padding-left: 17px;
}
.param-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.3;
}
.param-code {
  display: inline-block;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.75rem;
  color: var(--bmw-blue);
  background: #dbeafe;
  padding: 2px 7px;
  border-radius: 4px;
  margin-top: 4px;
}
.param-info {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}
.row-toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  transition: color 0.15s;
}
.row-toggle-btn:hover { color: var(--bmw-blue); }
.row-toggle-btn.is-selected { color: var(--bmw-blue); }

@media (max-width: 600px) {
  .coding-row {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 8px 12px;
  }
  .param-info {
    grid-column: 1 / 2;
    font-size: 0.82rem;
  }
  .row-toggle-btn {
    grid-row: 1 / 3;
    grid-column: 2;
    align-self: center;
    padding: 8px;
  }
  .row-toggle-btn :deep(.v-icon) {
    font-size: 26px !important;
  }
}
</style>
