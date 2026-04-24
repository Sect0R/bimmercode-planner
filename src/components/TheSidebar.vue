<template>
  <v-navigation-drawer v-model="ui.drawer" width="280" color="white" elevation="0" border="end">
    <div class="sidebar-logo">
      <div class="bcp-title">BCP</div>
      <div class="bcp-sub">
        <span class="text-primary">BimmerCode</span>
        <span class="text-error"> Planner</span>
      </div>
    </div>

    <!-- Language toggle -->
    <div class="lang-toggle">
      <button
        class="lang-btn"
        :class="{ active: currentLocale === 'ru' }"
        @click="switchLocale('ru')"
      >
        RU
      </button>
      <span class="lang-sep">/</span>
      <button
        class="lang-btn"
        :class="{ active: currentLocale === 'en' }"
        @click="switchLocale('en')"
      >
        EN
      </button>
    </div>

    <v-list nav class="pa-3">
      <!-- Expert mode entry point -->
      <v-list-item
        prepend-icon="mdi-code-braces"
        :title="t('nav.expertMode')"
        :active="ui.currentTab === 'expert'"
        rounded="lg"
        class="mb-1"
        active-color="primary"
        @click="ui.switchToExpert()"
      >
        <template #append>
          <span class="nav-count" :class="{ 'has-selected': plan.selectedExpert.length > 0 }">
            {{ plan.selectedExpert.length > 0 ? `${plan.selectedExpert.length}/` : '' }}{{ expertCount }}
          </span>
        </template>
      </v-list-item>

      <v-divider class="my-3" />

      <div class="d-flex align-center px-2 mb-2">
        <span class="nav-section-label">{{ t('nav.ecuBlocks') }}</span>
        <v-spacer />
        <v-btn size="x-small" variant="tonal" color="primary" @click="ui.switchToAll()">
          {{ t('nav.all') }}
        </v-btn>
      </div>

      <!-- One item per ECU category -->
      <v-list-item
        v-for="cat in categories"
        :key="cat.id"
        :prepend-icon="cat.icon"
        :active="ui.currentTab === 'selector' && ui.filterCategory === cat.id"
        rounded="lg"
        class="mb-1"
        active-color="primary"
        @click="ui.setCategory(cat.id)"
      >
        <v-list-item-title class="nav-item-title">
          {{ l(cat.title).split('—')[1]?.trim() || l(cat.title) }}
        </v-list-item-title>
        <v-list-item-subtitle class="nav-item-sub">
          {{ l(cat.title).split('—')[0]?.trim() }}
        </v-list-item-subtitle>
        <template #append>
          <span class="nav-count" :class="{ 'has-selected': plan.countByCategory(cat.id) > 0 }">
            {{ plan.countByCategory(cat.id) > 0 ? `${plan.countByCategory(cat.id)}/` : '' }}{{ cat.items.length }}
          </span>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'
import { usePlanStore } from '@/stores/plan'
import { useL } from '@/composables/useL'
import { categories, expertItems } from '@/data/parameters'
import { setLocale, type Locale } from '@/i18n'

const { t, locale } = useI18n()
const ui = useUiStore()
const plan = usePlanStore()
const l = useL()

const expertCount = expertItems.length
const currentLocale = computed(() => locale.value as Locale)

function switchLocale(lang: Locale) {
  setLocale(lang)
}
</script>

<style scoped>
.sidebar-logo {
  padding: 20px 20px 12px;
  border-bottom: 1px solid var(--border);
}
.bcp-title {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--bmw-blue);
  line-height: 1;
}
.bcp-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  margin-top: 2px;
}

/* Language switcher */
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  border-bottom: 1px solid var(--border);
}
.lang-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-muted);
  padding: 2px 4px;
  border-radius: 3px;
  letter-spacing: 0.5px;
  transition: color 0.15s;
}
.lang-btn:hover { color: var(--text-main); }
.lang-btn.active { color: var(--bmw-blue); }
.lang-sep {
  color: var(--border);
  font-size: 0.72rem;
}

.nav-section-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 1px;
}
.nav-item-title {
  font-size: 0.85rem !important;
  font-weight: 600 !important;
}
.nav-item-sub {
  font-size: 0.72rem !important;
}
.nav-count {
  font-size: 0.7rem;
  background: #f1f5f9;
  color: var(--text-muted);
  border-radius: 10px;
  padding: 1px 7px;
  margin-left: auto;
  white-space: nowrap;
}
.nav-count.has-selected {
  background: var(--bmw-blue);
  color: white;
}
</style>
