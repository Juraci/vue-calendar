import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(App, {})
    expect(wrapper.text()).to.include('Get Groceries')
  })
})
