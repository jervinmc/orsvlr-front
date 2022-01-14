<template>
  <div>
      <contact-hero/>
      <div>
          <contact-footer/>
      </div>
      <footer-all/>
  </div>
</template>

<script>
import ContactFooter from '../../components/contacts/ContactFooter.vue'
import ContactHero from '../../components/contacts/ContactHero.vue'
import FooterAll from '../../components/general/FooterAll.vue'
export default {
  components: { ContactHero, ContactFooter, FooterAll },

}
</script>

<style>

</style>