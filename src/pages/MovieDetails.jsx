import {getMovieDetails} from '../components/services/getApi';
import {MovieDetailsItem, } from '../components/MovieDetailsItem/MovieDetailsItem.styled';
import {useState, useEffect} from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import {ThreeDots} from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { TiArrowLeft } from "react-icons/ti";


const MovieInfo=()=>{
    const [movie, setMovie]= useState({});
    const [isLoad, setIsLoad]= useState(false);
    const {movieId} = useParams();
   
    const location =useLocation();
    const backLink = location.state?.from??'/';
  
     useEffect(()=>{
        getMovieDetails(movieId).then(result=>{
            setMovie(result.data);
            setIsLoad(true);
        });
     },[movieId]);

     const { title, poster_path, release_date, popularity, overview, genres } =
     movie;
     const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
     const releaseYear = new Date(release_date).getFullYear();
     return(
        <div>
            {isLoad?(
                <>
                <Link to ={backLink}>
                    <TiArrowLeft size="10"/>
                    Back
                </Link>
                <MovieDetailsItem>
                    <img src={imageURL} width='300' alt={title}/>
                    <div>
                        <h1>
                            {title} ({releaseYear})
                        </h1>
                        <h2>Popularity: {Math.round(popularity)} </h2>
                        <h2>Owerview </h2>
                        <p>{overview}</p>
                        <h2>Genres</h2>
                        {genres.map(genre =>{
                            return <p key = {genre.id}> {genre.name}</p>;
                        })}
                    </div>
                </MovieDetailsItem>
                <hr/>
                <p> Additional information</p>
                <ul>
                    <li>
                        <Link to ='cast' state={{from:backLink}}>
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link to = "reviews" state={{from: backLink}}>
                            Reviews
                        </Link>
                    </li>
                </ul>
                <hr/>
                </>
            ):(
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#d7c62a" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             />
            
            )}
            <Outlet/>
        </div>
     );
};

export default MovieInfo;