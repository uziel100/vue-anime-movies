<template>
  <div class="container-md distance-nav" >
    <h1 class="title-search">Buscaste "{{ titleSearch }}"</h1>

    <section style="text-align: center" v-if="groupMoviesBySearch.length == 0">
      <img class="img-empty" src="../assets/img/undraw_Taken_if77.svg" alt="imagen">
      <h1  class="title-section" style="font-size: 20px">No se encontraron resultados de la busqueda</h1>
    </section>
    <section v-else class="movies">
      <div  class="grid">
        <div class="items-movies">
             <movie v-for="movie in groupMoviesBySearch" :key="movie.mal_id"
                :urlImg="movie.image_url"
                :title="movie.title"
                :id="movie.mal_id"
            />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Movie from "@/components/Movies/Movie.vue";
import Api from '@/Api'
import { mapState } from 'vuex'

const api = new Api();

export default {
  name: "Search",
  components: {
    Movie
  },
  data(){
    return{
      titleSearch: '',
      movies: {}
    }
  },
  created(){
    this.titleSearch = this.$route.params.searchTitle;         
  },

  computed: {
    ...mapState(['groupMoviesBySearch'])
  },

  methods:{
   
  }
};
</script>

<style>

.title-search {
    margin-top: 120px;
    margin-bottom: 50px;
    color: #555;
}

.img-empty{
  width: 250px;
  margin: auto;
}

</style>