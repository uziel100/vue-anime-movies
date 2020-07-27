<template>
  <div class="container-md distance-nav">
    <div class="box-loader">
      <h1 class="title-search">Buscaste "{{ title }}"</h1>
      <div class="ph-item">
        <div class="" v-for="n in 4" :key="n" >
          <div class="ph-picture box-img box"></div>   
          <div class="ph-row box">
            <div class="ph-col-8 "></div>            
            <div class="ph-col-2 "></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
          </div>     
        </div>       
      </div>
      <div class="ph-item">
        <div class="" v-for="n in 4" :key="n" >
          <div class="ph-picture box-img box"></div>   
          <div class="ph-row box">
            <div class="ph-col-8 "></div>            
            <div class="ph-col-2 "></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
          </div>     
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "ViewLoading",
  data(){
    return{
      title: null,
    }
  },
  computed:{
    ...mapState(['loading'])
  },
  created(){
    this.title = this.$route.params.title;
    this.goSearchView()
  },
  methods:{
    ...mapActions(['searchMovies']),
    
    async goSearchView(){
      await this.searchMovies( this.title )
      if(!this.loading)
        this.$router.push(`/search/${this.title}`)                    
    }
  }
};
</script>

<style >

.ph-item{
  border: none !important;   
  width: 100%;
  padding: 5px;
  margin: 0px;
}

.box-img{  
  width: 100%;
  height: 230px;
  margin: 10px auto;
}

.box{
  width: 100%;
  margin: 5px auto;
}

.box-loader{
  width: 90%;
  margin: auto;
}

@media screen and (max-width: 768px) {
  .box-loader{
    margin-top: 150px;
  }

  .title-search{
    margin-bottom: 15px;
  }
  .box-img{
    height: 200px;
  }
  .box{
    width: 200px;
  }

  .ph-row{
    width: 200px;
  }
}

@media screen and (max-width: 561px) {
  .box-img{
    height: 250px;
  }
  .box{
    width: 350px;
  }

  .ph-row{
    width: 350px;
  }

  .ph-item>*{
    padding-left: 0px;
  }
}

</style>