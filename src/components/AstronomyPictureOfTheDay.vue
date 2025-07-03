<script lang="ts" setup>
  const props = defineProps(['apod', 'loading', 'error'])
  console.log(props['apod'].title)
</script>

<template>
  <v-alert
    v-show="error != ''"
    density="compact"
    :text="error"
    title="Something went wrong"
    type="warning"
  />

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
      {{ apod.date }}  {{ apod.title }} ({{ apod.copyright }})
    </v-card-title>
    <v-spacer />
    <div class="loadingIndicator">
      <v-progress-circular v-show="loading" indeterminate />
    </div>
    <v-card-text>
      {{ apod.explanation }}
    </v-card-text>

  </v-card>
</template>

<style lang="sass" scoped>
  .loadingIndicator
    text-align: center
    height: 30px
</style>
