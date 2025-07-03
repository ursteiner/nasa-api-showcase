<script setup lang="ts">
  const emit = defineEmits(['previous', 'next'])
</script>

<template>
  <div class="navigationBar">
    <v-btn class="navigationButton" @click="emit('previous')">
      &larr; previous
    </v-btn>
    <slot />
    <v-btn class="navigationButton" @click="emit('next')">
      next &rarr;
    </v-btn>
  </div>
</template>

<style scoped lang="sass">
  .navigationBar
    display: flex
    justify-content: space-between
    align-items: center
    height: 80px
  .navigationButton
    width: 120px
</style>
