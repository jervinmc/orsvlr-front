<template>
  <div>
      <div>
          <pools-details-container />
      </div>
      <div>
          <other-pools />
      </div>
      <div>
        <footer-all />
      </div>
  </div>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import OtherPools from '../../components/pools_details/OtherPools.vue'
import PoolsDetailsContainer from '../../components/pools_details/PoolsDetailsContainer.vue'

export default {
  components: { PoolsDetailsContainer,FooterAll, OtherPools },

}
</script>
<style>

</style>