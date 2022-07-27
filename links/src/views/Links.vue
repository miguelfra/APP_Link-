<template>
  <div class="container p-4">
    <h1 class="text-center f-weight-bold">Favorite Links</h1>
    <div class="row">
      
      <div
        class="col-md-6 col-lg-3 p-3"
        v-for="link in links"
        :key="link.id"
        v-if="condition"
      >
        <div class="card text-center gris">
          <div class="card-body">
            <a :href="link.url" target="blanck">
              <h3 class="card-title text-uppercase">{{ link.title }}</h3>
            </a>

            <p class="m-2"><span>Description: </span>{{ link.description }}</p>
            <p>
              <span>Created Ago: </span
              ><timeago :datetime="link.created_at"></timeago>
            </p>
            <BtnEdit :link="link" />
            <BtnDelet :link="link" />
          </div>
        </div>
      </div>


      <div class="col-md4 mx-auto" v-if="!condition">
        <div class="card else card-body text-center">
          <p>No hay ningun Link guardado aun.</p>
          <router-link to="/newLink">Crea uno!</router-link>
        </div>
      </div>

    </div> 
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BtnEdit from "../components/BtnEdit.vue";
import BtnDelet from "../components/BtnDelet.vue";

export default {
  components: { BtnEdit, BtnDelet },
  data: () => ({
    condition: true,
  }),

  mounted() {
    this.get();
    this.check();
  },

  computed: {
    ...mapState("links", ["links"]),
  },

  methods: {
    ...mapActions("links", ["get"]),

    async check() {
      const link = await this.get();

      if (link.length > 0) {
        this.condition = true;
      } else {
        this.condition = false;
      }
    },
  },
};
</script>


<style scoped>
.f-weight-bold{
  font-weight: bold;
}
.gris {
  background-color: rgb(175, 183, 183);
}
p {
  color: rgb(210, 18, 18);
  font-weight: bold;
}
span {
  font-weight: bold;
  color: rgb(14, 14, 14);
}
.text-dark {
  font-weight: bold;
}
.else {
  background-color: rgb(89, 85, 85);
}
p {
  font-size: 20px;
}
</style>