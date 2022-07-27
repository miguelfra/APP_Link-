<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark" v-if="token">
    <router-link class="navbar-brand font-bold" to="/"
      >Favorite Link</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Links</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/newLink">New Link</router-link>
        </li>

        <li class="nav-item active">
          <button class="bg-danger d-block w-100 btn btn-danger px-3 nav-link" @click="Logout">Logout</button> 
        </li>
      </ul>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-dark navbar-dark" v-else>
    <router-link class="navbar-brand font-bold" to="/signup"
      >register</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active mb-1 mr-lg-5" >
          <router-link
            class="bg-success btn btn-success px-3 nav-link "
            to="/signin"
            >Sign IN</router-link
          >
        </li>
        <li class="nav-item active">
          <router-link
            class="bg-success btn btn-success px-3 nav-link"
            to="/signup"
            >Sign UP</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>


<style scoped>
.font-bold,
.nav-link {
  font-weight: bold;
}
a {
  font-size: 20px;
}
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["token"]),
  },

  methods: {
    ...mapActions("auth", ['Logout'])
  }
};
</script>
