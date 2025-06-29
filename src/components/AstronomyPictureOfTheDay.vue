<script lang="ts" setup>
  const props = defineProps(['apod'])
  console.log(props)
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
      :src="apod.url"
    />

    <v-card-title>
      {{ apod.date }}
    </v-card-title>

    <v-spacer />

    <v-card-text>
      {{ apod.explanation }}
    </v-card-text>

  </v-card>
</template>

<style lang="sass" scoped>

</style>
