<template>
  <div>
      <v-sheet color="transparent" class="d-flex justify-center align-center">
        <hero/>
    </v-sheet>
    <div>
      <about/>
    </div>
    <div>
      <!-- <footer-galery/> -->
    </div>
    <footer-all/>
  </div>
</template>

<script>
import FooterAll from '../components/general/FooterAll.vue'
import About from '../components/index/About.vue'
import FooterGalery from '../components/index/FooterGalery.vue'
import Hero from '../components/index/Hero.vue'
export default {
  components: { Hero, About, FooterGalery, FooterAll },

}
</script>

<style>

</style>