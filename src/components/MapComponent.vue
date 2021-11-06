<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution"/>
      <span v-for="location in locations" :key="location.index">
        <l-marker v-if="location.lenght != 0" :lat-lng="[location.latitude, location.longitude]"/>
      </span>  
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker} from "vue2-leaflet";
import { latLng } from "leaflet";

export default {
  name: "MapComponent",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: {
    locations: Array
  },
  data() {
    return {
      zoom: 3,
      center: latLng(),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  }
};
</script>

<style lang="scss">
  .map {
    border: 3px solid #202124;
    border-radius: 20px;

    .vue2leaflet-map {
      border-radius: 20px;
    }
  }
</style>
