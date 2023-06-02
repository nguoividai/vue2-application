<template>
  <v-container fluid class="down-top-padding">
    <v-breadcrumbs :items="breadcrumbs"> </v-breadcrumbs>
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="filter.search"
              label="Search"
              prepend-icon="mdi-magnify"
              @keyup.enter="changeFilter"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <range-picker-dialog
              v-model="filter.dates"
              @change="changeFilter"
            />
          </v-col>
          <v-col cols="12" sm="12">
            <task-add :callback="onCallBackCreate" />
          </v-col>
          <v-col cols="12" lg="12">
            <v-tabs v-model="tab" grow @change="changeTab">
              <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                <overlay-loading :loading="loading">
                  <template slot="loading-body">
                    <task-list
                      v-if="item === 'Remaining'"
                      :tasks="taskManagementRemainingList"
                      :updateTask="updateTask"
                    />
                    <task-list
                      v-else-if="item === 'Completed'"
                      :tasks="taskManagementCompletedList"
                      :updateTask="updateTask"
                    />
                    <task-list v-else :tasks="tasks" :updateTask="updateTask" />

                    <v-divider></v-divider>
                    <v-btn
                      v-if="showPagination"
                      class="mt-2"
                      color="primary"
                      @click="loadMore"
                    >
                      <v-icon left> mdi-sync </v-icon>
                      Load More
                    </v-btn>
                  </template>
                </overlay-loading>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import TaskList from "../../components/appComponents/task/TaskList.vue";
import RangePickerDialog from "../../components/commonComponents/datepicker/RangePickerDialog.vue";
import OverlayLoading from "../../components/commonComponents/loading/OverlayLoading.vue";
import TaskAdd from "../../components/appComponents/task/TaskAdd.vue";
import { DEFAULT_PAGE } from "@/constants/app.constant";

export default {
  components: { TaskList, RangePickerDialog, OverlayLoading, TaskAdd },
  computed: {
    ...mapState({
      tasks: (state) => state.task.taskManagements,
      loading: (state) => state.task.loading,
    }),
    ...mapGetters([
      "taskManagementCompletedList",
      "taskManagementRemainingList",
    ]),
  },
  data: () => ({
    tab: 0,
    items: ["Remaining", "Completed", "All"],
    dates: [],
    filter: {},
    page: DEFAULT_PAGE,
    showPagination: true,
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
  created() {
    this.changeTab(this.tab);
  },
  methods: {
    ...mapActions([
      "getListTaskAction",
      "getListPaginationTaskAction",
      "createTaskAction",
      "updateTaskAction",
      "deleteTaskAction",
    ]),
    updateTask(payload) {
      this.updateTaskAction({
        ...payload,
        callback: (data) => {
          this.$store.commit("updateTaskManagement", data);
        },
      });
    },
    changeTab(tabIndex) {
      const tab = this.items[tabIndex];
      this.page = DEFAULT_PAGE;
      console.log("filter", this.filter);
      this.getListTaskAction({
        page: this.page,
        search: this.filter.search,
        start_date: this.filter?.dates ? this.filter.dates[0] : undefined,
        end_date: this.filter?.dates ? this.filter.dates[1] : undefined,
        done:
          tab === "Remaining" ? false : tab === "Completed" ? true : undefined,
        callback: (data) => {
          this.showPagination = data?.length > 0;
        },
      });
    },
    loadMore() {
      this.page += 1;
      const tabName = this.items[this.tab];
      this.getListPaginationTaskAction({
        page: this.page,
        done:
          tabName === "Remaining"
            ? false
            : tabName === "Completed"
            ? true
            : undefined,
        search: this.filter.search,
        start_date: this.filter?.dates ? this.filter.dates[0] : undefined,
        end_date: this.filter?.dates ? this.filter.dates[1] : undefined,
        callback: (data) => {
          this.showPagination = data?.length > 0;
        },
      });
    },
    onCallBackCreate(data) {
      this.$store.commit("createTaskManagement", data);
    },
    changeFilter() {
      this.page = DEFAULT_PAGE;
      this.changeTab(this.tab);
    },
  },
};
</script>

<style></style>
