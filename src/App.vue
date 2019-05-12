<template>
  <div id="app">
    <CalendarWeek
      :week="sharedState.seedData"
      :setActiveDay="setActiveDay"
    />
    <CalendarEntry
      :getActiveDay="getActiveDay"
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
