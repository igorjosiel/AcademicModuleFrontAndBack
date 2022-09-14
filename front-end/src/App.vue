<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <router-link class="align-center" width="100" to="/">
            <v-img
              aspect-ratio="1"
              class="float-sm-left"
              width="100%"
              height="80"
              max-height="100"
              contain
              lazy-src="./assets/logo.png"
              src="./assets/logo.png"
            ></v-img>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <h3 class="text-center mt-20">Módulo Acadêmico</h3>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ route }}</v-toolbar-title>
    </v-app-bar>

    <v-main style="padding: 100px 0px 0px 300px;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const routeTitle = {
  list: "Consulta de Alunos",
  save: "Cadastro de Aluno",
  main: "Módulo Acadêmico",
};
export default {
  data: () => ({
    items: [{ title: "Alunos", icon: "mdi-account-outline", url: "/students" }],
    drawer: null,
    route: "",
  }),
  watch: {
    $route(to) {
      this.route = routeTitle[to.name];
    },
  },
  mounted() {
    this.route = routeTitle[this.$route.name];
  },
};
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
