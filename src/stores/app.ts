import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    astronomyPictureOfTheDay: { url: '', date: '', explanation: '' },
  }),

  actions: {
    async getAstronomyPictureOfTheDay () {
      const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

      const response = await fetch(nasaUrl)
      const data = await response.json()
      this.astronomyPictureOfTheDay.url = data.url
      this.astronomyPictureOfTheDay.date = data.date
      this.astronomyPictureOfTheDay.explanation = data.explanation
    },
  },
})
