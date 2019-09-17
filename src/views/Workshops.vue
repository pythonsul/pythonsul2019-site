<template>
  <div class="workshops">
    <section v-for="(workshop, i) in workshopsWithGravatar" :key="i">
      <div class="">{{workshop.title}}</div>
      <div class="">{{workshop.lead}}</div>
      <div class="">{{workshop.mail}}</div>
      <div class="">
        <img :src="workshop.gravatar" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import jsMd5 from 'js-md5/build/md5.min.js'

export default {
  name: 'Workshops',

  data: () => {
    return {
      workshops: [
        {
          title: 'Analises de dados publico para inciantes',
          lead: 'Fernando Masanori',
          mail: ''
        },
        {
          title: 'Terminei! Preciso testar?',
          lead: 'Luan Roger',
          mail: 'eng.luanroger@gmail.com'
        },
        {
          title: 'Tutorial de rows',
          lead: 'Álvaro Justen',
          mail: ''
        }
      ]
    }
  },

  computed: {
    mailMD5 () {
      return jsMd5('luanengcomputacao@gmail.com')
    },
    workshopsWithGravatar () {
      return this.workshops.map(x => {
        x.gravatar = 'https://www.gravatar.com/avatar/' + jsMd5(x.mail)
        return x
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.workshops {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
</style>>
