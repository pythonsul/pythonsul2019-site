<template>
  <SectionTemplate :title="'Local do Evento'" :light="true">
    <div class="local">
      <img class="local__logo" src="@/assets/unicuritiba.png" alt="">
      <iframe class="local__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6376317801282!2d-49.26739088449961!3d-25.450375683779054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48ae04a7f33%3A0xc8a284291f753e0f!2sUniversity+Centre+of+Curitiba!5e0!3m2!1sen!2sbr!4v1565910861156!5m2!1sen!2sbr" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '@/components/SectionTemplate.vue'
export default {
  name: 'EventDescription',
  components: {
    SectionTemplate
  }
}
</script>

<style lang="scss" scoped>
.local {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  @include breakpoint(sm) {
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: row;
  }

  &__logo {
    height: 150px;

    @include breakpoint(sm) {
      height: 250px;
    }
  }

  &__map {
    height: 400px;
  }
}
</style>
