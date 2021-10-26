<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item to="/students">
        <v-img
          lazy-src="require('../assets/logo.png')"
          max-height="150"
          width="100%"
          :src="require('../assets/logo.png')"
        ></v-img>
      </v-list-item>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dense style="z-index: 2">
      <v-app-bar-nav-icon @click="() => (drawer = !drawer)"></v-app-bar-nav-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [{ title: "Aluno", link: "/students", icon: "mdi-view-dashboard" }],
      right: null,
    };
  },
};
</script>

<style>
.title {
  text-align: center;
}
.v-application a {
  color: transparent;
}
</style>
