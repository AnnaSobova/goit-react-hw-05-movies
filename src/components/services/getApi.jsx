import axios from "axios";

const KEY = '3fcb05b829685e6a45bc9aa7307d9bc9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendsOfMovies = async (page, signal)=>{
    const responce = await axios.get(
        `/trending/movie/day?api_key=${KEY}&page=${page}`,
       { signal }
    );
    return responce.data 
};

export const getMoviesSearch = async (page, query) => {
    const response = await axios.get(
      `search/movie?api_key=${KEY}&query=${query}&page=${page}`
    );
    return response.data;
  };

export const getMovieDetails = async id=>{
    const responce = await axios.get(
        `movie/${id}?api_key=${KEY}&language=en-US`
    );
   return responce;
}

export const  getMovieCredits = async id=>{
    const responce = await axios.get(
        `/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return responce.data.cast;
};

export const getMovieRewiews = async id => {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
  };
