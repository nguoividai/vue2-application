<template>
  <v-card class="mb-7 h-100">
    <v-card-text class="pa-5">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular mb-4">
        Task
      </h3>
      <v-text-field
        v-model="task"
        label="What are you working on?"
        filled
        @keydown.enter="create"
      >
        <v-fade-transition v-slot:append>
          <v-icon v-if="task" @click="create"> add_circle </v-icon>
        </v-fade-transition>
      </v-text-field>

      <h2 class="font-weight-medium success--text text-center">
        Tasks:&nbsp;
        <v-fade-transition leave-absolute>
          <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
        </v-fade-transition>
      </h2>

      <v-divider class="mt-4"></v-divider>

      <v-row class="my-1" align="center">
        <span class="mx-4 info--text">Remaining: {{ taskRemaining }}</span>

        <v-divider vertical></v-divider>

        <span class="mx-4 success--text">Completed: {{ taskCompleted }}</span>

        <v-spacer></v-spacer>

        <v-progress-circular
          :value="progress"
          class="mr-2"
        ></v-progress-circular>
      </v-row>

      <v-divider class="mb-4"></v-divider>

      <task-list :tasks="tasks" />

      <v-divider></v-divider>
      <div class="mt-1">
        <a href="#">View more <v-icon>mdi-chevron-double-right</v-icon></a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import TaskList from "./TaskList.vue";

export default {
  components: { TaskList },
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks,
    }),
    ...mapGetters([
      "taskCompleted",
      "taskRemaining",
      "progress",
      // ...
    ]),
  },
  data() {
    return {
      task: null,
    };
  },
  methods: {
    ...mapMutations([
      "createTask", // map `this.increment()` to `this.$store.commit('increment')`
      "updateTask",
      "deleteTask",
    ]),
    create() {
      this.createTask({ done: false, text: this.task });
      this.task = null;
    },
  },
};
</script>

<style lang="scss">
.task-body {
  max-height: calc(100vh - 500px);
  overflow: auto;
}
</style>
