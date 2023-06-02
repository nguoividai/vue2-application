<template>
  <v-text-field
    :loading="loadingBtn"
    v-model="task"
    label="What are you working on?"
    filled
    @keydown.enter="create"
  >
    <v-fade-transition>
      <v-icon v-if="task" @click="create"> add_circle </v-icon>
    </v-fade-transition>
  </v-text-field>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    task: null,
  }),
  computed: {
    ...mapState({
      loadingBtn: (state) => state.task.loadingBtn,
    }),
  },
  methods: {
    ...mapActions(["createTaskAction"]),
    create() {
      if (!this.task) {
        return;
      }
      this.createTaskAction({
        text: this.task,
        callback: (data) => {
          this.callback(data);
          this.task = null;
        },
      });
    },
  },
};
</script>

<style></style>
