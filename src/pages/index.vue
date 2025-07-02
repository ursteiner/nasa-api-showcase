<template>
  <Suspense>
    <AstronomyPictureOfTheDay :apod="astronomyOfTheDay" :error="errorMessage" :loading="isLoading" />
  </Suspense>
  <NavigationBar @next="getNext" @previous="getPrevious" />
</template>

<script lang="ts" setup>
  import NavigationBar from '@/components/NavigationBar.vue'
  import { useAppStore } from '@/stores/app'
  const store = useAppStore()
  // init
  store.getAstronomyPictureOfTheDay()

  const getPrevious = () => {
    console.log('get previous image')
    store.setPreviousDate()
    store.getAstronomyPictureOfTheDay()
  }

  const getNext = () => {
    console.log('get next image')
    store.setNextDate()
    store.getAstronomyPictureOfTheDay()
  }

  const { isLoading, astronomyOfTheDay, errorMessage } = storeToRefs(store)

</script>

<style lang="sass" scoped>

</style>
