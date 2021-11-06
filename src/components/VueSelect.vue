<template>
  <div class="center con-selects">
    <vs-select
      filter
      multiple
      placeholder="Select one or more days"
      v-model="select_value"
    >
      <vs-option-group>
        <div slot="title">Days</div>
        <vs-option label="21" value="2020-08-21"> 21-08-2020 </vs-option>
        <vs-option label="22" value="2020-08-22"> 22-08-2020 </vs-option>
        <vs-option label="23" value="2020-08-23"> 23-08-2020 </vs-option>
        <vs-option label="24" value="2020-08-24"> 24-08-2020 </vs-option>
        <vs-option label="25" value="2020-08-25"> 25-08-2020 </vs-option>
        <vs-option label="26" value="2020-08-26"> 26-08-2020 </vs-option>
        <vs-option label="27" value="2020-08-27"> 27-08-2020 </vs-option>
        <vs-option label="28" value="2020-08-28"> 28-08-2020 </vs-option>
      </vs-option-group>
      <vs-option-group>
        <div slot="title">Shortcuts</div>
        <vs-button :active="active == 1" @click="active = 1">
          Whole Week
        </vs-button>
        <vs-button :active="active == 2" @click="active = 2"> Clear </vs-button>
      </vs-option-group>
    </vs-select>
  </div>
</template>

<script>
export default {
  name: "VueSelect",
  data: () => ({
    select_value: [],
    active: 0,
    selected: [],
  }),
  methods: {
    sendArray() {
      this.$emit("selected", this.select_value);
    },
  },
  watch: {
    active: function () {
      if (this.active == 1) {
        this.select_value = [
          "2020-08-21",
          "2020-08-22",
          "2020-08-23",
          "2020-08-24",
          "2020-08-25",
          "2020-08-26",
          "2020-08-27",
          "2020-08-28",
        ];
        this.active = 0;
      } else if (this.active == 2) {
        this.select_value = [];
        this.active = 0;
      }
    },
    select_value: function () {
      this.sendArray();
    },
  },
};
</script>

<style></style>
