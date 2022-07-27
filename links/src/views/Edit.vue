<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <h2 class="text-center">EditLink</h2>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="EditLink">
              <div class="form-group">
                <input
                  v-model="link.title"
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Title"
                  autofocus
                />
              </div>
              <div class="form-group">
                <input
                  v-model="link.url"
                  type="url"
                  name="url"
                  class="form-control"
                  placeholder="Url"
                />
              </div>
              <div class="form-grou">
                <textarea
                  v-model="link.description"
                  name="description"
                  rows="2"
                  class="form-control"
                  placeholder="Description"
                >
                </textarea>
              </div>
              <div class="form-group mt-2">
                <button class="btn btn-success btn-block">Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    link: [],
  }),

  methods: {
    ...mapActions("links", ["update"]),
    async EditLink() {
      this.update(this.link);
      this.$swal("EDITED WITH SUCCESS", "", "success");
      this.$router.push("/");
    },
    async getLink() {
      const { id } = this.$route.params;

      try {
        const res = await axios(`http://localhost:3000/api/links/${id}`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        const data = res.data;

        this.link = data;
      } catch (error) {
        const alertError = error.response.data.message;
        this.$swal(alertError, "", "error");
      }
    },
  },

  created() {
    this.getLink();
  },
};
</script>

<style scoped>
input,
textarea {
  font-weight: bold;
  color: rgb(255, 0, 0);
}
</style>