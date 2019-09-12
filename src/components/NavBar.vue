<template>
  <div class="nav-bar nav-bar--mobile">
    <div class="nav-bar__content  nav-bar__content--mobile">
      <img class="nav-bar__logo" src="@/assets/logo-python.svg" alt="">
      <div class="nav-bar__hamburger">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>
      <div id="nav" class="nav-bar__links">
        <router-link class="nav-bar__link" to="/">Home</router-link>
        <router-link class="nav-bar__link" to="/schedule/">Programação</router-link>
        <router-link class="nav-bar__link" to="/key-notes/">Keynotes</router-link>
        <router-link class="nav-bar__link" to="/local">Local</router-link>
        <a class="nav-bar__link" href="https://pythonsul.org/documents/plano_de_patrocinio.pdf" target="_blank">Patrocinar /</a>
        <a class="nav-bar__link" href="https://pythonsul.org/documents/sponsorship_plan.pdf" target="_blank">Sponsorship</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
</style>
