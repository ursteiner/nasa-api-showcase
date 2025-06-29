<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()

  store.getAstronomyPictureOfTheDay()
  const astronomy = ref(store.astronomyPictureOfTheDay)
</script>

<template>
  <v-card
    class="mx-auto"
    max-height="1000"
    max-width="1200"
  >
    <v-img
      cover
      max-height="500"
      :src="astronomy.url"
    />

    <v-card-title>
      {{ astronomy.date }}
    </v-card-title>

    <v-spacer />

    <v-card-text>
      {{ astronomy.explanation }}
    </v-card-text>

  </v-card>
</template>

<style lang="sass" scoped>

</style>
