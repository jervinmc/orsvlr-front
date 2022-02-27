<template>
  <div>
    <div>
      <gallery-hero-image />
    </div>
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
import GalleryHeroImage from '../../components/gallery/GalleryHeroImage.vue'
import FooterAll from '../../components/general/FooterAll.vue'
export default {
  components: { GalleryHero, Gallery ,FooterAll, GalleryHeroImage},

}
</script>
<style>

</style>