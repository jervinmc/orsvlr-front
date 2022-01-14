<template>
  <div>
      <gallery-hero/>
      <div class="pa-16">
        <gallery/>
      </div>
      <footer-all/>
  </div>
</template>

<script>
import Gallery from '../../components/gallery/Gallery.vue'
import GalleryHero from '../../components/gallery/GalleryHero.vue'
import FooterAll from '../../components/general/FooterAll.vue'
export default {
  components: { GalleryHero, Gallery ,FooterAll},

}
</script>
<style>

</style>