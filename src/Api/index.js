import axios from 'axios'
const path = 'https://api.jikan.moe/v3'

export default class Api{
    constructor(){

    }

    async getMoviesTop(){
        const url = `${path}/top/anime`;
        return await this.getRequestApi( url );
    }

    getRequestApi( url ){
        return axios.get(url)
    }

    async getMovie( id ){
        const url = `${path}/anime/${id}`;
        return await this.getRequestApi( url );
    }

    async getMoviesBySearch( search ){
        const url = `${path}/search/anime?q=${search}&page=1`;
        return await this.getRequestApi(url);
    }
}