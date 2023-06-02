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

          <!-- <v-list-item-action>
            <v-checkbox
              :value="task.done"
              :color="(task.done && 'grey') || 'primary'"
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
          </v-list-item-action> -->

          <v-spacer></v-spacer>

          <v-scroll-x-transition>
            <v-icon v-if="task.done" color="success">mdi-check</v-icon>
            <small v-else class="text--darken-4">{{
              task.created_at | timeAgo
            }}</small>
          </v-scroll-x-transition>
        </v-list-item>
      </template>
    </v-slide-y-transition>
    <v-container v-else>Empty</v-container>
  </v-card>
</template>

<script>
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
  },
};
</script>

<style></style>
