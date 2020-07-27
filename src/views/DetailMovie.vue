<template>
  <main class="container-md distance-nav">
    <div v-if="loading" >
      <movie-detail style="margin-top: 100px;" />
      <div class="ph-item">
        <div class v-for="n in 4" :key="n">
          <div class="ph-picture box-img box"></div>
          <div class="ph-row box">
            <div class="ph-col-8"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="card-detail">
        <div class="card-detail-left">
          <img :src="movie.image_url" alt />
        </div>
        <div class="card-content">
          <h1>{{ movie.title }}</h1>
          <div class="wrapper-content">
            <div class="description bold-300">
              <p>{{ movie.synopsis }}</p>
            </div>
            <div class="texto-item bold-700">
              <p>
                Score:
                <span>{{ movie.score }}</span>
              </p>
              <p>
                Episodes:
                <span>{{ movie.episodes }}</span>
              </p>
            </div>
            <div class="line-time">
              <p class="date date-start">10/12/2002</p>
              <hr class="line-time-border" />
              <p class="date date-end">10/12/2002</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <section>
        <h1 class="title-section">Populares</h1>
        <div class="grid">
          <div class="items-movies">
            <movie
              v-for="movie in topAnime"
              :key="movie.mal_id"
              :urlImg="movie.image_url"
              :title="movie.title"
              :id="movie.mal_id"
            />
          </div>
        </div>
      </section> -->
    </div>

  </main>
</template>

<script>
import Movie from "@/components/Movies/Movie.vue";
import MovieDetail from "@/components/placeholder/MovieDetail.vue";

import { mapState, mapMutations } from "vuex";
import Api from "@/Api";

const api = new Api();

export default {
  name: "DetailMovie",
  data() {
    return {
      movie: {
        title: "",
        img: "",
        synopsis: "",
        score: 0,
        episodes: 0,
      },
    };
  },
  components: {
    Movie,
    MovieDetail,
  },

  created() {
    const idMovie = this.$route.params.id;
    this.getMovie(idMovie);
  },

  computed: {
    ...mapState(["topAnime", "loading"]),
  },

  methods: {
    ...mapMutations(['setLoading']),

    async getMovie(id) {
      this.setLoading(true);

      const movie = await api.getMovie(id);
      this.movie = movie.data;

      this.setLoading(false);
    },
  },
};
</script>

<style>
.card-detail {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: linear-gradient(
      233.22deg,
      rgba(243, 112, 111, 0.3) 0%,
      rgba(255, 255, 255, 0) 75.89%
    ),
    #ffffff;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);

  margin: 110px auto;
  cursor: pointer;
}

.card-detail-left {
  flex-basis: 30%;
}

.card-detail-left > img {
  width: 100%;
  height: 100%;
}

.card-content {
  flex-basis: 65%;
  /* margin-left: %; */
}

.card-content > h1 {
  font-weight: bold;
  font-size: 35px;
  letter-spacing: 0.03em;
  margin-top: 70px;
}

.card-content .description {
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: capitalize;
}

.card-content .texto-item {
  margin: 30px auto;
}

.texto-item > p {
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: capitalize;
  margin: 25px auto;
}

.texto-item > p > span {
  font-weight: 100;
}

.wrapper-content {
  padding: 50px;
}

.line-time-border {
  height: 10px;
  border: none;

  background: #6e7cfb;
}

.date-start {
  text-align: left;
}

.date {
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: #000000;
  margin: 10px auto;
}

.date-end {
  text-align: right;
}

@media screen and (max-width: 1200px) {
  .card-detail {
    overflow: hidden;
    /* height: 500px; */
  }

  .card-detail-left {
    flex-basis: 40%;
    max-width: 40%;
    min-width: 40%;
  }

  .card-detail-left > img {
    width: 100%;
    height: 100%;
  }

  .card-content {
    flex-basis: 55%;
    margin-left: 5%;
  }

  .wrapper-content {
    padding: 30px;
  }
}

@media screen and (max-width: 576px) {
  .card-detail {
    flex-direction: column;
    height: auto;
    margin-top: 150px;
  }

  .card-detail-left {
    flex-basis: 100%;
    min-width: 100%;
    max-width: 100%;
  }

  .wrapper-content {
    padding: 5px;
  }

  .card-content > h1 {
    margin: 20px 0;
    font-size: 23px;
  }

  .card-content .description {
    font-size: 14px;
  }

  .texto-item > p {
    font-size: 14px;
  }

  .date {
    font-size: 14px;
  }
}
</style>