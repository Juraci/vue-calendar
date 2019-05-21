<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay
        v-for="day in week"
        :key="day.id"
        :day="day"
        :handleDayInteraction="setActiveDay"
        :editEvent="editEvent"
        :updateEvent="updateEvent"
      />
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
export default {
  name: 'CalendarWeek',
  props: {
    week: {
      type: Array,
      defaul: []
    },
    setActiveDay: {
      type: Function,
      default: () => {}
    },
    editEvent: {
      type: Function,
      default: () => {}
    },
    updateEvent: {
      type: Function,
      default: () => {}
    }
  },
  components: { CalendarDay }
}
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>
