<template>
  <v-card
    class="mx-auto justify-center mt-10"
    max-width="800"
    outlined
    :style="{background: 'blue'}"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <h1 class=" mb-4 text-center mb-2">
          Seja bem vindo
        </h1>
        
        <span class="text-center ">
          Seja bem vindo ao sistema 
          de gestão de alunos da instituição EdTech
        </span>
        <v-btn
          max-width="200"
          depressed
          color="danger"
          class="mx-auto my-10"
          to="/aluno"
        >
          Gestão de Alunos
        </v-btn>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>