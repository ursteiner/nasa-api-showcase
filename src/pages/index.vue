<template>
  <div class="mainPage">
    <Suspense>
      <AstronomyPictureOfTheDay :apod="astronomyOfTheDay" :error="errorMessage" :loading="isLoading" />
    </Suspense>
    <NavigationBar :loading="isLoading" @next="getNext" @previous="getPrevious">
      <v-date-input class="datePickerCentered" @update:modelValue="setDate($event)" variant="outlined" max-width="300" prepend-icon="" v-model="astronomyOfTheDay.date" />
    </NavigationBar>
  </div>
</template>

<script lang="ts" setup>
  import NavigationBar from '@/components/NavigationBar.vue'
  import { useAppStore, formatDate } from '@/stores/app'
  import { VDateInput } from 'vuetify/labs/VDateInput'
  const store = useAppStore()
  // init
  store.getAstronomyPictureOfTheDay()

  const { isLoading, astronomyOfTheDay, errorMessage } = storeToRefs(store)

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

  const setDate = (date: string) => {
    const newDate = new Date(Date.parse(date))
    console.log('set date: ' + newDate)
    newDate.setHours(15)

    if(formatDate(newDate) != formatDate(store.getDate)){
      store.setDate(newDate)
      store.getAstronomyPictureOfTheDay()
    }
  }

</script>

<style lang="sass" scoped>
  .mainPage
    margin: 20px
  .datePickerCentered
    padding-top:27px;
</style>
