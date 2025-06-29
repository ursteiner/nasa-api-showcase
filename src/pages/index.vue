<template>
  <AstronomyPictureOfTheDay :apod="astronomyOfTheDay" :loading="isLoading" />
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  const store = useAppStore()
  store.initialize()

  const { isLoading, astronomyOfTheDay } = storeToRefs(store)
</script>
