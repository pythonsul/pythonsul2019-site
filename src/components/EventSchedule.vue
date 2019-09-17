<template>
  <section class="event-schedule">
    <table class="schedule-table">
      <div class="schedule-table__header">
        <div class="schedule-table__h-time">Horário</div>
        <div class="schedule-table__date">{{dayCalendar.date}}</div>
      </div>
      <div class="schedule-table__body">
        <div v-for="(schedule, index) in dayCalendar.schedules" :key="index" class="schedule-table__row">
        <div class="schedule-table__h-time">{{schedule.time}}</div>
        <div>{{schedule.desc}}</div>
      </div>
      </div>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    dayCalendar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
