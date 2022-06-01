<template>
  <div>
        <book-form/>
        <div class="pt-16">
          <div class="pt-2">

          </div>
          <footer-all/>
          
        </div>
  </div>
</template>

<script>
import BookForm from '../../components/book/BookForm.vue'
import FooterAll from '../../components/general/FooterAll.vue'
export default {
  components: { BookForm, FooterAll },

}
</script>

<style>

</style>