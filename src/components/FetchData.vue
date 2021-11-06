<template>
  <div class="fetch-data"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "FetchData",
  data:() => {
    return {
      url: `http://localhost:8080/public.storykube.com/start2impact/fires.json`
    }
  },
  methods: {
    async fetchData () {
      try {
        const response = await axios({
          method: "get",
          url: this.url
        });
        this.$emit("received", response.data);
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>
  .fetch-data {
    display: none;
  }
</style>