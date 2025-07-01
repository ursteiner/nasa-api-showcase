import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    astronomyPictureOfTheDay: { url: '', date: '', explanation: '', title: '', copyright: '' },
    loading: true,
    error: '',
  }),
  getters: {
    isLoading: state => state.loading,
    astronomyOfTheDay: state => state.astronomyPictureOfTheDay,
    errorMessage: state => state.error,
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
        this.astronomyPictureOfTheDay.title = data.title
        this.astronomyPictureOfTheDay.copyright = data.copyright.replaceAll('\n', '')
      } catch (error) {
        console.log('Error initializing store ' + error)
        this.error = 'Could not get Astronomy Picture Of The Day'
      }
      this.loading = false
    },
  },
})
