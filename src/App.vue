<template>
  <div id="app" 
    :class="{'background-home' : this.$router.app._route.name === 'Home',
            'background-movies' : this.$router.app._route.name === 'Movies' }"   
            
    >
    <navbar />    
    <router-view/>
    <footerEnd />
  </div>
</template>

<script>

import Navbar from '@/components/main/Navbar.vue'
import FooterEnd from '@/components/main/Footer.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import FadeLoader from 'vue-spinner/src/FadeLoader'

export default {
  components:{
    Navbar,
    FooterEnd,
    PulseLoader,
    FadeLoader
  },
  created(){
    console.log(this.$router.app._route.name);
  },
  data(){
      return{
          loading: true,
          color: "#FF4A4A",
          size: '50px',
          height: '15px',
          width: '5px'
      }
  }
}
</script>

<style>
@import url(../node_modules/placeholder-loading/dist/css/placeholder-loading.min.css);

input{
    /* outline: none; */
}

.background-home{
    background: url(./assets/img/img-fondo.png);
    background-repeat: no-repeat;
    background-size: 600px 100vh;
    background-position-x: 100%;
}

.background-movies{
    background: linear-gradient(180deg, #fff 75%, #313940 25%);
}

.background-search{
    background-image: url(./assets/img/fondo-search1.png);
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-size: 700px 615px;
}

a.router-link-exact-active {
  color: #42b983;
}

.preloader{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 101;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

.wrapper {
    max-width: 93%;
    margin: 0 auto;
}

.flex {
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.container {
    max-width: 93%;
    margin: auto;
}

.color-primary {
    color: #FF4A4A;
}

.distance-nav {
    margin-top: 60px !important;
}

.bold-400 {
    font-weight: 400;
}

.bold-500 {
    font-weight: 500;
}

.bold-600 {
    font-weight: 600;
}

.bold-700 {
    font-weight: 700;
}

a {
    color: #555;
    text-decoration: none;
}

a:active {
    color: #555 !important;
}

a:visited {
    color: #555 !important;
}





</style>
