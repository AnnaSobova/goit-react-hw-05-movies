import { useParams } from "react-router-dom";
import {getMovieCredits} from '../services/getApi';
import {useState, useEffect} from 'react';
import CastCard from "./Cast.styled";

 const Cast =()=>{
    const{movieId}=useParams();
    const [cast, setCast]=useState([]);
    const [isLoad, setIsLoad]= useState(false);
    useEffect(()=>{
        getMovieCredits(movieId)
        .then(result=>setCast(result))
        .finally(setIsLoad(true));
    },[movieId]);

    return(
        <>
        {isLoad&&(
            <>
            <p>Cast</p>
            
               <ul>
              <CastCard>  
             {cast.map(actor=>{
                const{id,name,profile_path,character}= actor;
                const imageURL =`https://image.tmdb.org/t/p/w500${profile_path}`;
                return(
                
                    <li key={id}>
                        {profile_path&&(
                            <img src={imageURL} width= "100" alt={name}/>
                        )}
                        <p> Name: {name}</p>
                        <p>Character:{character}</p>
                    </li>
                   
                );
             })}
             </CastCard>
            </ul> 
            
            </>
        )}
        </>
    );
};

export default Cast;