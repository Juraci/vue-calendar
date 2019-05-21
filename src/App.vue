<template>
  <div id="app">
    <CalendarWeek
      :week="sharedState.seedData"
      :setActiveDay="setActiveDay"
      :editEvent="editEvent"
      :updateEvent="updateEvent"
    />
    <CalendarEntry
      :getActiveDay="getActiveDay"
      :addNewEvent="addNewEvent"
    />
  </div>
</template>

<script>
import { store } from './store.js'
import CalendarWeek from './components/CalendarWeek.vue'
import CalendarEntry from './components/CalendarEntry.vue'
export default {
  name: 'app',
  data () {
    return {
      sharedState: store.init()
    }
  },
  components: {
    CalendarWeek,
    CalendarEntry
  },
  methods: {
    setActiveDay (dayId) {
      store.setActiveDay(dayId)
    },
    getActiveDay () {
      return store.getActiveDay()
    },
    addNewEvent (eventDescription) {
      store.addNewEvent(eventDescription)
    },
    editEvent (dayId, eventDetails) {
      store.editEvent(dayId, eventDetails)
    },
    updateEvent (dayId, currentDetails, newDetails) {
      store.updateEvent(dayId, currentDetails, newDetails)
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
