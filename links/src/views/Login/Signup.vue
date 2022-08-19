<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="card text-center">
          <div class="card-header">
            <h3>SignUp</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signup">
              <div class="form-group">
                <input
                  v-model="user.email"
                  type="type"
                  name="fullname"
                  placeholder="Email"
                  class="form-control"
                  autofocus
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-success btn-block">SingUP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    user: {
      username: "",
      password: "",
      email: "",
    },
  }),
  methods: {
    async signup() {
      if (
        this.user.username == "" ||
        this.user.password == "" ||
        this.user.email == ""
      ) {
        this.$swal("LLene Todo los Campos", "", "error");
      } else {
        try {
          const res = await axios.post(
            "https://favorite-link.herokuapp.com/api/auth/signup",
            this.user
          );
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
        } catch (error) {
          const alertError = error.response.data.message;
          this.$swal(alertError, "", "error");
        }
      }
    },
  },
};
</script>

<style>
</style>