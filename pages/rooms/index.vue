<template>
  <div>
    <div>
      <hero-rooms />
    </div>
    <room-container />
  </div>
</template>

<script>
import HeroRooms from '../../components/rooms/HeroRooms.vue';
import RoomContainer from "../../components/rooms/RoomContainer.vue";
export default {
  components: {
    RoomContainer,
    HeroRooms,
  },
};
</script>

<style>
</style>