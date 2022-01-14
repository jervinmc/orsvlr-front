<template>
  <div>
    <div class="text-h4 pl-10">
      <b>Services</b>
    </div>
      <div>
        <services-container/>
      </div>
      <div class="pa-10">
        <events-container/>
      </div>
      <div>
        <footer-all/>
      </div>
  </div>
</template>

<script>
import EventsContainer from '../../components/events/EventsContainer.vue'
import ServicesContainer from '../../components/events/ServicesContainer.vue'
import FooterAll from '../../components/general/FooterAll.vue'
export default {
  components: { ServicesContainer, FooterAll, EventsContainer },

}
</script>

<style>

</style>