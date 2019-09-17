<template>
  <div class="home">
    <MainBanner/>
    <EventDescription/>
    <EventSponsorships/>
    <EventPartners/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/components/MainBanner.vue'
import EventDescription from '@/components/EventDescription.vue'
import EventSponsorships from '@/components/EventSponsorships.vue'
import EventPartners from '@/components/EventPartners.vue'

export default {
  name: 'home',
  components: {
    EventDescription,
    EventSponsorships,
    EventPartners,
    MainBanner
  }
}
</script>
