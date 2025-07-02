<template>
  <Suspense>
    <AstronomyPictureOfTheDay :apod="astronomyOfTheDay" :error="errorMessage" :loading="isLoading" />
  </Suspense>
  <div class="navigationBar">
    <v-btn class="navigationButton" @click="getPreviousAstronomyPictureOfTheDay()">&larr; previous</v-btn>&nbsp;<v-btn class="navigationButton" @click="getNextAstronomyPictureOfTheDay()">next &rarr;</v-btn>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  const store = useAppStore()
  store.getAstronomyPictureOfTheDay()

  const { isLoading, astronomyOfTheDay, errorMessage } = storeToRefs(store)

  function getPreviousAstronomyPictureOfTheDay () {
    store.setPreviousDate()
    store.getAstronomyPictureOfTheDay()
  }

  function getNextAstronomyPictureOfTheDay () {
    store.setNextDate()
    store.getAstronomyPictureOfTheDay()
  }

</script>

<style lang="sass" scoped>
.navigationBar
  display: flex
  justify-content: center
  align-items: center
  height: 80px
.navigationButton
  width: 120px
</style>
