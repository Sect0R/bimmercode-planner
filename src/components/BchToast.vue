<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="ui.toast.visible" class="bcp-toast">{{ ui.toast.text }}</div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/ui'
const ui = useUiStore()
</script>

<style scoped>
.bcp-toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bmw-dark);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  z-index: 9999;
  white-space: nowrap;
}
.toast-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.toast-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}
</style>
