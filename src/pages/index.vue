<template>
  <Suspense>
    <AstronomyPictureOfTheDay :apod="astronomyOfTheDay" :error="errorMessage" :loading="isLoading" />
  </Suspense>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  const store = useAppStore()
  store.initialize()

  const { isLoading, astronomyOfTheDay, errorMessage } = storeToRefs(store)
</script>
