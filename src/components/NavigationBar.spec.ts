import { mount } from '@vue/test-utils'
import { describe, expect, test, it, expect } from 'vitest'
import NavigationBar from './NavigationBar.vue'
import vuetify from './../plugins/vuetify'

describe('NavigationBar', () => {
  it('Emits "previous" when previous button is clicked', async () => {
    const wrapper = mount(NavigationBar, {
      props: { loading: false },
      global: {
        plugins: [vuetify],
      },
    });

    const previousButton = wrapper.get('[data-testid="previousButton"]')
    expect(previousButton.exists()).toBe(true)

    await previousButton.trigger('click')

    expect(wrapper.emitted('previous')).toBeTruthy()
    expect(wrapper.emitted('previous')?.length).toBe(1)
  })

  it('Emits "next" when next button is clicked', async () => {
    const wrapper = mount(NavigationBar, {
      props: { loading: false },
        global: {
          plugins: [vuetify],
        },
    });

    const nextButton = wrapper.get('[data-testid="nextButton"]')
    await nextButton.trigger('click')

    expect(wrapper.emitted('next')).toBeTruthy()
    expect(wrapper.emitted('next')?.length).toBe(1)
  })

  it('Buttons are disabled when loading is true', () => {
    const wrapper = mount(NavigationBar, {
      props: { loading: true },
      global: {
        plugins: [vuetify],
      },
    })

    const previousButton = wrapper.get('[data-testid="previousButton"]')
    const nextButton = wrapper.get('[data-testid="nextButton"]')

    expect(previousButton.exists()).toBe(true)
    expect(previousButton.attributes('disabled')).toBeDefined()
    expect(nextButton.exists()).toBe(true)
    expect(nextButton.attributes('disabled')).toBeDefined()
  })

});
