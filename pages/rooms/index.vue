<template>
  <div>
    <div>
      <hero-rooms />
    </div>
    <room-container />
    <footer-all />
  </div>
</template>

<script>
import FooterAll from '../../components/general/FooterAll.vue';
import HeroRooms from '../../components/rooms/HeroRooms.vue';
import RoomContainer from "../../components/rooms/RoomContainer.vue";
export default {
  components: {
    RoomContainer,
    HeroRooms,
    FooterAll,
  },
};
</script>

<style>
</style>