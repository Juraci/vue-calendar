import sinon from 'sinon'
import { expect } from '../sinonChaiSetup'
import { mount } from '@vue/test-utils'
import CalendarEvent from '@/components/CalendarEvent'

describe('CalendarEvent', () => {
  const day = {
    id: 1,
    abbvTitle: 'Mon',
    fullTitle: 'Monday',
    events: [
      { details: 'Get Groceries', edit: false }
    ],
    active: true
  }

  context('when clicking on .edit-evnet', () => {
    it('calls the provided method passing the dayId and the event details', () => {
      const editEvent = sinon.fake()
      const wrapper = mount(CalendarEvent, {
        propsData: {
          day: day,
          event: day.events[0],
          handleEditEvent: editEvent
        }
      })

      wrapper.find('.edit-event').trigger('click')
      expect(editEvent).to.have.been.calledWith(day.id, 'Get Groceries')
    })
  })

  context('when the event has edit flag equals true', () => {
    const daY = {
      id: 1,
      abbvTitle: 'Mon',
      fullTitle: 'Monday',
      events: [
        { details: 'Get Groceries', edit: true }
      ],
      active: true
    }

    it('renders the input and save elements', () => {
      const wrapper = mount(CalendarEvent, {
        propsData: {
          day: daY,
          event: daY.events[0]
        }
      })

      expect(wrapper.find('input').isVisible()).to.eq(true)
      expect(wrapper.find('.save').isVisible()).to.eq(true)
    })

    it('dispatches an action when clicking on save', () => {
      const updateEvent = sinon.fake()
      const wrapper = mount(CalendarEvent, {
        propsData: {
          day: daY,
          event: daY.events[0],
          handleUpdateEvent: updateEvent
        }
      })

      wrapper.find('input').setValue('Learn Vuex')
      wrapper.find('.save').trigger('click')
      expect(updateEvent).to.have.been.calledWith(1, 'Get Groceries', 'Learn Vuex')
    })
  })
})
