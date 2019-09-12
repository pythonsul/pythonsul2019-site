<template>
  <div class="nav-bar nav-bar--mobile">
    <div class="nav-bar__content  nav-bar__content--mobile">
      <img class="nav-bar__logo" src="@/assets/logo-python.svg" alt="">
      <div class="nav-bar__hamburger" @click="openMobileMenu">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>
      <div id="nav" class="nav-bar__links" :class="{'nav-bar__links--mobile': mobile}">
        <router-link class="js-nav-bar-link nav-bar__link" to="/">Home</router-link>
        <router-link class="js-nav-bar-link nav-bar__link" to="/schedule">Programação</router-link>
        <a class="js-nav-bar-link nav-bar__link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdN-CQ_EolGQj3lsagkAxvHH3Opdtp05lLCnonZYvocxaTNVQ/viewform?embedded=true">Tutoriais</a>
        <router-link class="js-nav-bar-link nav-bar__link" to="/key-notes/">Keynotes</router-link>
        <router-link class="js-nav-bar-link nav-bar__link" to="/local">Local</router-link>
        <a class="js-nav-bar-link nav-bar__link" href="https://pythonsul.org/documents/plano_de_patrocinio.pdf" target="_blank">Patrocinar</a>
        <a class="js-nav-bar-link nav-bar__link" href="https://pythonsul.org/documents/sponsorship_plan.pdf" target="_blank">Sponsorship</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data: () => {
    return {
      mobile: false
    }
  },

  mounted () {
    let that = this
    this.$el
      .querySelectorAll('.js-nav-bar-link')
      .forEach((el) => { el.onclick = () => that.hideMobileMenu() })
  },

  methods: {
    openMobileMenu () {
      this.mobile = !this.mobile
    },

    hideMobileMenu () {
      this.mobile = false
    }
  }
}
</script>

<style>
</style>
