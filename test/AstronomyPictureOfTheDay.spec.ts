import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import AstronomyPictureOfTheDay from '../src/components/AstronomyPictureOfTheDay.vue'
import vuetify from '../src/plugins/vuetify'

test('mount component', async () => {
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
      },
    },
  })
  expect(wrapper.text()).toContain('Test explanation')
  expect(wrapper.text()).toContain('2025-06-29')
})
