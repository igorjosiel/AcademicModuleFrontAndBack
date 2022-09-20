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
      class="borderContainers"
    >
      <template v-slot:top>
        <v-card
          :elevation="10"
          style="
            max-width: 1440px !important;
            margin-left: 2%;
            margin-right: 2%;
            margin-bottom: 2%;
            margin-top: 2%;
            .v-application {
              margin-bottom: 20px;
              border-radius: 10px;
              background-color: white;
            }
          "
        >
          <v-row no-gutters class="borderContainers" style="padding-right: 10px; margin-top: 10px;">
            <v-col cols="12" sm="4" style="margin-top: 20px;">
              <Input label="Nome" :value="filter.name" />
            </v-col>
            <v-col cols="12" sm="4" style="margin-top: 20px;">
              <Input label="CPF" :value="filter.cpf" />
            </v-col>
            <v-col cols="12" sm="4" style="margin-top: 20px;">
              <Input label="RA" :value="filter.ra" />
            </v-col>
          </v-row>
        </v-card>
        <div style="display: flex; flex-direction: row; width: 100%; justify-content: flex-end;">
              <v-col cols="12" sm="3">
                <Button
                  backgroundColor="primary"
                  text="Buscar"
                  icon="search"
                  @onClick="getStudents(filter)"
                />
              </v-col>
              <v-col cols="12" sm="3">
                <Button
                  backgroundColor="success"
                  text="Cadastrar"
                  icon="plus"
                  @onClick="
                    openCreateStudent = true;
                    operation = 'create';
                    dataStudent = undefined;
                    isUpdate = false;"
                  />
              </v-col>
            </div>
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
// import { listStudents } from "../services";
import DialogMessage from "./DialogMessage";
import formatCPF from "../views/utils/formatCPF";
import DialogUpdateStudent from "./DialogUpdateStudent";
import DialogConfirmationDelete from "./DialogConfirmationDelete";
import DialogCreateStudent from "./DialogCreateStudent";

import Input from "./Input.vue";
import Button from "./Button.vue";

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
    Button,
    Input,
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
    async getStudents() {
      console.log('Deu bom...')
      // try {
      //   const { data, status } = await listStudents(filter);

      //   if (data.data.length === 0) {
      //     this.openModal(data, status);
      //     return;
      //   }

      //   this.students = data.data;
      // } catch (error) {
      //   const { status, data } = error.response;
      //   this.openModal(data, status);
      // }
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
