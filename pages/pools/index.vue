<template>
  <div>
      <pools-container/>
      <div>
          <footer-all/>
      </div>
  </div>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import PoolsContainer from '../../components/pools/PoolsContainer.vue'
export default {
  components: { PoolsContainer, FooterAll },

}
</script>

<style>

</style>