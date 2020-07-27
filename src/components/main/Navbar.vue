<template>
  <header>
    <nav class="nav">
      <div class="wrapper flex navbar">
        <div class="nav-left flex">
          <h1 class="logo">Animes</h1>
          <div class="nav-links bold-600">
            <router-link to="/" >Inicio</router-link>
            <router-link to="/movies" >Peliculas</router-link>
          </div>
        </div>
        <div class="nav-center">
          <div class="input-search">
            <input @keyup.enter="searchMovie"  v-model="title" class="search" type="search" placeholder="Buscar" />
            <img @click="searchMovie" class="icon-search" src="@/assets/icon/Vector.png" alt="search" />
          </div>
        </div>
        <div class="nav-rigth"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      title: ''
    }
  },
  methods:{
    searchMovie(){      
      if(this.title.length > 0){
        this.$router.push(`/searching/${ this.title }`)
        this.title = ''
      }
    }
  }
};
</script>

<style >
.nav {
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;

  z-index: 100;
}

.nav-left {
  flex-basis: 30%;
  flex-grow: 100px;
}

.logo {
  color: 000;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 60px;
  margin-right: 30px;
}

.nav-center {
  flex-basis: 40%;
  padding: 0 10px;
}

.input-search {
  position: relative;  
}

.search {
  background: #eee;
  border: none;
  width: 100%;
  height: 35px;
  border-radius: 60px;
  padding: 0 60px 0 20px;
  color: #555;
  font-size: 14px;
  outline: none;
}

.icon-search {
  width: 17px;
  position: absolute;
  top: 8px;
  right: 15px;
  cursor: pointer;
}

.nav-links {
  color: #555;
  flex-wrap: nowrap;
}

.nav-links > a {
  margin-right: 15px;
  font-size: 16px;
}

.nav-rigth {
  flex-basis: 30%;
}

@media screen and (max-width: 1035px) {
  .nav-left {
    flex-basis: 40%;
  }

  .nav-center {
    width: 40%;
  }

  .nav-rigth {
    flex-basis: 20%;
  }
}

@media screen and (max-width: 780px) {
  .distance-nav {
    margin-top: 110px !important;
  }

  .nav {
    height: 110px;
  }

  .nav .navbar {
    flex-direction: column;
  }

  .nav-center {
    width: 85%;
  }

  .nav .search {
    height: 40px;
  }

  .nav .icon-search {
    top: 10px;
  }
}
</style>