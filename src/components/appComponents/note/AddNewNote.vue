<template>
  <v-dialog v-model="visible" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="{ ...props }" @click="onShow">
        Add New
      </v-btn>
    </template>
    <v-card v-if="visible">
      <v-card-title>
        <span class="text-h5">Add New Note</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Title*"
                required
                hint="Required"
                v-model="note.title"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-textarea
                label="Description"
                v-model="note.description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="note.id"
          :loading="loadingBtn"
          color="red"
          variant="text"
          @click="onDelete(note)"
        >
          <v-icon>mdi-delete</v-icon> Delete
        </v-btn>
        <v-btn color="link" variant="text" @click="onClose"> Close </v-btn>
        <v-btn
          :loading="loadingBtn"
          color="primary"
          variant="text"
          @click="onSubmit"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    onShow: {
      type: Function,
      default: () => {},
      required: true,
    },
    onClose: {
      type: Function,
      default: () => {},
      required: true,
    },
    onSubmit: {
      type: Function,
      default: () => {},
    },
    onDelete: {
      type: Function,
      default: () => {},
    },
    visible: {
      type: Boolean,
      default: false,
      required: true,
    },
    note: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapState({
      loadingBtn: (state) => state.note.loadingBtn,
    }),
  },
};
</script>

<style></style>
