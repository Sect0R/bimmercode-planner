<template>
  <div
    class="coding-row"
    :class="{ selected: plan.isSimpleSelected(item.id) }"
    @click="toggle"
  >
    <div>
      <div class="param-label">{{ l(item.label) }}</div>
      <span class="param-code">{{ item.desc }}</span>
    </div>
    <div class="param-info">{{ l(item.info) }}</div>
    <v-icon class="param-check" size="22">mdi-check-circle</v-icon>
  </div>
</template>

<script setup lang="ts">
import { usePlanStore } from '@/stores/plan'
import { useL } from '@/composables/useL'
import type { SimpleItem, Category } from '@/types'

const props = defineProps<{
  item: SimpleItem
  category: Pick<Category, 'id' | 'title' | 'icon'>
}>()

const plan = usePlanStore()
const l = useL()

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
.param-check {
  color: var(--bmw-blue);
  opacity: 0;
  transition: opacity 0.15s;
}
.coding-row.selected .param-check { opacity: 1; }
</style>
