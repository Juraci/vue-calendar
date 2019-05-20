<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model="eventEntry" required />
      <p class="calendar-entry-day">Day of event: <span id="active-day" class="bold">{{ title }}</span></p>
      <a
        class="button is-primary is-small is-outlined"
        @click="handleSubmit(eventEntry)"
      >
        Submit
      </a>
    </div>
    <p class="error-message" v-if="error" >
      You must type something first!
    </p>
  </div>
</template>

<script>
export default {
  name: 'CalendarEntry',
  props: {
    getActiveDay: {
      type: Function,
      default: () => { return { fullTitle: 'default' } }
    },
    addNewEvent: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    title () {
      return this.getActiveDay().fullTitle
    }
  },
  data () {
    return {
      eventEntry: '',
      error: false
    }
  },
  methods: {
    handleSubmit (eventEntry) {
      if (eventEntry === '') {
        this.error = true
        return
      }
      this.error = false
      this.addNewEvent(eventEntry)
      this.eventEntry = ''
    }
  }
}
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }

  .error-message {
    color: red;
    font-size: 13px;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
