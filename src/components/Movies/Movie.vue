<template>
  <div class="card-movie">
    <div class="card-top">
      <!-- <img src="@/assets/img/anime0.png" alt="cartel" /> -->
      <img :src="urlImg" alt="cartel" />
    </div>
    <div class="card-body">
      <h3 class="card-title"> {{ title }} </h3>
      <button @click="goMovieDetail" >Ver Más</button>
    </div>
    <div class="card-footer">
      <hr class="line-card" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props:{
      urlImg:{
          type: String,
          required: true,
          default: '@/assets/img/anime0.png'
      },
      title: {
          type: String,
          required: true,
          default: 'Titulo de prueba'
      },
      id:{
        type: Number,
        required: true,
        default: 0      
      }
  },
  methods:{
      goMovieDetail(){
        this.$router.push(`/movie/${this.id}`)
      }
  }
};
</script>

<style>

.card-movie {
  grid-row: span 3;

  width: 23%;
  height: 490px;

  overflow: hidden;
  background: #fff;
  border: 1px solid #eee;
  margin: 0 auto;
  cursor: pointer;
  transition: all 200ms ease;
  margin-bottom: 30px;

  z-index: 2;
  position: relative;
}

.card-movie:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* background: rgba(0, 0, 0, 0.25); */
}

.card-top {
  width: 100%;
}

.card-top > img {
  width: 101%;
  height: 390px;  
}


.card-body {
  padding: 12px 15px;
  /* position: relative; */
}

.card-title {
  color: #555;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 10px 0;
}

.card-body > button {
  color: #fff;
  background: rgb(17, 100, 206) none repeat scroll 0% 0%;
  border: none;
  border-radius: 20px;
  font-size: 12px;
  padding: 5px 8px;
  width: 70px;
  margin-left: 65%;
  cursor: pointer;


  position: absolute;
  bottom: 15px;
  right: 10px;
}


.line-card {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6px;
  background: #ff4a4a;
  border: none;
  border-radius: 10px 10px 0 0;
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
</style>