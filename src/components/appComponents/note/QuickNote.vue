<template>
  <v-card class="h-100">
    <v-card-text>
      <h3
        class="d-flex title blue-grey--text text--darken-2 font-weight-regular"
        style="justify-content: space-between"
      >
        Note
        <AddNewNote
          class="float-right"
          :onShow="onShow"
          :onClose="onClose"
          :onSubmit="onSubmit"
          :visible="visible"
          :note="itemEdit"
        />
      </h3>
      <v-list two-line>
        <v-list-item-group multiple active-class="active-list-transparent">
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title" @click="onShow(item)">
              <template>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-primary"
                    v-text="item.title"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    class="mt-2"
                    v-text="item.description"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="item.action"
                  ></v-list-item-action-text>

                  <span
                    @click="
                      (e) => {
                        e.stopPropagation();
                        onChangeIsImportant(item.id);
                      }
                    "
                  >
                    <v-icon v-if="!item.isImportant" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>
                    <v-icon v-else color="yellow">mdi-star</v-icon>
                  </span>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    AddNewNote: () => import("./AddNewNote"),
  },
  computed: {
    ...mapState({
      items: (state) => state.note.notes,
    }),
  },
  data() {
    return {
      visible: false,
      itemEdit: null,
    };
  },
  methods: {
    ...mapMutations(["updateNote", "createNote", "deleteNote"]),
    onChangeIsImportant(itemId) {
      this.items = this.items.map((e) =>
        e.id === itemId ? { ...e, isImportant: !e.isImportant } : e
      );
    },
    onShow(itemEdit) {
      this.itemEdit = itemEdit ? { ...itemEdit } : null;
      this.visible = true;
    },
    onClose() {
      this.visible = false;
      this.itemEdit = null;
    },
    onSubmit() {
      if (!this.itemEdit?.id) {
        this.createNote(this.itemEdit);
      } else {
        this.updateNote(this.itemEdit);
      }

      this.onClose();
    },
  },
};
</script>

<style></style>
