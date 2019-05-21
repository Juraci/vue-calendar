<template>
  <div class="day-event" :style="getBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon edit-event"
          @click='handleEditEvent(day.id, event.details)'
        >
        </i>
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="eventDetails">
      <div class="has-text-centered icons">
        <i
          class="fa fa-check save"
          @click="handleUpdateEvent(day.id, event.details, eventDetails)"
          >
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarEvent',
  props: {
    event: {
      type: Object,
      required: true
    },
    day: {
      type: Object,
      required: true
    },
    handleEditEvent: {
      type: Function,
      default: () => {}
    },
    handleUpdateEvent: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    getBackgroundColor () {
      const colors = ['#FF9999', '#85D6FF', '#99FF99']
      let randomColor = colors[Math.floor(Math.random() * colors.length)]
      return `background-color: ${randomColor}`
    }
  },
  data () {
    return {
      eventDetails: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4C4C4C;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #FFF;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>
