import sinon from 'sinon'
import { shallowMount } from '@vue/test-utils'
import CalendarDay from '@/components/CalendarDay.vue'
import { expect } from '../sinonChaiSetup'

describe('CalendarDay.vue', () => {
  const day = {
    id: 1,
    abbvTitle: 'Mon',
    fullTitle: 'Monday',
    events: [
      { details: 'Get Groceries', edit: false },
      { details: 'Carpool', edit: false }
    ],
    active: true
  }

  it('renders the props', () => {
    const wrapper = shallowMount(CalendarDay, {
      propsData: { day }
    })

    expect(wrapper.find('.day-banner').text()).to.eq('Mon')
    expect(wrapper.find('.day-number').text()).to.eq('1')
  })

  it('handles the click and dispatches an action', () => {
    const handleClick = sinon.fake()
    const wrapper = shallowMount(CalendarDay, {
      propsData: {
        day,
        handleDayInteraction: handleClick
      }
    })

    wrapper.find('.day.column').trigger('click')
    expect(handleClick).to.have.been.calledWith(day.id)
  })
})
