import SearchForm  from 'components/SearchForm/SearchForm';
import MovieGallery from 'components/GalleryList/MovieGallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useState, useEffect } from 'react';
import { getMoviesSearch } from '../components/services/getApi';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [trigger, setTrigger] = useState({});
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [total, settotal] = useState(0);

  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState(query || undefined);

  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (!query || !searchQuery) {
      setMovies([]);
      return () => {
        controller.abort();
      };
    }

    setSearchQuery(query);
    if (searchQuery !== query) {
      setMovies([]);
    }

    if (searchQuery && query) {
      getMoviesSearch(page, query, signal)
        .then(data => {
          setMovies(prevState => [...prevState, ...data.results]);
          settotal(data.total_pages);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }

    return () => {
      controller.abort();
    };
  }, [query, page, searchQuery, trigger]);

  const handleSubmitForm = query => {
    setMovies([]);
    setPage(1);
    settotal(0);
    setTrigger({});
    setSearchParams({ query: query.movieSearch });
  };

  const handleLoadMoreButton = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchForm search={searchQuery} onSubmit={handleSubmitForm} />
      {movies.length > 0 && (
        <>
          <MovieGallery movies={movies} state={{ from: location }} />
          {total !== page && <LoadMoreButton onClick={handleLoadMoreButton} />}
        </>
      )}
    </>
  );
};

export default Movies;
