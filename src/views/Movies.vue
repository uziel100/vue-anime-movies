<template>
  <div>
    <section class="slider distance-nav">
      <img src="@/assets/img/slider0.png" alt="slider" />
      <h1 class="title-slider bold-600 wrapper">Encuentra Tu Serie Favorita</h1>
    </section>

    <div class="container-md">
      <section class="movies">
        <h1 class="title-section">Top Movies</h1>
        <div class="grid">
          <div class="items-movies">
            <movie v-for="movie in topAnime" :key="movie.mal_id"
                :urlImg="movie.image_url"
                :title="movie.title"
                :id="movie.mal_id"
            />
          </div>
        </div>

        <h1 class="title-section title-2">Mas vistos</h1>
        <div class="grid">
          <div class="items-movies">
             <movie v-for="movie in moreViewsAnime" 
                :key="movie.mal_id"
                :urlImg="movie.image_url"
                :title="movie.title"
                :id="movie.mal_id"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import Movie from '@/components/Movies/Movie.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: "Movies",
  components:{
      Movie
  },

  created(){
    this.getTopAnime();
    this.getMoreViewsAnime();
  },

  computed:{
    ...mapState(['topAnime','moreViewsAnime'])
  },
  methods:{
    ...mapActions(['getTopAnime', 'getMoreViewsAnime'])
  }

};
</script>

<style >

.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider > img {
  width: 100%;
  height: 100%;
}

.title-slider {
  font-style: normal;
  line-height: 60px;
  letter-spacing: 3px;
  font-size: 35px;
  display: block;
  position: absolute;
  width: 500px;
  bottom: 40px;
  left: 9%;
  color: #fff;
  text-transform: uppercase;  
}

.container-md {
  width: 82%;
  margin: 0 auto;
  /* height: 100vh; */
}

.title-section {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #555;  
}

.title-2{
  color: #fff
}

.items-movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;

  grid-column: 1 / -1;
}




@media screen and (max-width: 1250px) {
    .card-movie {
        width: 22%;
    }
}

@media screen and (max-width: 1064px) {
    .card-movie {
        width: 40%;
        margin-bottom: 30px;
    }
}


@media screen and (max-width: 768px) {
    .slider {
        height: 250px;
    }

    .title-slider {
        font-size: 30px;
        line-height: 40px;
    }
}

@media screen and (max-width: 576px) {
    .grid {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    .title-slider {
        width: 260px;
        text-align: center;
        font-size: 22px;
        margin: 0 auto;
    }

    .title-section {
        font-size: 20px;
    }

    .card-movie {
        width: 85%;
        margin-bottom: 30px;
    }

    .card-body > button {
        margin-left: calc(100% - 100px);
        height: 25px;
        width: 70px;
        border-radius: 5px;        
    }
}
</style>