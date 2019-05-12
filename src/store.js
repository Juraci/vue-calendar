import { seedData } from './seed.js'

export const store = {
  state: {
    seedData
  },
  init (data = null) {
    this.state.seedData = data || seedData
    return this.state
  },
  setActiveDay (dayId) {
    this
      .state
      .seedData
      .map((day) => {
        day.id === dayId ? day.active = true : day.active = false
      })
  },
  getActiveDay () {
    return this.state.seedData.find(day => day.active)
  }
}
