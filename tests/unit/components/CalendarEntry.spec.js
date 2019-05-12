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
})
