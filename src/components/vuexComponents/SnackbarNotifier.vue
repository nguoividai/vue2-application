<template>
  <v-snackbar right top v-model="snackbar.show" :color="snackbar.color">
    {{ snackbar.content }}

    <template v-slot:action="{ attrs }">
      <v-btn icon text v-bind="attrs" @click="hide">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["snackbar"]),
  },
  methods: {
    ...mapMutations({
      hide: "snackbar/hideSnackbar",
    }),
  },
};
</script>
