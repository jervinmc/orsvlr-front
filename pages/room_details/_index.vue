<template>
  <div>
      <div>
          <room-details-container />
      </div>
      <div>
        <other-rooms />
      </div>
      <div>
        <footer-all />
      </div>
  </div>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue'
import OtherRooms from '../../components/room_details/OtherRooms.vue'
import RoomDetailsContainer from '../../components/room_details/RoomDetailsContainer.vue'
export default {
  components: { RoomDetailsContainer,OtherRooms,FooterAll },

}
</script>

<style>

</style>