<template>
  <v-expand-x-transition>
    <v-dialog v-model="dialog" persistent max-width="500" transition v-show="expand">
      <v-card
        style="
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          align-content: center;
        "
      >
        <v-card-title
          >Tem certeza que quer deletar
          {{ dataStudent && dataStudent.name }}?</v-card-title
        >
        <v-card-actions class="dialog">
          <v-btn
            color="green darken-1"
            class="btnDelete"
            text
            @click="$emit('closeModal')"
          >
            Não
          </v-btn>
          <v-btn color="red darken-1" class="btnDelete" text @click="deleteItem">
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <DialogMessage
      v-if="openMessage"
      @closeModal="openMessage = false"
      v-bind:message="message"
      v-bind:status="status"
    />
  </v-expand-x-transition>
</template>

<script>
import { deleteStudent } from "../services";
import DialogMessage from "./DialogMessage";

export default {
  props: ["dataStudent"],
  data() {
    return {
      dialog: true,
      openMessage: false,
      message: "",
      status: "",
      operation: "",
    };
  },
  components: {
    DialogMessage,
  },
  methods: {
    openModal(data, status) {
      this.message = data.message;
      this.status = status;
      this.openMessage = true;
    },
    async deleteItem() {
      try {
        const { data, status } = await deleteStudent(this.dataStudent.id);
        this.openModal(data, status);
      } catch (error) {
        const { status, data } = error.response;
        this.openModal(data, status);
      }
    },
  },
};
</script>

<style>
.btnDelete {
  width: 40%;
  border-radius: 50px;
}
</style>
