import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders', () => {
    const wrapper = mount(App, {})
    expect(wrapper.text()).to.include('Get Groceries')
  })
})
