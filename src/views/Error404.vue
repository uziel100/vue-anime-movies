<template>
  <div class="distance-nav view">      
      <img class="img-not-found" src="../assets/img/undraw_page_not_found_su7k.svg" alt="Page Not Found">
      <router-link class="link" to="/" >Regresar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .view{
        text-align: center;
    }
    .img-not-found{
        width: 60%;
        margin-top: 50px;        
    }
    .link{
        margin-top: 15px;
        display: block;
        font-size: 20px;
    }
   
</style>