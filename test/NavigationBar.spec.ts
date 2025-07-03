import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import NavigationBar from '../src/components/NavigationBar.vue'
import ResizeObserver from '../src/mocks/ResizeObserver'
import vuetify from '../src/plugins/vuetify'

test('mount component', async () => {
  window.ResizeObserver = ResizeObserver
  expect(NavigationBar).toBeTruthy()

  const wrapper = mount(NavigationBar, {
    global: {
      plugins: [vuetify],
    },
  })
  expect(wrapper.text()).toContain('previous')
  expect(wrapper.text()).toContain('next')
})
