<template>
   <router-link :to="`edit/${link.id}`">
     <button type="button" class="btn btn-warning mr-1 text-dark">Edit</button>
   </router-link>
</template>

<script>
export default {
  props: {link: Object},
  
}
</script>


<style scoped>
.text-dark{
    font-weight: bold;
}
</style>



