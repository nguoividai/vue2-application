<template>
  <v-card class="task-body">
    <v-slide-y-transition class="py-0" group v-if="tasks && tasks.length > 0">
      <template v-for="(task, i) in tasks">
        <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

        <v-list-item :key="`${i}-${task.text}`">
          <v-list-item-action>
            <v-checkbox
              v-model="task.done"
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
          </v-list-item-action>

          <v-spacer></v-spacer>

          <v-scroll-x-transition>
            <v-icon v-if="task.done" color="success">mdi-check</v-icon>
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
  },
};
</script>

<style></style>
