<template>
  <div class="nav-bar">
    <div class="nav-bar__content">
      <img class="nav-bar__logo" src="@/assets/logo-python.svg" alt="">

      <div id="nav">
        <router-link class="nav-bar__link" to="/">Home</router-link>
        <router-link class="nav-bar__link" to="/local">Local</router-link>
        <router-link class="nav-bar__link" to="/key-notes/">Key Notes</router-link>
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
