<template>
  <div>
    <DialogConfirmationDelete
      v-if="openConfirmationDelete"
      @closeModal="openConfirmationDelete = false"
      v-bind:dataStudent="dataStudent"
    />

    <DialogUpdateStudent
      v-if="openUpateStudent"
      @closeModal="openUpateStudent = false"
      v-bind:dataStudent="dataStudent"
    />

    <DialogCreateStudent
      v-if="openCreateStudent"
      @closeModal="openCreateStudent = false"
    />

    <DialogMessage
      v-if="openMessage"
      @closeModal="openMessage = false"
      v-bind:message="message"
      v-bind:status="status"
    />

    <v-data-table
      :headers="headers"
      :items="students"
      sort-by="ra"
      class="elevation-1 borderContainers"
    >
      <template v-slot:top>
        <v-container
          class="grey lighten-5"
          style="
            max-width: 1440px !important;
            margin-top: 20px;
            .v-application {
              padding-left: 0px !important;
            }
          "
        >
          <v-row no-gutters class="borderContainers" style="background: #f5f5f5">
            <v-col cols="12" sm="3">
              <v-text-field
                v-model="filter.name"
                label="Nome"
                class="pl-2"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field v-model="filter.cpf" label="CPF" class="pl-2"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field v-model="filter.ra" label="RA" class="pl-2"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2" class="d-flex align-center">
              <v-btn color="primary" dark class="btn" @click="getStudents(filter)">
                Buscar
              </v-btn>
            </v-col>
            <v-col cols="12" sm="2" class="d-flex align-center">
              <v-btn
                color="success"
                class="btn"
                dark
                @click="
                  openCreateStudent = true;
                  operation = 'create';
                  dataStudent = undefined;
                  isUpdate = false;
                "
              >
                + Aluno
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          size="30"
          color="#87CEEB"
          class="mr-2"
          style="width: 20px"
          @click="
            openUpateStudent = true;
            dataStudent = item;
          "
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="30"
          color="#FF0000"
          @click="
            openConfirmationDelete = true;
            dataStudent = item;
          "
        >
          mdi-delete</v-icon
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { listStudents } from "../services";
import DialogMessage from "./DialogMessage";
import formatCPF from "../views/utils/formatCPF";
import DialogUpdateStudent from "./DialogUpdateStudent";
import DialogConfirmationDelete from "./DialogConfirmationDelete";
import DialogCreateStudent from "./DialogCreateStudent";

export default {
  data: () => ({
    headers: [
      { text: "Registro Acadêmico", value: "ra" },
      { text: "Nome", value: "name" },
      { text: "CPF", value: "cpf" },
      { text: "Ações", value: "actions" },
    ],
    students: [],
    student: null,
    filter: {
      name: "",
      cpf: "",
      ra: "",
    },
    dialog: false,
    formatCPF,
    expand: false,
    openMessage: false,
    openUpateStudent: false,
    openConfirmationDelete: false,
    openCreateStudent: false,
    message: "",
    status: "",
    operation: "",
  }),
  components: {
    DialogMessage,
    DialogUpdateStudent,
    DialogConfirmationDelete,
    DialogCreateStudent,
  },
  created() {
    this.getStudents();
  },
  methods: {
    openModal(data, status) {
      this.message = data.message;
      this.status = status;
      this.openMessage = true;
    },
    async getStudents(filter) {
      try {
        const { data, status } = await listStudents(filter);

        if (data.data.length === 0) {
          this.openModal(data, status);
          return;
        }

        this.students = data.data;
      } catch (error) {
        const { status, data } = error.response;
        this.openModal(data, status);
      }
    },
    async deleteOpen(item) {
      if (item) this.student = item;
      this.dialog = true;
    },
  },
};
</script>

<style>
.v-btn__content span {
  font-size: 5px;
}
.sortable span {
  font-size: 18px;
}
.btn {
  border-radius: 10px;
  width: 60%;
  height: 40px !important;
  margin: 10px auto;
}
.dialog {
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  flex-direction: row;
}
.borderContainers {
  border: 1px solid #c0c0c0;
  border-radius: 15px;
}
</style>
