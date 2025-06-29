import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    astronomyPictureOfTheDay: { url: '', date: '', explanation: '' },
    loading: true,
  }),
  getters: {
    isLoading: state => state.loading,
    astronomyOfTheDay: state => state.astronomyPictureOfTheDay,
  },
  actions: {
    async initialize () {
      const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
      try {
        const response = await fetch(nasaUrl)
        const data = await response.json()
        this.astronomyPictureOfTheDay.url = data.url
        this.astronomyPictureOfTheDay.date = data.date
        this.astronomyPictureOfTheDay.explanation = data.explanation
      } catch (error) {
        console.log('Error initializing store ' + error)
      }
      this.loading = false
    },
  },
})
