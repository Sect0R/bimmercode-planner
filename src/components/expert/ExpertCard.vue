<template>
  <div class="expert-card" :class="{ 'expert-card-selected': plan.isExpertSelected(item.id) }">
    <div class="expert-card-header">
      <div class="header-content">
        <span class="expert-block-badge">{{ item.block }}</span>
        <div class="expert-card-title">{{ l(item.title) }}</div>
      </div>
      <v-btn
        :icon="plan.isExpertSelected(item.id) ? 'mdi-check-circle' : 'mdi-plus-circle-outline'"
        :color="plan.isExpertSelected(item.id) ? 'primary' : 'grey-lighten-1'"
        variant="text"
        size="small"
        @click.stop="plan.toggleExpert(item)"
      />
    </div>

    <div class="expert-card-body">
      <div v-for="(step, i) in item.steps" :key="i" class="expert-step">
        <div class="expert-step-line">
          <span class="expert-step-dot" />
          <div class="expert-step-content">

            <!-- Enum: param + options list -->
            <template v-if="step.options">
              <span class="expert-param">{{ step.param }}</span>
              <div v-if="step.desc" class="expert-step-desc mb-1">{{ l(step.desc) }}</div>
              <div class="expert-options">
                <div v-for="(opt, oi) in step.options" :key="oi" class="expert-option">
                  <span class="expert-value">{{ opt.value }}</span>
                  <span class="expert-option-label">{{ l(opt.label) }}</span>
                </div>
              </div>
            </template>

            <!-- Regular: param → value -->
            <template v-else>
              <div class="expert-step-main">
                <span class="expert-param">{{ step.param }}</span>
                <span class="expert-arrow">→</span>
                <span class="expert-value">{{ step.value }}</span>
              </div>
              <div v-if="step.desc" class="expert-step-desc">{{ l(step.desc) }}</div>
            </template>

          </div>
        </div>
      </div>

      <div v-if="item.note" class="expert-note">
        <v-icon size="13" class="mr-1" style="vertical-align: middle;">mdi-alert-circle-outline</v-icon>
        {{ l(item.note) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlanStore } from '@/stores/plan'
import { useL } from '@/composables/useL'
import type { ExpertItem } from '@/types'

defineProps<{ item: ExpertItem }>()
const plan = usePlanStore()
const l = useL()
</script>

<style scoped>
.expert-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-left: 3px solid var(--bmw-blue);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.15s, transform 0.15s;
}
.expert-card:hover {
  box-shadow: 0 4px 18px rgba(28,105,212,0.1);
  transform: translateY(-1px);
}
.expert-card.expert-card-selected {
  border-left-color: #16a34a;
  background: #f0fdf4;
}
.expert-card.expert-card-selected .expert-card-header {
  background: #dcfce7;
}

.expert-card-header {
  padding: 12px 8px 10px 14px;
  background: #fafcff;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  gap: 4px;
}
.header-content { flex: 1; min-width: 0; }

.expert-block-badge {
  display: inline-block;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: var(--bmw-blue);
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 1px 8px;
  border-radius: 4px;
  margin-bottom: 6px;
}
.expert-card-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.35;
}

.expert-card-body { padding: 10px 14px 12px; }

.expert-step {
  padding: 6px 0;
  border-bottom: 1px solid #f8fafc;
}
.expert-step:last-child { border-bottom: none; }

.expert-step-line { display: flex; gap: 8px; align-items: flex-start; }
.expert-step-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #cbd5e1;
  margin-top: 8px;
  flex-shrink: 0;
}
.expert-step-content { flex: 1; min-width: 0; }
.expert-step-main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  line-height: 1.9;
}

.expert-param {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.77rem;
  color: #1d4ed8;
  background: #eff6ff;
  padding: 1px 6px;
  border-radius: 3px;
  word-break: break-all;
}
.expert-arrow { color: #94a3b8; font-size: 0.8rem; font-weight: 300; flex-shrink: 0; }
.expert-value {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.77rem;
  color: #065f46;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  padding: 1px 7px;
  border-radius: 3px;
  font-weight: 600;
  word-break: break-word;
}
.expert-step-desc {
  font-size: 0.77rem;
  color: #94a3b8;
  margin-top: 1px;
  font-style: italic;
  padding-left: 1px;
  line-height: 1.4;
}
.mb-1 { margin-bottom: 4px; }

.expert-options { margin-top: 5px; display: flex; flex-direction: column; gap: 3px; padding-left: 2px; }
.expert-option { display: flex; align-items: center; gap: 8px; font-size: 0.77rem; }
.expert-option-label { color: var(--text-muted); font-size: 0.77rem; line-height: 1.4; }

.expert-note {
  margin-top: 10px;
  padding: 7px 10px;
  background: #fffbeb;
  border-left: 3px solid #f59e0b;
  border-radius: 0 5px 5px 0;
  font-size: 0.78rem;
  color: #78350f;
  line-height: 1.5;
}
</style>
