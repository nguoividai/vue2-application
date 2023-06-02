<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="dates"
    persistent
    width="300px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateRangeText"
        label="Range Date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker range v-model="dates" @input="handleChange">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(dates)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  model: {
    event: "change",
  },
  data: () => ({
    dates: [],
    menu: false,
    modal: false,
  }),
  computed: {
    dateRangeText() {
      return this.sortDates.join(" ~ ");
    },
    sortDates() {
      const currentDates = this.dates ? [...this.dates] : [];
      currentDates.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a) - new Date(b);
      });
      return [...currentDates];
    },
  },
  methods: {
    handleChange() {
      this.$emit("change", this.sortDates);
    },
  },
};
</script>
