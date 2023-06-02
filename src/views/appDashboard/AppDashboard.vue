<template>
  <v-container
    fluid
    class="down-top-padding align-item-stretch"
    style="align-items: start"
  >
    <v-row>
      <v-col cols="12" lg="6">
        <QuickTask />
      </v-col>
      <v-col cols="12" lg="6"> <QuickNote /> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BasicDashboard",
  components: {
    QuickTask: () => import("@/components/appComponents/task/QuickTask"),
    QuickNote: () => import("@/components/appComponents/note/QuickNote"),
  },
  data: () => ({}),
};
</script>
