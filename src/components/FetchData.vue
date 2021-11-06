<template>
  <div class="fetch-data"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "FetchData",
  data: () => {
    return {
      url: `https://storage.googleapis.com/public.storykube.com/start2impact/fires.json`,
    };
  },
  methods: {
    async fetchData() {
      try {
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const response = await axios({
          method: "get",
          url: proxyUrl + this.url,
        });
        this.$emit("received", response.data);
      } catch (error) {
        console.error(error);
        return error;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.fetch-data {
  display: none;
}
</style>
