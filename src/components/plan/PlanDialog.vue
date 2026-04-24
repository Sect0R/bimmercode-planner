<template>
  <v-dialog v-model="ui.planOpen" max-width="760" scrollable>
    <v-card rounded="lg" style="overflow: hidden">
      <div class="plan-title">
        <v-icon class="mr-2" size="20">mdi-format-list-checks</v-icon>
        {{ t('plan.title') }}
        <v-chip v-if="plan.totalSelected" size="x-small" color="blue-lighten-4" class="ml-2">
          {{ plan.totalSelected }}
        </v-chip>
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" size="small" color="white" @click="ui.planOpen = false" />
      </div>

      <v-card-text class="pa-0" style="max-height: 60vh; overflow-y: auto">
        <template v-if="plan.totalSelected">

          <!-- Simple mode items grouped by category -->
          <v-list v-if="plan.selectedSimple.length" lines="two" class="pt-0">
            <template v-for="cat in plan.simpleByCategory" :key="cat.id">
              <v-list-subheader
                class="text-primary font-weight-bold"
                style="font-size: 0.8rem; letter-spacing: 0.5px"
              >
                <v-icon class="mr-1" size="14">{{ cat.icon }}</v-icon>
                {{ l(cat.title) }}
              </v-list-subheader>

              <v-list-item
                v-for="item in cat.items"
                :key="item.id"
                class="pl-10 pr-3"
                density="compact"
              >
                <v-list-item-title style="font-size: 0.9rem; font-weight: 600">
                  {{ l(item.label) }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span class="item-code">{{ item.desc }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="item-info mt-1" style="font-size: 0.8rem">
                  {{ l(item.info) }}
                </v-list-item-subtitle>
                <template #append>
                  <v-btn icon variant="text" size="x-small" color="grey" @click="plan.toggleSimple(item)">
                    <v-icon size="18">mdi-close-circle-outline</v-icon>
                  </v-btn>
                </template>
              </v-list-item>

              <v-divider class="my-1" />
            </template>
          </v-list>

          <!-- Expert mode items (flat list with step summary) -->
          <div v-if="plan.selectedExpert.length">
            <div class="plan-expert-header">
              <v-icon size="14" class="mr-1">mdi-code-braces</v-icon>
              {{ t('plan.expertSection') }}
            </div>
            <div v-for="item in plan.selectedExpert" :key="item.id" class="plan-expert-row">
              <div class="plan-expert-row-top">
                <span class="expert-block-badge">{{ item.block }}</span>
                <span class="plan-expert-title">{{ l(item.title) }}</span>
                <v-btn
                  icon
                  variant="text"
                  size="x-small"
                  color="grey"
                  class="ml-auto"
                  @click="plan.toggleExpert(item)"
                >
                  <v-icon size="18">mdi-close-circle-outline</v-icon>
                </v-btn>
              </div>
              <div class="plan-expert-steps">
                <div v-for="(s, si) in item.steps" :key="si" class="plan-expert-step">
                  <span class="expert-param">{{ s.param }}</span>
                  <template v-if="s.options">
                    <span class="expert-arrow">:</span>
                    <span v-for="(o, oi) in s.options" :key="oi" class="expert-value mr-1">
                      {{ o.value }}
                    </span>
                  </template>
                  <template v-else>
                    <span class="expert-arrow">-&gt;</span>
                    <span class="expert-value">{{ s.value }}</span>
                  </template>
                </div>
              </div>
            </div>
          </div>

        </template>

        <!-- Empty state -->
        <div v-else class="pa-12 text-center">
          <v-icon size="56" color="grey-lighten-2">mdi-playlist-remove</v-icon>
          <div class="text-body-1 text-grey mt-3">{{ t('plan.empty') }}</div>
          <div class="text-caption text-grey-lighten-1">{{ t('plan.emptyHint') }}</div>
        </div>
      </v-card-text>

      <v-divider />

      <v-card-actions class="pa-4 ga-2">
        <v-btn variant="outlined" color="grey" size="small" @click="plan.clearAll()">
          <v-icon start size="16">mdi-trash-can-outline</v-icon>
          {{ t('plan.reset') }}
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          variant="elevated"
          size="small"
          :disabled="!plan.totalSelected"
          @click="copyToClipboard"
        >
          <v-icon start size="16">mdi-content-copy</v-icon>
          {{ t('plan.copy') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'
import { usePlanStore } from '@/stores/plan'
import { useL } from '@/composables/useL'

const { t } = useI18n()
const ui = useUiStore()
const plan = usePlanStore()
const l = useL()

function copyToClipboard() {
  const lines: string[] = []

  for (const cat of plan.simpleByCategory) {
    lines.push(`\n[${l(cat.title)}]`)
    for (const item of cat.items) {
      lines.push(`  - ${l(item.label)}`)
      lines.push(`    Code: ${item.desc}`)
      if (item.info) lines.push(`    ${l(item.info)}`)
    }
  }

  if (plan.selectedExpert.length) {
    lines.push('\n[Expert Mode]')
    for (const item of plan.selectedExpert) {
      lines.push(`  - [${item.block}] ${l(item.title)}`)
      for (const s of item.steps) {
        if (s.options) {
          lines.push(`    ${s.param}: ${s.options.map((o) => `${o.value} = ${l(o.label)}`).join(' / ')}`)
        } else {
          lines.push(`    ${s.param} -> ${s.value}`)
        }
      }
    }
  }

  navigator.clipboard
    .writeText(lines.join('\n').trim())
    .then(() => ui.showToast(t('toast.copied')))
    .catch(() => ui.showToast(t('toast.copyFailed')))
}
</script>

<style scoped>
.plan-title {
  background: var(--bmw-dark);
  color: white;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
}

/* Match the param-code badge style used in CodingRow */
.item-code {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.75rem;
  color: var(--bmw-blue);
  background: #dbeafe;
  padding: 2px 7px;
  border-radius: 4px;
  opacity: 1;
}
:deep(.v-list-item-subtitle) {
  opacity: 1 !important;
}
.item-info {
  color: var(--text-main) !important;
}

.plan-expert-header {
  padding: 6px 16px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--bmw-blue);
  background: #eff6ff;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
}
.plan-expert-row {
  padding: 8px 16px 10px;
  border-bottom: 1px solid var(--border);
}
.plan-expert-row-top {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.plan-expert-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-main);
  flex: 1;
  min-width: 0;
}
.plan-expert-steps {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 4px;
}
.plan-expert-step {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  font-size: 0.77rem;
}
.expert-block-badge {
  display: inline-block;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--bmw-blue);
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 1px 8px;
  border-radius: 4px;
}
.expert-param {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.77rem;
  color: #1d4ed8;
  background: #eff6ff;
  padding: 1px 6px;
  border-radius: 3px;
}
.expert-arrow {
  color: #94a3b8;
  font-size: 0.8rem;
}
.expert-value {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.77rem;
  color: #065f46;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  padding: 1px 7px;
  border-radius: 3px;
  font-weight: 600;
}
.mr-1 {
  margin-right: 3px;
}
</style>
