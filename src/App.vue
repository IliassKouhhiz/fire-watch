<template>
  <div id="app">
    <header>
      <img src="./assets/fire_watch.svg" class="img" />
      <h1>Fire Watch</h1>
    </header>
    <vue-select class="vue-select" @selected="selected"></vue-select>
    <fetch-data @received="getData"></fetch-data>
    <map-component :locations="send_location"></map-component>
  </div>
</template>

<script>
import FetchData from "./components/FetchData.vue";
import MapComponent from "./components/MapComponent.vue";
import VueSelect from "./components/VueSelect.vue";

export default {
  name: "App",
  components: {
    FetchData,
    MapComponent,
    VueSelect,
  },
  data: function () {
    return {
      option: true,
      data: [],
      selected_slots: [],
      send_location: [],
    };
  },
  methods: {
    selected(value) {
      this.selected_slots = value;
    },
    filterResults(data, array) {
      let multidimensiona_array = [];
      for (let value of array)
        multidimensiona_array.push(data.filter((item) => item.date === value));
      this.cleanArray(multidimensiona_array);
    },
    getData(data) {
      this.data = data;
    },
    cleanArray(array) {
      let test = [];
      array.map((item) => {
        item.map((data) => {
          test.push(data);
        });
      });
      this.send_location = test;
    },
  },
  watch: {
    selected_slots: function () {
      if (this.data.length != 0) {
        this.filterResults(this.data, this.selected_slots);
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #fffffd;
}

#app {
  margin: 0px 50px 0px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  .img {
    margin-left: 0;
    width: 55px;
  }

  h1 {
    position: absolute;
    left: calc(50% - 80px);
    font-family: "Playfair Display", serif;
  }

  .range {
    z-index: 100;

    .calendar {
      position: relative;
    }
  }
}

.vue-select {
  position: absolute;
  right: 50px;
  top: 30px;
}

.vs-select__options {
  left: calc(100% - 250px) !important;
}
</style>
