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

  context('.setActiveDay', () => {
    it('sets the active da to true and all the others to false', () => {
      store.setActiveDay(2)
      expect(store.state.seedData[0].active).to.eq(false)
      expect(store.state.seedData[1].active).to.eq(true)
    })
  })

  context('.getActiveDay', () => {
    it('returns the active day', () => {
      expect(store.getActiveDay().fullTitle).to.eq('Monday')
    })
  })
})
