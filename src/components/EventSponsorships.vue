<template>
  <SectionTemplate
    :title="'Patrocinadores'"
    :light="true"
    :angle-margin="true"
    >
    <div class="sponsorships">
      <div class="sponsorship sponsorship--brass">
        <div class="medal medal--brass">
          Bronze
        </div>
        <div class="sponsorship__logos">
          <img class="sponsorship__logo" src="@/assets/logo-olist.png" alt="Olist">
        </div>

      </div>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '@/components/SectionTemplate.vue'

export default {
  components: {
    SectionTemplate
  }
}
</script>

<style lang="scss" scoped>
$img-heigth: 250px;

.main-banner {
  display: flex;
  padding: 96px 0 0;
  flex-flow: column;
  @include breakpoint(lg) {

  }

  &__logos,
  &__propostas,
  &__actions {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  &__propostas {
    justify-content: center;
  }

  &__python-sul {
    height: $img-heigth;
  }

  &__curitiba {
    height: $img-heigth;
  }

  &__actions {
    padding-top: 3em;
    padding-bottom: 1em;
  }
}

</style>
