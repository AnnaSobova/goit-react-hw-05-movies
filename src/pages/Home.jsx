import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrendsOfMovies } from "components/services/getApi";
import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import HomeGallery from "../components/GalleryList/HomeGallery";


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
  
    const location = useLocation();
  
    const handleLoadMoreButton = () => {
      setPage(prevState => prevState + 1);
    };

    useEffect (()=>{
     getTrendsOfMovies(page).then(movies=>{
        setMovies(prevState=> [...prevState,...movies.results]);
        setTotal(movies.total_pages);
     });
    }, [page]);

    return(
        <>
      <HomeGallery movies={movies} state={{ from: location }} />
      {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
    </>
  );
};

export default Home;