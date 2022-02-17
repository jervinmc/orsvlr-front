<template>
  <div>
      <div>
          <usermanagement-container />
      </div>
      <div>
          <footer-all />
      </div>
  </div>
</template>

<script>
import UsermanagementContainer from '../../../components/admin/usermanagement/UsermanagementContainer.vue'
import FooterAll from '../../../components/general/FooterAll.vue'
export default {
  components: { UsermanagementContainer, FooterAll },

}
</script>

<style>

</style>