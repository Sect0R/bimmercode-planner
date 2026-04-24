<template>
  <v-app-bar color="white" flat height="60" border="b">
    <v-app-bar-nav-icon size="small" @click="ui.drawer = !ui.drawer" />

    <v-text-field
      v-model="ui.searchQuery"
      prepend-inner-icon="mdi-magnify"
      :placeholder="ui.currentTab === 'expert' ? t('search.placeholderExpert') : t('search.placeholderSelector')"
      variant="solo-filled"
      density="compact"
      hide-details
      flat
      bg-color="#f1f5f9"
      class="ml-2 rounded-lg"
      style="max-width: 480px"
      clearable
    />

    <v-spacer />

    <v-btn
      :color="plan.totalSelected ? 'primary' : 'grey'"
      variant="flat"
      class="mr-4"
      rounded="lg"
      size="small"
      @click="ui.planOpen = true"
    >
      <v-icon start size="18">mdi-format-list-checks</v-icon>
      {{ t('plan.button') }}
      <v-chip v-if="plan.totalSelected" size="x-small" color="white" class="ml-2" style="min-width: 20px">
        {{ plan.totalSelected }}
      </v-chip>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'
import { usePlanStore } from '@/stores/plan'

const { t } = useI18n()
const ui = useUiStore()
const plan = usePlanStore()
</script>
