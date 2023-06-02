<template>
  <v-container fluid class="down-top-padding">
    <v-breadcrumbs :items="breadcrumbs"> </v-breadcrumbs>
    <v-card>
      <v-container fluid>
        <v-text-field color="success" loading disabled></v-text-field>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="filter.search"
              label="Search"
              prepend-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <range-picker-dialog v-model="filter.dates" />
          </v-col>
          <v-col cols="12" lg="12">
            <v-tabs v-model="tab" grow>
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                <template>
                  <task-list
                    v-if="item === 'Remaining'"
                    :tasks="taskManagementRemainingList"
                  />
                  <task-list
                    v-else-if="item === 'Completed'"
                    :tasks="taskManagementCompletedList"
                  />
                  <task-list v-else :tasks="tasks" />
                </template>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TaskList from "../../components/appComponents/task/TaskList.vue";
import RangePickerDialog from "../../components/commonComponents/datepicker/RangePickerDialog.vue";

export default {
  components: { TaskList, RangePickerDialog },
  computed: {
    ...mapState({
      tasks: (state) => state.task.taskManagements,
    }),
    ...mapGetters([
      "taskManagementCompletedList",
      "taskManagementRemainingList",
    ]),
  },
  data: () => ({
    tab: null,
    items: ["Remaining", "Completed", "All"],
    dates: [],
    filter: {},
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        href: "#/dashboard/main-dashboard",
      },
      {
        text: "Task Management",
        disabled: true,
      },
    ],
  }),
};
</script>

<style></style>
