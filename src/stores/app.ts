import { defineStore } from 'pinia'

const formatDate = (date: Date) => {
  return date.toISOString().slice(0, 10)
}

const mapApiResponse = (apod: any, data: any) => {
  apod.url = data.url
  apod.date = data.date
  apod.explanation = data.explanation
  apod.title = data.title
  if (data.hasOwnProperty('copyright')) {
    apod.copyright = data.copyright.replaceAll('\n', '')
  }
}

export const useAppStore = defineStore('app', {
  state: () => ({
    astronomyPictureOfTheDay: { url: '', date: '', explanation: '', title: '', copyright: '' },
    loading: true,
    error: '',
    date: new Date(),
  }),
  getters: {
    isLoading: state => state.loading,
    astronomyOfTheDay: state => state.astronomyPictureOfTheDay,
    errorMessage: state => state.error,
  },
  actions: {
    async getAstronomyPictureOfTheDay () {
      this.loading = true
      this.error = ''
      const nasaUrl = 'https://api.nasa.gov/planetary/apod?date=' + formatDate(this.date) + '&api_key=' + (import.meta.env.VITE_APP_NASA_API_KEY ?? 'DEMO_KEY')
      try {
        const response = await fetch(nasaUrl)
        if (response.status == 429) {
          this.error = 'API limit exceeded'
          console.log(this.error)
        } else {
          const data = await response.json()
          mapApiResponse(this.astronomyPictureOfTheDay, data)
        }
      } catch (error) {
        console.error('Error requesting API ' + error)
        this.error = 'Could not get Astronomy Picture of the Day'
      }
      this.loading = false
    },
    setPreviousDate () {
      this.date.setDate(this.date.getDate() - 1)
    },
    setNextDate () {
      if (formatDate(this.date) < formatDate(new Date())) {
        this.date.setDate(this.date.getDate() + 1)
      }
    },
  },
})
