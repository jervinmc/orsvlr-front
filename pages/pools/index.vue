<template>
  <div>
    <div>
      <hero-pool />
    </div>
      <pools-container/>
      <div>
          <footer-all/>
      </div>
  </div>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import HeroPool from '../../components/pools/HeroPool.vue'
import PoolsContainer from '../../components/pools/PoolsContainer.vue'
export default {
  components: { PoolsContainer, FooterAll, HeroPool },

}
</script>

<style>

</style>