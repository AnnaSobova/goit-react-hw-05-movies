import { SearchForm } from "components/SearchForm/SearchForm";
import MovieGallery from "components/GalleryList/MovieGallery";
import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import {useState, useEffect} from 'react';
import {getMoviesSearch} from '../components/services/getApi';
import { useSearchParams, useLocation } from "react-router-dom";

export const Movies = ()=>{
    const [page,setPage]= useState(1);
    const[searchParams, setSearchParams]= useSearchParams();
    const[movies,setMovies]=useState([]);
    const [total,settotal]= useState(0);
    const[searchQuery,setSearchQuery]= useState('');

    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(()=>{
        if(!query){
            return;
        }
        if(searchQuery!== query){
            setMovies([]);
        }

        getMoviesSearch(page, query).then(data=>{
            setMovies(prevState=>[...prevState,...data.results]);
            settotal(data.total_pages);
            setSearchQuery(query);
        });

    },[query,page,searchQuery]);

    const handleSubmitForm = query=>{
        setPage(1);
        settotal(0);
        setSearchParams({query: query.searchMovie});
    }

     const handleLoadMoreButton = () =>{
        setPage(prevState=> prevState+1);
     };

     return(
        <>
        <SearchForm onSubmit={handleSubmitForm}/>
        {movies.length>0&&(
            <>
            <MovieGallery  movies={movies} state={{from:location}}/>
            {total!== page &&<LoadMoreButton onClick={handleLoadMoreButton}/>}
            </>
        )}
        </>
     );
};