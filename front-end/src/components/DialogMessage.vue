<template>
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
      <v-card-title>{{ message }}</v-card-title>
      <v-card-actions class="dialog">
        <v-btn
          :color="status === 200 || status === 201 ? 'green darken-1' : 'red darken-1'"
          class="btnConfirmation"
          text
          @click="$emit('closeModal')"
        >
          {{ (status && status === 200) || status === 201 ? "Sucesso" : "Erro" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["message", "status"],
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style>
.btnConfirmation {
  width: 40%;
  border-radius: 50px;
}
</style>
