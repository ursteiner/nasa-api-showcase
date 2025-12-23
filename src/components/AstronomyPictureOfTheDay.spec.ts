import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import AstronomyPictureOfTheDayComponent from './AstronomyPictureOfTheDay.vue'
import ResizeObserver from './../mocks/ResizeObserver'
import vuetify from './../plugins/vuetify'
import type {AstronomyPictureOfTheDay} from "@/types/AstronomyPictureOfTheDay.ts";

describe('AstronomyPictureOfTheDay', () => {
  it('mount component', async () => {
    window.ResizeObserver = ResizeObserver
    expect(AstronomyPictureOfTheDayComponent).toBeTruthy()

    const wrapper = mount(AstronomyPictureOfTheDayComponent, {
      global: {
        plugins: [vuetify],
      },
      props: {
        apod: {
          url: 'https://www.test.com',
          date: '2025-06-29',
          explanation: 'Test explanation',
          copyright: 'copyright',
        } as AstronomyPictureOfTheDay,
        loading: false,
        error: '',
      },
    })
    expect(wrapper.text()).toContain('Test explanation')
    expect(wrapper.text()).toContain('copyright')
  })
})
