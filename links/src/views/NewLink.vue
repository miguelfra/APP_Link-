<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-8 col-lg-8 col-sm-8 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">New Link</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="newLink">
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
                ></textarea>
              </div>
              <div class="form-group mt-2">
                <button class="btn btn-success btn-block">Save</button>
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
export default {
  data: () => ({
    link: {
      title: "",
      url: "",
      description: "",
    },
  }),

  methods: {
    ...mapActions('links', ['post']),
    
    newLink() {
      this.post(this.link);
      this.$swal("CREATED WITH SUCCESS", "", "success");
       this.$router.push("/");   
    },
  },
};
</script>