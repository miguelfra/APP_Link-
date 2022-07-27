<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import { mapActions } from "vuex";
export default {
  components: { Nav },

  methods: {
    ...mapActions("auth", ["ActionToken"]),
  },

  created() {
    this.ActionToken();
  },

};
</script>