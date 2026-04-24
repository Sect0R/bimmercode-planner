<template>
  <v-app>
    <TheSidebar />
    <TheAppBar />

    <v-main>
      <SelectorView v-if="ui.currentTab === 'selector'" />
      <ExpertView   v-else-if="ui.currentTab === 'expert'" />
    </v-main>

    <PlanDialog />
    <BchToast />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUiStore } from '@/stores/ui'
import { usePlanStore } from '@/stores/plan'
import TheSidebar   from '@/components/TheSidebar.vue'
import TheAppBar    from '@/components/TheAppBar.vue'
import SelectorView from '@/components/selector/SelectorView.vue'
import ExpertView   from '@/components/expert/ExpertView.vue'
import PlanDialog   from '@/components/plan/PlanDialog.vue'
import BchToast     from '@/components/BchToast.vue'

const ui = useUiStore()
const plan = usePlanStore()

onMounted(() => {
  plan.load()
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ui.planOpen = false
  })
})
</script>
