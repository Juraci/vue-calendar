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
    return this
      .state
      .seedData
      .find(day => day.active)
  },
  addNewEvent (eventDetails) {
    const activeDay = this.getActiveDay()
    activeDay.events.push({ details: eventDetails, edit: false })
  },
  editEvent (dayId, eventDetails) {
    const dayObj = this
      .state
      .seedData
      .find(day => day.id === dayId)

    const eventObj = dayObj.events.find(event => event.details === eventDetails)

    eventObj.edit = true
  },
  updateEvent (dayId, currentDetails, newDetails) {
    const dayObj = this
      .state
      .seedData
      .find(day => day.id === dayId)

    const eventObj = dayObj.events.find(event => event.details === currentDetails)
    eventObj.details = newDetails
    eventObj.edit = false
  }
}
