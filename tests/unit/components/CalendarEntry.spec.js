import sinon from 'sinon'
import { shallowMount } from '@vue/test-utils'
import CalendarEntry from '@/components/CalendarEntry.vue'
import { expect } from '../sinonChaiSetup'

describe('CalendarEntry', () => {
  it('renders correctly', () => {
    const getActiveDay = () => {
      return {
        id: 1,
        abbvTitle: 'Mon',
        fullTitle: 'Monday',
        events: [
          { details: 'Get Groceries', edit: false },
          { details: 'Carpool', edit: false }
        ],
        active: true
      }
    }

    const wrapper = shallowMount(CalendarEntry, {
      propsData: {
        getActiveDay
      }
    })
    expect(wrapper.find('#active-day').text()).to.eq('Monday')
  })

  it('submits the new event', () => {
    const fakeSubmit = sinon.fake()
    const myEvent = 'some task'

    const wrapper = shallowMount(CalendarEntry, {
      propsData: {
        addNewEvent: fakeSubmit
      }
    })

    wrapper.find('input').setValue(myEvent)
    wrapper.find('.button').trigger('click')

    expect(fakeSubmit).to.have.been.calledWith(myEvent)
  })
})
