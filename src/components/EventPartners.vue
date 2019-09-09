<template>
  <SectionTemplate :title="'Parceiros'" class="partners" :angle="true" :no-angle-bot="true" >
    <div class="partner">
      <img class="partner__logo" src="@/assets/unicuritiba.png" alt="">
      <img class="partner__img" src="@/assets/unicuritiba.jpg" alt="">
    </div>
    <div class="be-partner">
      <a href=""></a>
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
.partner {
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 40%;
  }

  &__img {
    width: 40%;
    border-radius: 10px;
  }
}
</style>
