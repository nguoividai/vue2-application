<template>
  <v-card class="task-body">
    <v-slide-y-transition class="py-0" group v-if="tasks && tasks.length > 0">
      <template v-for="(task, i) in tasks">
        <v-divider v-if="i !== 0" :key="`${task.id}-divider`"></v-divider>

        <v-list-item :key="task.id">
          <v-list-item-content>
            <v-list-item-title class="pl-4">
              <v-checkbox
                :input-value="task.done"
                :color="(task.done && 'grey') || 'primary'"
                @change="updateTask({ ...task, done: !task.done })"
              >
                <template v-slot:label>
                  <div
                    :class="
                      (task.done && 'grey--text') ||
                      'blue-grey--text text--darken-2'
                    "
                    class="ml-4 text-truncate"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-title>
          </v-list-item-content>

          <v-scroll-x-transition>
            <v-icon v-if="task.done" color="success">mdi-check</v-icon>
            <small v-else class="text--darken-4 text-right">
              {{ task.created_at | timeAgo }} <br />
              <v-btn
                :loading="loadingBtn"
                icon
                color="red"
                @click="deleteTask(task)"
              >
                <v-icon color="danger">mdi-delete</v-icon>
              </v-btn>
            </small>
          </v-scroll-x-transition>
        </v-list-item>
      </template>
    </v-slide-y-transition>
    <v-container v-else>Empty</v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
    updateTask: {
      type: Function,
      default: () => {},
    },
    deleteTask: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    ...mapState({
      loadingBtn: (state) => state.task.loadingBtn,
    }),
  },
};
</script>

<style></style>
