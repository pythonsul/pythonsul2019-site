<template>
<div class="schedule">
  <div class="schedule-picker">
    <div v-for="(date, index) in dates" :key="index" class="schedule-date" @click="updateScheduler(index)">
      {{date.date}}
    </div>
  </div>
  <EventSchedule :dayCalendar="dates[currentData]"/>
</div>
</template>

<script>

import EventSchedule from '@/components/EventSchedule.vue'

export default {
  name: 'Schedule',

  components: {
    EventSchedule
  },

  data () {
    return {
      currentData: 1,

      dates: {
        '1': {
          'date': '12/09/2019',
          'schedules': [
            { time: '09:00', desc: 'coffee-break/credenciamento' },
            { time: '09:30', desc: 'Não faça trabalho de robô! Faça um robô que teste funcionalidades com Selenium!' },
            { time: '10:10', desc: 'Keynote Mario Sergio' },
            { time: '10:50', desc: 'Keynote Mario Sergio' },
            { time: '11:30', desc: 'Comprehensions: ler, entender e utilizar.' },
            { time: '12:10', desc: 'almoço' },
            { time: '13:40', desc: 'Desafios soluções e experiências na revisão de código' },
            { time: '14:20', desc: 'Kubernetes? Docker? O que são? E onde fica minha aplicação Python?' },
            { time: '15:00', desc: 'LT' },
            { time: '15:50', desc: 'coffee-break' },
            { time: '16:20', desc: 'Keynote Thais Vianna' },
            { time: '16:40', desc: 'Keynote Thais Vianna' },
            { time: '17:00', desc: 'encerramento do dia' }
          ]
        },
        '2': {
          'date': '13/09/2019',
          'schedules': [
            { time: '09:00', desc: '' },
            { time: '09:30', desc: 'coffee-break' },
            { time: '10:10', desc: 'keynote Alvaro Justen' },
            { time: '10:50', desc: 'keynote Alvaro Justen' },
            { time: '11:30', desc: 'Ruby, Python, Software Livre e tudo mais' },
            { time: '12:10', desc: 'almoço' },
            { time: '13:40', desc: 'Python para Automatizar o Controle Financeiro' },
            { time: '14:20', desc: 'Fazendo música com Python e FoxDot' },
            { time: '15:00', desc: 'LT' },
            { time: '15:50', desc: 'coffee-break' },
            { time: '16:20', desc: 'keynote Melissa Weber' },
            { time: '16:40', desc: 'keynote Melissa Weber' },
            { time: '17:00', desc: 'encerramento do dia' }
          ]
        }
      }
    }
  },

  methods: {
    updateScheduler (selectedData) {
      console.log(selectedData)
      this.currentData = selectedData
    }
  }

}
</script>

<style>

</style>
