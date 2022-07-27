<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="card text-center">
          <div class="card-header">
            <h3>SignIn</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signin">
              <div class="form-group">
                <input
                  v-model="user.username"
                  type="text"
                  placeholder="Username"
                  class="form-control"
                  autofocus
                />
              </div>
              <div class="form-group">
                <input
                  v-model="user.password"
                  type="password"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <button class="btn btn-primary btn-block">
                SingIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import axios from 'axios'
export default {
  data: () => ({
    user: {
      username: '',
      password: ''
    },
  }),

  methods: {
   async signin(){
      try {
            const res = await axios.post('http://localhost:3000/api/auth/signin',this.user);
            localStorage.setItem('token',  res.data.token);
            window.location.href = '/'
        } catch (error) {
          const alertError = error.response.data.message;
            this.$swal(alertError, "", "error");
        }
      
    }
  },
};
</script>

<style>
</style>