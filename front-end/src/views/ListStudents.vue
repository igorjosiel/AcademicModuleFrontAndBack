<template>
  <v-app>
    <v-navigation-drawer app>
      <NavigationMenu></NavigationMenu>
    </v-navigation-drawer>

    <v-app-bar app>
    
    </v-app-bar>
    <Table></Table>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";
import Table from "../components/Table";

export default {
  components: {
    NavigationMenu,
    Table,
  },
  data() {
    return {
    };
  },
};
</script>
