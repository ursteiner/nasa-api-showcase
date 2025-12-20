import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import AstronomyPictureOfTheDay from './AstronomyPictureOfTheDay.vue'
import ResizeObserver from './../mocks/ResizeObserver'
import vuetify from './../plugins/vuetify'

describe('AstronomyPictureOfTheDay', () => {
  it('mount component', async () => {
    window.ResizeObserver = ResizeObserver
    expect(AstronomyPictureOfTheDay).toBeTruthy()

    const wrapper = mount(AstronomyPictureOfTheDay, {
      global: {
        plugins: [vuetify],
      },
      props: {
        apod: {
          url: 'https://www.test.com',
          date: '2025-06-29',
          explanation: 'Test explanation',
          copyright: 'copyright',
        },
        error: '',
      },
    })
    expect(wrapper.text()).toContain('Test explanation')
    expect(wrapper.text()).toContain('copyright')
  })
})
