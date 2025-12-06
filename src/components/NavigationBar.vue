<script setup lang="ts">
  const emit = defineEmits(['previous', 'next'])
  defineProps(['loading'])
</script>

<template>
  <div class="navigationBar">
    <v-btn data-testid="previousButton" class="navigationButton" :disabled="loading" @click="emit('previous')">
      &larr; previous
    </v-btn>
    <slot />
    <v-btn data-testid="nextButton" class="navigationButton" :disabled="loading" @click="emit('next')">
      next &rarr;
    </v-btn>
  </div>
</template>

<style scoped lang="sass">
  .navigationBar
    display: flex
    justify-content: space-between
    align-items: center
    height: 100px
  .navigationButton
    width: 120px
</style>
