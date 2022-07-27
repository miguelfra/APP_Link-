<template>
  <button @click="deletLink(link.id)" class="btn btn-danger text-dark">
    Delet Link
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: { link: Object },

  methods: {
    ...mapActions('links', ['delet']),
      deletLink(id) {
      this.delet(id);
      this.$swal("DELETED WITH SUCCESS", "", "success");
      this.$router.push('/newLink')
    },
  },
};
</script>

