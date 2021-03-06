import { expect } from './sinonChaiSetup'
import { store } from '@/store'

describe('store', () => {
  beforeEach(() => {
    const data = [
      {
        id: 1,
        abbvTitle: 'Mon',
        fullTitle: 'Monday',
        events: [
          { details: 'Get Groceries', edit: false },
          { details: 'Carpool', edit: false }
        ],
        active: true
      },
      {
        id: 2,
        abbvTitle: 'Tue',
        fullTitle: 'Tuesday',
        events: [
          { details: 'Yoga/Gym', edit: false }
        ],
        active: false
      }
    ]
    store.init(data)
  })

  describe('.setActiveDay', () => {
    it('sets the active da to true and all the others to false', () => {
      store.setActiveDay(2)
      expect(store.state.seedData[0].active).to.eq(false)
      expect(store.state.seedData[1].active).to.eq(true)
    })
  })

  describe('.getActiveDay', () => {
    it('returns the active day', () => {
      expect(store.getActiveDay().fullTitle).to.eq('Monday')
    })
  })

  describe('.addNewEvent', () => {
    it('adds a new event to the active day', () => {
      store.addNewEvent('Learn Vuex')
      expect(store.state.seedData[0].events.length).to.eq(3)
      expect(store.state.seedData[0].events[2].details).to.eq('Learn Vuex')
      expect(store.state.seedData[0].events[2].edit).to.eq(false)
    })
  })

  describe('.editEvent', () => {
    it('toggles the edit flag on the event of the day passed', () => {
      store.editEvent(2, 'Yoga/Gym')
      expect(store.state.seedData[1].events[0].edit).to.eq(true)
    })
  })

  describe('.updateEvent', () => {
    it('updates the event', () => {
      store.updateEvent(2, 'Yoga/Gym', 'Learn scoped slots')
      expect(store.state.seedData[1].events[0].details).to.eq('Learn scoped slots')
      expect(store.state.seedData[1].events[0].edit).to.eq(false)
    })
  })
})
