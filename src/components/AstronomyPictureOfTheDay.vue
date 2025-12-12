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
  >
    <v-card-title>
      {{ apod.title }} ({{ apod.copyright }})
    </v-card-title>

    <v-img
      contain
      max-height="500"
      :src="apod.url"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>

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
