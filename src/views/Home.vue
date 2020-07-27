<template >
  <main class="container distance-nav flex ">
    <section class="box-search">
      <h1 class="color-primary">BUSCA TU ANIME FAVORITO</h1>
      <div class="input-search search-lg">        
        <input @keyup.enter="searchMovie" class="search search-lg" type="search" placeholder="Buscar" v-model="title" />
        <img @click="searchMovie" class="icon-search" src="@/assets/icon/Vector.png" alt="search" />
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: "Home",
  components: {},
  data(){
    return{
      title: ''
    }
  },
  methods:{
    ...mapActions(['searchMovies']),

    searchMovie(){      
      if(this.title.length > 0){
        this.$router.push(`/searching/${ this.title }`)
        this.searchMovies( this.title );
      }
    }
  }
};
</script>


<style >

.box-search {
  margin: 150px auto;
  max-width: 460px;
  text-align: center;
  padding: 20px;
}

.box-search > h1 {
  margin-bottom: 30px;
  font-size: 35px;
  letter-spacing: 2px;
  text-shadow: 0px 2px 1px rgb(255, 255, 255), 2px 2px 1px #fff;
}

.box-search .search {
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 50px;  
}

.box-search .icon-search {
  top: 14px;
  right: 20px;
}

.search-lg {
  height: 45px;
  font-size: 20px;
}
</style>
