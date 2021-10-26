<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5"
            >{{ operation === "create" ? "Cadastro de " : "Atualização do " }} Aluno</span
          >
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Nome*"
              persistent-hint
              required
              v-model="student.name"
              prepend-icon="mdi-account-plus"
              clearable="true"
            >
            </v-text-field>
            <v-text-field
              label="Email*"
              required
              prepend-icon="mdi-email"
              v-model="student.email"
              clearable="true"
            >
            </v-text-field>
            <v-text-field
              label="RA*"
              type="text"
              required
              disabled="true"
              prepend-icon="mdi-file-document"
              v-model="student.ra"
              clearable="true"
            >
            </v-text-field>
            <v-text-field
              label="CPF*"
              type="text"
              required
              prepend-icon="mdi-file-document"
              disabled="true"
              v-model="student.cpf"
              clearable="true"
            >
            </v-text-field>
          </v-form>
          <small>Campos marcados com (*) são obrigatórios!</small>
        </v-card-text>
        <v-card-actions class="buttonsContainer">
          <v-btn
            color="orange darken-1"
            class="buttons"
            text
            @click="$emit('closeModal')"
          >
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" class="buttons" text @click="updateStudent">
            Salvar
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
  </v-row>
</template>

<script>
import { updateStudent } from "../services";
import DialogMessage from "./DialogMessage";

export default {
  props: ["dataStudent"],
  data() {
    return {
      correctValues: false,
      student: {
        name: "",
        email: "",
        cpf: "",
        ra: "",
      },
      message: "",
      openMessage: false,
      status: "",
      dialog: true,
    };
  },
  created() {
    if (this.dataStudent) {
      this.student.name = this.dataStudent.name;
      this.student.cpf = this.dataStudent.cpf;
      this.student.email = this.dataStudent.email;
      this.student.ra = this.dataStudent.ra;
    }
  },
  methods: {
    openModal(data, status) {
      this.message = data.message;
      this.status = status;
      this.openMessage = true;
    },
    async updateStudent() {
      try {
        const { data, status } = await updateStudent(this.dataStudent.id, this.student);
        this.openModal(data, status);
      } catch (error) {
        const { status, data } = error.response;
        this.openModal(data, status);
      }
    },
  },
  components: {
    DialogMessage,
  },
};
</script>

<style>
.bar > div {
  background-color: #3fb984;
}
.buttons {
  width: 30%;
  height: 50px !important;
  border-radius: 15px;
}
.buttonsContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
