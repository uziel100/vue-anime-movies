import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../Api'

Vue.use(Vuex)

const api = new Api();

const getMoviesByLimit = ( arr, n ) => arr.slice(0, n)
export default new Vuex.Store({
  state: {
    topMoviesAll: [],
    topAnime: [],
    moreViewsAnime: [],
    isMoviesTopFull: false,    
    groupMoviesBySearch: [],
    loading: false,
  },
  getters:{

  },
  mutations: {
    setTopMoviesAll( state, data ){
      state.topMoviesAll = data;
    },
    setTopAnime(state, movies ){
      state.topAnime = movies
    },
    setMoreViewsAnime(state, movies ){
      state.moreViewsAnime = movies
    },
    setMoviesSearch(state, movies){
      state.groupMoviesBySearch = movies;
    },

    setLoading(state, value){
      state.loading = value;
    },
    
  },
  actions: {
    async getMovies({ commit, state }){      
      if( state.topMoviesAll.length === 0 ){        
        const movies =  await api.getMoviesTop();
        commit('setTopMoviesAll', movies.data.top );
      }
    },

    async getTopAnime({ dispatch, state, commit }){
      await dispatch('getMovies');
      const topAnime = getMoviesByLimit( state.topMoviesAll, 4);
      commit('setTopAnime', topAnime );
    },

    getMoreViewsAnime({state, commit }){      
      const movies = getMoviesByLimit( state.topMoviesAll, 4);
      commit('setMoreViewsAnime', movies );
    },

    async searchMovies({ commit }, title ){
      commit('setLoading', true);
      try {
        const movie = await api.getMoviesBySearch( title );   
        commit('setMoviesSearch', movie.data.results);        
      } catch (error) {
        commit('setMoviesSearch', [] );  
      } finally {
        commit('setLoading', false);
      }
    }

  },
  modules: {
  }
})
