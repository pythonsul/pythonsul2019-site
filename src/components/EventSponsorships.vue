<template>
  <SectionTemplate
    :title="'Patrocinadores'"
    :light="true"
    :angle-margin="true"
    >
    <div class="sponsorships">
      <div class="sponsorship sponsorship--gold">
        <div class="medal medal--gold">
          Gold
        </div>

      </div>
      <div class="sponsorship sponsorship--silver">
        <div class="medal medal--silver">
          Silver
        </div>

      </div>
      <div class="sponsorship sponsorship--brass">
        <div class="medal medal--brass">
          Brass
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
