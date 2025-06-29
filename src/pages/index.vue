<template>
  <AstronomyPictureOfTheDay :apod="astronomyOfTheDay" />
</template>

<script lang="ts" setup>
  import AstronomyPictureOfTheDay from '@/components/AstronomyPictureOfTheDay.vue'

  import { useAppStore } from '@/stores/app'

  const store = useAppStore()

  store.getAstronomyPictureOfTheDay()
  const astronomyOfTheDay = ref(store.astronomyPictureOfTheDay)
</script>
